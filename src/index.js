'use strict'

exports.epley = function epley (weight, reps) {
  return weight * (1 + reps / 30)
}

exports.brzycki = function brzycki (weight, reps) {
  return weight * 36 / (37 - reps)
}

exports.lander = function lander (weight, reps) {
  return (100 * weight) / (101.3 - 2.67123 * reps)
}

exports.lombardi = function lombardi (weight, reps) {
  return weight * Math.pow(reps, 0.10)
}

exports.mayhew = function mayhew (weight, reps) {
  return (100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * reps))
}

exports.oconner = function oconner (weight, reps) {
  return weight * (1 + 0.025 * reps)
}

exports.wathan = function wathan (weight, reps) {
  return (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps))
}
