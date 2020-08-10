'use strict';

const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

function noteObject(obj) {
  const command = {
    text: obj.text || obj.tx || undefined,
    method: obj.method || obj.m || 'add',
    query: obj.query || obj.q || {},
    category: obj.category || obj.c || undefined,
  }

  return `${obj.text} has been added as a note under the ${obj.category} category.`
}

module.exports = noteObject;

//Exports a constructor function.

//Uses minimist to read command line arguments.

//On instantiation, evaluates and validates the input (Is the command '--add' a valid command, is there data associated with the command).

//Returns an instance containing the action to perofrm and the payload for the action (payload = what the note says).