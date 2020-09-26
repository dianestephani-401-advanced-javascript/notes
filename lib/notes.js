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




// if(noteContent){
//   console.log(`I am adding your note: ${noteContent}`);
// }


//Execute manages actions, if add is the action specified in input, call the add function. If action specified in input equals delete, call the delete function.