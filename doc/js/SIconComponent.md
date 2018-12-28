# Attributes

Here's the list of available attribute(s).

## icon

Specify the icon to display. If the icon file is `my-icon.svg`,
the icon parameter will be just `my-icon`.

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


## driver

Specify the driver to use. It can be:
- `fonticon` : Use a font icon set
- `img` : Use an img tag to load the svg icon
- `svg` : Inline the svg directly in the page
- 'fontawesome` : Using fontawesome icons. You still need to load the library by yourself
- `material` : Using google material icons. You still need to load the library by yourself

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **svg**


## iconsPath

Specify the path to the icons folder relative to the document root of your project

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **/dist/icons**


## iconsPrefix

Specify the icon prefix to use when using the `fonticon` driver

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **icon-**