"use strict";

var supremeMathemathics = [
  'Cipher',
  'Knowledge',
  'Wisdom',
  'Understanding',
  'Culture or Freedom',
  'Power or Refinement',
  'Equality',
  'God',
  'Build or Destroy',
  'Born'
];

var limit = 1111111111;

for (var i = 0; i <= limit; i++) {
  if (allonesandzeros(i.toString()))
    console.log(i);
}

function allonesandzeros(o) {
  for (var u = 0; u < o.length; u++) {
    if (Number(o.charAt(u) > 1))
      return false;
  }
  return true;
}