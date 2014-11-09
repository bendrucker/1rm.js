1rm.js
===

Estimate one rep maximum lifts in JS using a variety of formulas

## Setup
```bash
$ npm install 1rm
```
```js
var rm = require('1rm');
```

## Formulas
* `epley`: [Epley](http://en.wikipedia.org/wiki/One-repetition_maximum#Epley_Formula)
* `brzycki`: [Brzycki](http://en.wikipedia.org/wiki/One-repetition_maximum#Brzycki)
* `lander`: [Lander](http://en.wikipedia.org/wiki/One-repetition_maximum#Lander)
* `lombardi`: [Lombardi](http://en.wikipedia.org/wiki/One-repetition_maximum#Lombardi)
* `mayhew`: [Mayhew et al.](http://en.wikipedia.org/wiki/One-repetition_maximum#Mayhew_et_al.)
* `oconner`: [O'Conner et al.](http://en.wikipedia.org/wiki/One-repetition_maximum#O.27Conner_et_al.)
* `wathan`: [Wathan](http://en.wikipedia.org/wiki/One-repetition_maximum#Wathan)

## API

#### `{{method}}(weight, reps)` -> `Number`
Accepts `weight` and `reps` both `Number` and outputs the estimated one rep maximum (also `Number`). For browser use, make sure to parse your numeric inputs. Numeric strings are not supported. 

## Example

```js
rm.epley(400, 4) // 453.33...
```
