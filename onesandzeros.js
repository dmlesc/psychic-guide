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

var time;
var startTime = true;

for (var i = 0; i <= limit; i++) {
  if (startTime)
    time = process.hrtime();


  if (allonesandzeros('' + i)) {
    teach(i);
    build(i);
    breakdown(i);
    var diff = process.hrtime(time);
    var milliseconds = Math.round((diff[0] * 1e9 + diff[1]) * 1e-6);
    teach(space(1) + 'time: ' + milliseconds);
    startTime = true;
  }
  else
    startTime = false;

  if (i % 1000 === 0)
    process.stdout.write(i + '\r');
}

function allonesandzeros(o) {
  for (var u = 0; u < o.length; u++) {
    if (Number(o.charAt(u) > 1))
      return false;
  }
  return true;
}

function build(i) {
  var chamber = parseInt(i, 2);
  teach(space(1) + chamber);
  var atoms = ('' + chamber).split('');
  for (var o = 0; o < atoms.length; o++) {
    var definition = supremeMathemathics[Number(atoms[o])];
    teach(space(2) + definition);
  }
}

function breakdown(i) {
  var cycle = ('' + i).split('');
  var ones = 0;
  var zeros = 0;
  for (var u = 0; u < cycle.length; u++) {
    if (cycle[u] === '1')
      ones++;
    else
      zeros++;
  }
  var bits = zeros + ones;
  teach(space(1) + '1s: ' + ones);
  teach(space(1) + '0s: ' + zeros);
  teach(space(1) + 'bits: ' + bits);
}


function teach(str) {
  console.log(str);
}

function space(count) {
  var dimensions = '';
  for (var i = 0; i < count; i++)
    dimensions += ' ';
  return dimensions;
}