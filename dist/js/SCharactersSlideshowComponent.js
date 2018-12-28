"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SWebComponent2 = _interopRequireDefault(require("coffeekraken-sugar/js/core/SWebComponent"));

var _STimer = _interopRequireDefault(require("coffeekraken-sugar/js/classes/STimer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

      _get(_getPrototypeOf(SCharactersSlideshowComponent.prototype), "componentMount", this).call(this); // set the first value


      this.innerHTML = this.props.values[0]; // init current slide idx

      this._currentSlideIdx = 0; // create a timer for the slideshow

      var sliderTimer = new _STimer.default(this.props.timeout, {
        tickCount: 1
      }); // when the slideshow is complete

      sliderTimer.onComplete(function () {
        // get the "from" sentence
        var fromSentence = _this.props.values[_this._currentSlideIdx]; // update the currentSlideIdx

        _this._currentSlideIdx = _this._currentSlideIdx + 1 >= _this.values.length ? 0 : _this._currentSlideIdx + 1; // get the "to" sentence

        var toSentence = _this.props.values[_this._currentSlideIdx]; // switch characters

        _this.switch(fromSentence, toSentence, function (splits) {
          var newLine = splits.map(function (character) {
            if (character == undefined) return "<span class=\"".concat(_this.componentNameDash, "__character\">&nbsp;</span>");
            return character;
          }).join('');
          _this.innerHTML = newLine;
        }, function (splits) {
          _this.innerHTML = splits.join('').trim();
          sliderTimer.start();
        });
      }); // start the timer

      sliderTimer.start();
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
        default:
          // do nothing by default
          break;
      }
    }
    /**
     * Split the text into an array
     *
     * Hello World
     * How are you unierse?
     *
     */

  }, {
    key: "switch",
    value: function _switch(from, to) {
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var completeCb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var fromSplits = from.split('');
      var toSplits = to.split('');
      var largeLength = fromSplits.length > toSplits.length ? fromSplits.length : toSplits.length;
      var characters = this.props.characters.split('');
      var newSplits = [];

      for (var i = 0; i < largeLength; i++) {
        newSplits.push(fromSplits[i]);
      }

      var newSplitsIdx = [];

      for (var _i = 0; _i < largeLength; _i++) {
        newSplitsIdx.push(_i);
      }

      var toSplitsIdx = [];

      for (var _i2 = 0; _i2 < largeLength; _i2++) {
        toSplitsIdx.push(_i2);
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


        cb && cb(newSplits); // update tickId

        tickId++;
      });
      timer.onComplete(function () {
        completeCb && completeCb(newSplits);
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
      return "\n      ".concat(componentNameDash, " {\n        display : inline-block;\n      }\n      .").concat(componentNameDash, "__character {\n        display : inline-block;\n        width: 1ch;\n      }\n    ");
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
        values: ['Hello world', 'How are you universe', 'Nam suscipit libero lacinia sem.'],

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
      };
    }
  }]);

  return SCharactersSlideshowComponent;
}(_SWebComponent2.default);

exports.default = SCharactersSlideshowComponent;