# Attributes

Here's the list of available attribute(s).

## values

Specify the values to use as sentences

Type : **{ Array<String> }**

Default : **['Hello world','How are you universe']**

## //

Specify the transition characters to use

Type : **{ Array<String> }**

## duration

Specify the transition duration in ms

Type : **{ Integer }**

Default : **500**

## timeout

Specify the timeout between two characters "slide"

Type : **{ Integer }**

Default : **4000**

## loop

Specify if the slider has to loop over the values or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**

# Methods

## play

Play

## pause

Pause

## stop

Stop

## next

Go to the next slide

## previous

Go to the previous slide

## switch

Switch from a sentence to another

### Parameters

| Name         | Type                                                                                                       | Description                                      | Status   | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------- | ------- |
| fromSentence | **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**     | The from sentence                                | required |
| toSentence   | **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**     | The to sentence                                  | required |
| completeCb   | **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }** | The callbacl to call when the switch is finished | required |
