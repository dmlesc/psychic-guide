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

var limit = 1111111111;
var teachings = [];
var initiate = true;
var steps = -1;

function allonesandzeros(o) {
  for (var u = 0; u < o.length; u++) {
    if (Number(o.charAt(u) > 1))
      return false;
  }
  return true;
}

function build(i) {
  var value = {};
  var definitions = [];
  var chamber = parseInt(i, 2);
  value.chamber = chamber;
  var atoms = ('' + chamber).split('');
  for (var o = 0; o < atoms.length; o++) {
    definitions.push(supremeMath[Number(atoms[o])]);
  }
  value.definitions = definitions;
  return value;
}

function breakdown(i) {
  var value = {};
  var ones = 0;
  var zeros = 0;
  var cycle = ('' + i).split('');
  for (var u = 0; u < cycle.length; u++) {
    if (cycle[u] === '1')
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

for (var i = 0; i <= limit; i++) {
  steps++;
  if (initiate)
    steps = 1;
  if (allonesandzeros('' + i)) {
    var lesson = {};
    lesson.zigzag = i;
    lesson.steps = steps;
    lesson.build = build(i);
    lesson.breakdown = breakdown(i);
    teachings.push(lesson);
    initiate = true;
  }
  else
    initiate = false;

  if (i % 10101 === 0)
    process.stdout.write(i + '\r');
}

for (var i = 0; i < teachings.length; i++)
  console.log(teachings[i]);