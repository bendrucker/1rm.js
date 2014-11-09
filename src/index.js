'use strict';

exports.epley = function epley (weight, reps) {
  return weight * (1 + reps / 30);
}

exports.brzycki = function brzycki (weight, reps) {
  return weight * 36 / (37 - reps);
}
