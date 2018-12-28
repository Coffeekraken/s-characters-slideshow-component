import SWebComponent from "coffeekraken-sugar/js/core/SWebComponent"
import STimer from "coffeekraken-sugar/js/classes/STimer"

export default class SCharactersSlideshowComponent extends SWebComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps() {
    return {
      /**
       * Specify the values to use as sentences
       * @prop
       * @type    {Array<String>}
       */
      values: ["Hello world", "How are you universe"],

      /**
       * Specify the transition characters to use
       * @prop
       * @type    {Array<String>}
       */
      // eslint-disable-next-line
      characters: "+*/#%&§?-_",

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
      timeout: 4000,

      /**
       * Specify if the slider has to loop over the values or not
       * @prop
       * @type    {Boolean}
       */
      loop: true
    }
  }

  /**
   * Css
   * @protected
   */
  static defaultCss(componentName, componentNameDash) {
    return `
      ${componentNameDash} {
        display : inline-block;
      }
    `
  }

  /**
   * Mount component
   * @definition    SWebComponent.componentMount
   * @protected
   */
  componentMount() {
    super.componentMount()

    const { values } = this.props
    const [firstValue] = values

    // set the first value
    this.innerHTML = firstValue

    // init current slide idx
    this._currentSlideIdx = 0

    // create a timer for the slideshow
    this._sliderTimer = new STimer(this.props.timeout, {
      tickCount: 1
    })

    // when the slideshow is complete
    this._sliderTimer.onComplete(() => {
      // go to next
      this.next()
    })

    // play
    this.play()
  }

  /**
   * Component will receive prop
   * @definition    SWebComponent.componentWillReceiveProp
   * @protected
   */
  componentWillReceiveProp(name, newVal, oldVal) {
    super.componentWillReceiveProp(name, newVal, oldVal)
    switch (name) {
      case "timeout":
        this._sliderTimer.duration(newVal)
        break
      default:
        // do nothing by default
        break
    }
  }

  /**
   * Play
   */
  play() {
    // start the timer
    this._sliderTimer.start()
    // track is playing flag
    this._isPlaying = true
  }

  /**
   * Pause
   */
  pause() {
    // pause the timer
    this._sliderTimer.pause()
    // track the is playing flag
    this._isPlaying = false
  }

  /**
   * Stop
   */
  stop() {
    // stop the timer
    this._sliderTimer.stop()
    // track the is playing flag
    this._isPlaying = false
  }

  /**
   * Go to the next slide
   */
  next() {
    // handle loop property
    if (this._currentSlideIdx + 1 >= this.values.length && !this.props.loop) {
      // stop
      this.stop()
      // stop here
      return
    }
    // get the "from" sentence
    const fromSentence = this.props.values[this._currentSlideIdx]
    // update the currentSlideIdx
    this._currentSlideIdx =
      this._currentSlideIdx + 1 >= this.values.length
        ? 0
        : this._currentSlideIdx + 1
    // get the "to" sentence
    const toSentence = this.props.values[this._currentSlideIdx]
    // switch
    this.switch(fromSentence, toSentence, () => {
      if (this._isPlaying) {
        this._sliderTimer.start()
      }
    })
  }

  /**
   * Go to the previous slide
   */
  previous() {
    // handle loop property
    if (this._currentSlideIdx - 1 < 0 && !this.props.loop) {
      // stop
      this.stop()
      // stop here
      return
    }
    // get the "from" sentence
    const fromSentence = this.props.values[this._currentSlideIdx]
    // update the currentSlideIdx
    this._currentSlideIdx =
      this._currentSlideIdx - 1 < 0
        ? this.props.values.length - 1
        : this._currentSlideIdx - 1
    // get the "to" sentence
    const toSentence = this.props.values[this._currentSlideIdx]
    // switch
    this.switch(fromSentence, toSentence, () => {
      if (this._isPlaying) {
        this._sliderTimer.start()
      }
    })
  }

  /**
   * Switch from a sentence to another
   * @param    {String}    fromSentence    The from sentence
   * @param    {String}    toSentence    The to sentence
   * @param    {Function}    completeCb    The callbacl to call when the switch is finished
   */
  switch(fromSentence, toSentence, completeCb) {
    // switch characters
    this._switch(
      fromSentence,
      toSentence,
      splits => {
        const newLine = splits
          .map(character => {
            if (character === undefined)
              return `<span class="${
                this.componentNameDash
              }__character">&nbsp;</span>`
            return character
          })
          .join("")
        this.innerHTML = newLine
      },
      splits => {
        this.innerHTML = splits.join("").trim()
        if (completeCb) completeCb(splits)
      }
    )
  }

  /**
   * Split the text into an array
   *
   * Hello World
   * How are you unierse?
   *
   */
  _switch(from, to, cb = null, completeCb = null) {
    const fromSplits = from.split("")
    const toSplits = to.split("")
    const largeLength =
      fromSplits.length > toSplits.length ? fromSplits.length : toSplits.length
    const characters = this.props.characters.split("")
    const newSplits = []
    for (let i = 0; i < largeLength; i += 1) {
      newSplits.push(fromSplits[i])
    }
    const newSplitsIdx = []
    for (let i = 0; i < largeLength; i += 1) {
      newSplitsIdx.push(i)
    }
    const toSplitsIdx = []
    for (let i = 0; i < largeLength; i += 1) {
      toSplitsIdx.push(i)
    }

    let tickId = 0
    const timer = new STimer(this.props.duration, {
      tickCount: largeLength * 2
    })
    timer.onTick(() => {
      if (tickId < largeLength) {
        // phase 1, transform to characters
        // pick a slot in the newSplitsIdx stack
        const randomIdx =
          newSplitsIdx[Math.round(Math.random() * (newSplitsIdx.length - 1))]
        // remove the idx from the stack
        newSplitsIdx.splice(newSplitsIdx.indexOf(randomIdx), 1)
        // set a random character in the newSplits at the randomIdx idx
        newSplits[randomIdx] =
          characters[Math.round(Math.random() * (characters.length - 1))]
      } else {
        // phase 2, transform into the new text
        // pick a slot in the newSplitsIdx stack
        const randomIdx =
          toSplitsIdx[Math.round(Math.random() * (toSplitsIdx.length - 1))]
        // remove the idx from the stack
        toSplitsIdx.splice(toSplitsIdx.indexOf(randomIdx), 1)
        // grab the new character
        newSplits[randomIdx] = toSplits[randomIdx] ? toSplits[randomIdx] : null
      }
      // callback
      if (cb) cb(newSplits)
      // update tickId
      tickId += 1
    })
    timer.onComplete(() => {
      if (completeCb) completeCb(newSplits)
    })
    timer.start()
  }
}
