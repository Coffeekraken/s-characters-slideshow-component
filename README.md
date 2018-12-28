# Coffeekraken s-icon-component <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<!-- <a href="https://travis-ci.org/coffeekraken/s-icon-component">
		<img src="https://img.shields.io/travis/coffeekraken/s-icon-component.svg?style=flat-square" />
	</a> -->
	<a href="https://www.npmjs.com/package/coffeekraken-s-icon-component">
		<img src="https://img.shields.io/npm/v/coffeekraken-s-icon-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-icon-component/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-s-icon-component.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffeekraken/s-icon-component">
		<img src="https://img.shields.io/npm/dt/coffeekraken-s-icon-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-icon-component">
		<img src="https://img.shields.io/github/forks/coffeekraken/s-icon-component.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-icon-component">
		<img src="https://img.shields.io/github/stars/coffeekraken/s-icon-component.svg?style=social&label=Star&style=flat-square" />
	</a> -->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

Easily integrate icons using various driver like "img", "fonticon", "svg", "fontawesome", "material" and "foundation"

## Table of content

1. **[Demo](http://components.coffeekraken.io/app/s-icon-component)**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Drivers](#readme-drivers)
5. [Global configuration](#readme-global-configuration)
6. [Javascript API](doc/js)
7. [Sugar Web Components Documentation](https://github.com/coffeekraken/sugar/blob/master/doc/webcomponent.md)
8. [Browsers support](#readme-browsers-support)
9. [Code linting](#readme-code-linting)
10. [Contribute](#readme-contribute)
11. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
12. [Licence](#readme-license)

<a name="readme-install"></a>
## Install

```
npm install coffeekraken-s-icon-component --save
```

<a name="readme-get-started"></a>
## Get Started

First, import the component into your javascript file like so:

```js
import SIconComponent from 'coffeekraken-s-icon-component'
```

Then simply use it inside your html like so:

```html
<s-icon icon="address-book" driver="fontawesome"></s-icon>
<s-icon icon="my-cool-icon" driver="svg" icons-path="/icons"></s-icon>
```

<a name="readme-drivers"></a>
## Drivers

Here the list of drivers available and how they work:

1. `fonticon` : This driver assume that you have a fonticon in yout project.
  - Generate a `<i>` with class of `icon-{icon}`
2. `img` : This driver create an `<img>` tag and load your svg icon inside it
  - Depend on the `iconsPath` property
  - Generate an `<img>` tag with the source `{iconsPath}/{icon}.svg`
3. `svg` : This driver load the svg and put it inline in the page
  - Depend on the `iconsPath` property
  - Inline the svg loaded from `{iconsPath}/{icon}.svg`
4. `fontawesome` : Load [fontawesome](https://fontawesome.com/) and generate an `<i>` tag with the proper fontawesome class
5. `material` : Load [material icons](https://material.io/tools/icons/?style=baseline) and generate an `<i>` tag with the proper material class
6. `foundation` : Load [foundation icons](https://zurb.com/playground/foundation-icon-fonts-3) and generate an `<i>` tag with the proper foundation class


<a name="readme-global-configuration"></a>
## Global configuration

In order to avoid writing each time `driver="fontawesome"` etc, you can configure your component globally one time then use it quicker. Here how to do that:

```js
import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
SWebComponent.setDefaultProps({
  driver: 'svg',
  iconsPath: '/icons'
}, 's-icon')
```

This code need to be run BEFORE you import the `coffeekraken-s-icon-component`.

You can then use your component with ease like so:

```html
<s-icon icon="my-cool-icon"></s-icon>
```

<a id="readme-browsers-support"></a>
## Browsers support

| <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" /></br>Firefox | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" /></br>Chrome | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /></br>Safari |
| --------- | --------- | --------- | --------- |
| IE11+ | last 2 versions| last 2 versions| last 2 versions

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

> The webcomponent API (custom elements, shadowDOM, etc...) is not supported in some older browsers like IE10, etc... In order to make them work, you will need to integrate the [corresponding polyfill](https://www.webcomponents.org/polyfills).

<a id="readme-code-linting"></a>
##  Code linting

This package uses some code linting rules. Here's the list:

1. [StandardJS](https://standardjs.com/) for javascript files
2. [Stylelint](https://github.com/stylelint/stylelint) with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) for `scss` files

> Your commits will not been accepted if the code style is not respected!

<a id="readme-contribute"></a>
## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>
## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.  

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>
## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...
