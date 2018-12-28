# SCharactersSlideshowComponent

Create a nice "slideshow" of sentences with a cool "split flap" random characters like effect

### Example

```html
<s-characters-slideshow
  values="['Hello World','How are you universe']"
></s-characters-slideshow>
```

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

Extends **SWebComponent**

## Attributes

Here's the list of available attribute(s).

### values

Specify the values to use as sentences

Type : **{ Array<String> }**

Default : **["Hello world", "How are you universe"]**

### characters

Specify the transition characters to use

Type : **{ Array<String> }**

Default : **+\*/#%&§?-\_**

### duration

Specify the transition duration in ms

Type : **{ Integer }**

Default : **500**

### timeout

Specify the timeout between two characters "slide"

Type : **{ Integer }**

Default : **4000**

### loop

Specify if the slider has to loop over the values or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**

## Methods

### play

Play

### pause

Pause

### stop

Stop

### next

Go to the next slide

### previous

Go to the previous slide

### switch

Switch from a sentence to another

#### Parameters

| Name         | Type                                                                                                       | Description                                      | Status   | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------- | ------- |
| fromSentence | **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**     | The from sentence                                | required |
| toSentence   | **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**     | The to sentence                                  | required |
| completeCb   | **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }** | The callbacl to call when the switch is finished | required |
