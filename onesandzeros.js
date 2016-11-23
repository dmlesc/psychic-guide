"use strict";

var supremeMath = [
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

var limit = 11111;
var teachings = [];
var initiate = true;
var steps = -1;

function allonesandzeros(O) {
  for (var U = 0; U < O.length; U++) {
    if (Number(O.charAt(U) > 1))
      return false;
  }
  return true;
}

function build(I) {
  var value = {};
  var definitions = [];
  var chamber = parseInt(I, 2);
  value.chamber = chamber;
  var atoms = (chamber.toString()).split('');
  for (var O = 0; O < atoms.length; O++) {
    definitions.push(supremeMath[Number(atoms[O])]);
  }
  value.definitions = definitions;
  return value;
}

function breakdown(I) {
  var value = {};
  var ones = 0;
  var zeros = 0;
  var cycle = (I.toString()).split('');
  for (var U = 0; U < cycle.length; U++) {
    if (cycle[U] === '1')
      ones++;
    else
      zeros++;
  }
  var bits = zeros + ones;
  value.Gods = ones;
  value.Earths = zeros;
  value.Stars = bits;
  return value;
}

for (var I = 0; I <= limit; I++) {
  steps++;
  if (initiate)
    steps = 1;
  if (allonesandzeros(I.toString())) {
    var lesson = {};
    lesson.zigzag = I;
    lesson.steps = steps;
    lesson.build = build(I);
    lesson.breakdown = breakdown(I);
    teachings.push(lesson);
    initiate = true;
  }
  else
    initiate = false;

  if (I % 10101 === 0)
    process.stdout.write(I + '\r');
}

for (var i = 0; i < teachings.length; i++)
  console.log(teachings[i]);

/*
{ zigzag: 1111111111,
  steps: 1,
  build:
   { chamber: 1023,
     definitions: [ 'Knowledge', 'Cipher', 'Wisdom', 'Understanding' ] },
  breakdown: { Gods: 10, Earths: 0, Stars: 10 } }
*/