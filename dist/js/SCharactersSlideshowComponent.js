"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SWebComponent2 = _interopRequireDefault(require("coffeekraken-sugar/js/core/SWebComponent"));

var _STimer = _interopRequireDefault(require("coffeekraken-sugar/js/classes/STimer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Create a nice "slideshow" of sentences with a cool "split flap" random characters like effect
 *
 * @example    html
 * <s-characters-slideshow values="['Hello World','How are you universe']"></s-characters-slideshow>
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
var SCharactersSlideshowComponent =
/*#__PURE__*/
function (_SWebComponent) {
  _inherits(SCharactersSlideshowComponent, _SWebComponent);

  function SCharactersSlideshowComponent() {
    _classCallCheck(this, SCharactersSlideshowComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(SCharactersSlideshowComponent).apply(this, arguments));
  }

  _createClass(SCharactersSlideshowComponent, [{
    key: "componentMount",

    /**
     * Mount component
     * @definition    SWebComponent.componentMount
     * @protected
     */
    value: function componentMount() {
      var _this = this;

      _get(_getPrototypeOf(SCharactersSlideshowComponent.prototype), "componentMount", this).call(this);

      var values = this.props.values;

      var _values = _slicedToArray(values, 1),
          firstValue = _values[0]; // set the first value


      this.innerHTML = firstValue; // init current slide idx

      this._currentSlideIdx = 0; // create a timer for the slideshow

      this._sliderTimer = new _STimer.default(this.props.timeout, {
        tickCount: 1
      }); // when the slideshow is complete

      this._sliderTimer.onComplete(function () {
        // go to next
        _this.next();
      }); // play


      this.play();
    }
    /**
     * Component will receive prop
     * @definition    SWebComponent.componentWillReceiveProp
     * @protected
     */

  }, {
    key: "componentWillReceiveProp",
    value: function componentWillReceiveProp(name, newVal, oldVal) {
      _get(_getPrototypeOf(SCharactersSlideshowComponent.prototype), "componentWillReceiveProp", this).call(this, name, newVal, oldVal);

      switch (name) {
        case "timeout":
          this._sliderTimer.duration(newVal);

          break;

        default:
          // do nothing by default
          break;
      }
    }
    /**
     * Play
     */

  }, {
    key: "play",
    value: function play() {
      // start the timer
      this._sliderTimer.start(); // track is playing flag


      this._isPlaying = true;
    }
    /**
     * Pause
     */

  }, {
    key: "pause",
    value: function pause() {
      // pause the timer
      this._sliderTimer.pause(); // track the is playing flag


      this._isPlaying = false;
    }
    /**
     * Stop
     */

  }, {
    key: "stop",
    value: function stop() {
      // stop the timer
      this._sliderTimer.stop(); // track the is playing flag


      this._isPlaying = false;
    }
    /**
     * Go to the next slide
     */

  }, {
    key: "next",
    value: function next() {
      var _this2 = this;

      // handle loop property
      if (this._currentSlideIdx + 1 >= this.props.values.length && !this.props.loop) {
        // stop
        this.stop(); // stop here

        return;
      } // get the "from" sentence


      var fromSentence = this.props.values[this._currentSlideIdx]; // update the currentSlideIdx

      this._currentSlideIdx = this._currentSlideIdx + 1 >= this.props.values.length ? 0 : this._currentSlideIdx + 1; // get the "to" sentence

      var toSentence = this.props.values[this._currentSlideIdx]; // switch

      this.switch(fromSentence, toSentence, function () {
        if (_this2._isPlaying) {
          _this2._sliderTimer.start();
        }
      });
    }
    /**
     * Go to the previous slide
     */

  }, {
    key: "previous",
    value: function previous() {
      var _this3 = this;

      // handle loop property
      if (this._currentSlideIdx - 1 < 0 && !this.props.loop) {
        // stop
        this.stop(); // stop here

        return;
      } // get the "from" sentence


      var fromSentence = this.props.values[this._currentSlideIdx]; // update the currentSlideIdx

      this._currentSlideIdx = this._currentSlideIdx - 1 < 0 ? this.props.values.length - 1 : this._currentSlideIdx - 1; // get the "to" sentence

      var toSentence = this.props.values[this._currentSlideIdx]; // switch

      this.switch(fromSentence, toSentence, function () {
        if (_this3._isPlaying) {
          _this3._sliderTimer.start();
        }
      });
    }
    /**
     * Switch from a sentence to another
     * @param    {String}    fromSentence    The from sentence
     * @param    {String}    toSentence    The to sentence
     * @param    {Function}    completeCb    The callbacl to call when the switch is finished
     */

  }, {
    key: "switch",
    value: function _switch(fromSentence, toSentence, completeCb) {
      var _this4 = this;

      // switch characters
      this._switch(fromSentence, toSentence, function (splits) {
        var newLine = splits.map(function (character) {
          if (character === undefined) return "<span class=\"".concat(_this4.componentNameDash, "__character\">&nbsp;</span>");
          return character;
        }).join("");
        _this4.innerHTML = newLine;
      }, function (splits) {
        _this4.innerHTML = splits.join("").trim();
        if (completeCb) completeCb(splits);
      });
    }
    /**
     * Split the text into an array
     *
     * Hello World
     * How are you unierse?
     *
     */

  }, {
    key: "_switch",
    value: function _switch(from, to) {
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var completeCb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var fromSplits = from.split("");
      var toSplits = to.split("");
      var largeLength = fromSplits.length > toSplits.length ? fromSplits.length : toSplits.length;
      var characters = this.props.characters.split("");
      var newSplits = [];

      for (var i = 0; i < largeLength; i += 1) {
        newSplits.push(fromSplits[i]);
      }

      var newSplitsIdx = [];

      for (var _i2 = 0; _i2 < largeLength; _i2 += 1) {
        newSplitsIdx.push(_i2);
      }

      var toSplitsIdx = [];

      for (var _i3 = 0; _i3 < largeLength; _i3 += 1) {
        toSplitsIdx.push(_i3);
      }

      var tickId = 0;
      var timer = new _STimer.default(this.props.duration, {
        tickCount: largeLength * 2
      });
      timer.onTick(function () {
        if (tickId < largeLength) {
          // phase 1, transform to characters
          // pick a slot in the newSplitsIdx stack
          var randomIdx = newSplitsIdx[Math.round(Math.random() * (newSplitsIdx.length - 1))]; // remove the idx from the stack

          newSplitsIdx.splice(newSplitsIdx.indexOf(randomIdx), 1); // set a random character in the newSplits at the randomIdx idx

          newSplits[randomIdx] = characters[Math.round(Math.random() * (characters.length - 1))];
        } else {
          // phase 2, transform into the new text
          // pick a slot in the newSplitsIdx stack
          var _randomIdx = toSplitsIdx[Math.round(Math.random() * (toSplitsIdx.length - 1))]; // remove the idx from the stack

          toSplitsIdx.splice(toSplitsIdx.indexOf(_randomIdx), 1); // grab the new character

          newSplits[_randomIdx] = toSplits[_randomIdx] ? toSplits[_randomIdx] : null;
        } // callback


        if (cb) cb(newSplits); // update tickId

        tickId += 1;
      });
      timer.onComplete(function () {
        if (completeCb) completeCb(newSplits);
      });
      timer.start();
    }
  }], [{
    key: "defaultCss",

    /**
     * Css
     * @protected
     */
    value: function defaultCss(componentName, componentNameDash) {
      return "\n      ".concat(componentNameDash, " {\n        display : inline-block;\n      }\n    ");
    }
  }, {
    key: "defaultProps",

    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */
    get: function get() {
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
      };
    }
  }]);

  return SCharactersSlideshowComponent;
}(_SWebComponent2.default);

exports.default = SCharactersSlideshowComponent;