import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
import STimer from 'coffeekraken-sugar/js/classes/STimer'

export default class SCharactersSlideshowComponent extends SWebComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps () {
    return {

      /**
       * Specify the values to use as sentences
       * @prop
       * @type    {Array<String>}
       */
      values: ['Hello world','How are you universe', 'Nam suscipit libero lacinia sem.'],

      /**
       * Specify the transition characters to use
       * @prop
       * @type    {Array<String>}
       */
      characters: '+*/\#%&§?-_',

      /**
       * Specify the transition duration in ms
       * @prop
       * @type    {Integer}
       */
      duration: 500,

      /**
       * Specify the timeout between two characters "slide"
       * @prop
       * @type    {Integer}
       */
      timeout: 4000
    }
  }

  /**
   * Css
   * @protected
   */
  static defaultCss (componentName, componentNameDash) {
    return `
      ${componentNameDash} {
        display : inline-block;
      }
      .${componentNameDash}__character {
        display : inline-block;
        width: 1ch;
      }
    `
  }

  /**
   * Mount component
   * @definition    SWebComponent.componentMount
   * @protected
   */
  componentMount () {
    super.componentMount()

    // set the first value
    this.innerHTML = this.props.values[0]

    // init current slide idx
    this._currentSlideIdx = 0

    // create a timer for the slideshow
    const sliderTimer = new STimer(this.props.timeout, {
      tickCount: 1
    })

    // when the slideshow is complete
    sliderTimer.onComplete(() => {
      // get the "from" sentence
      const fromSentence = this.props.values[this._currentSlideIdx]
      // update the currentSlideIdx
      this._currentSlideIdx = (this._currentSlideIdx+1 >= this.values.length) ? 0 : this._currentSlideIdx+1
      // get the "to" sentence
      const toSentence = this.props.values[this._currentSlideIdx]
      // switch characters
      this.switch(fromSentence, toSentence, (splits) => {
        const newLine = splits.map((character) => {
          if (character == undefined) return `<span class="${this.componentNameDash}__character">&nbsp;</span>`
          return character
        }).join('')
        this.innerHTML = newLine
      }, (splits) => {
        this.innerHTML = splits.join('').trim()
        sliderTimer.start()
      })
    })

    // start the timer
    sliderTimer.start()
  }

  /**
   * Component will receive prop
   * @definition    SWebComponent.componentWillReceiveProp
   * @protected
   */
  componentWillReceiveProp (name, newVal, oldVal) {
    super.componentWillReceiveProp(name, newVal, oldVal)
    switch (name) {
      default:
        // do nothing by default
      break
    }
  }

  /**
   * Split the text into an array
   *
   * Hello World
   * How are you unierse?
   *
   */
  switch(from, to, cb = null, completeCb = null) {
    const fromSplits = from.split('')
    const toSplits = to.split('')
    const largeLength = (fromSplits.length > toSplits.length) ? fromSplits.length : toSplits.length
    const characters = this.props.characters.split('')
    const newSplits = []
    for (let i=0; i<largeLength; i++) {
      newSplits.push(fromSplits[i])
    }
    const newSplitsIdx = []
    for (let i=0; i<largeLength; i++) {
      newSplitsIdx.push(i)
    }
    const toSplitsIdx = []
    for (let i=0; i<largeLength; i++) {
      toSplitsIdx.push(i)
    }

    let tickId = 0;
    const timer = new STimer(this.props.duration, {
      tickCount: largeLength * 2
    })
    timer.onTick(() => {
      if (tickId < largeLength) { // phase 1, transform to characters
        // pick a slot in the newSplitsIdx stack
        const randomIdx = newSplitsIdx[Math.round(Math.random()*(newSplitsIdx.length-1))]
        // remove the idx from the stack
        newSplitsIdx.splice(newSplitsIdx.indexOf(randomIdx),1)
        // set a random character in the newSplits at the randomIdx idx
        newSplits[randomIdx] = characters[Math.round(Math.random()*(characters.length-1))]
      } else { // phase 2, transform into the new text
        // pick a slot in the newSplitsIdx stack
        const randomIdx = toSplitsIdx[Math.round(Math.random()*(toSplitsIdx.length-1))]
        // remove the idx from the stack
        toSplitsIdx.splice(toSplitsIdx.indexOf(randomIdx),1)
        // grab the new character
        newSplits[randomIdx] = (toSplits[randomIdx]) ? toSplits[randomIdx] : null
      }
      // callback
      cb && cb(newSplits)
      // update tickId
      tickId++
    })
    timer.onComplete(() => {
      completeCb && completeCb(newSplits)
    })
    timer.start()
  }
}
