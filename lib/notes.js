'use strict';

function execute(envelope){
  let payload = envelope.payload;
  let action = envelope.action;
  add(payload);
};

function add(text){
  let id = '';
  let noteObject = {id, text};

  console.log(`I will add your note: ${text}`);
}

module.exports = {execute};

