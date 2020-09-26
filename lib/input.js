'use strict';

const minimist = require('minimist');
const args = minimist(process.argv.slice(2));
// const notes = require('./notes');

let noteContent = args.add || args.a;

function gimmeDat(){
  if(!noteContent){
    console.log('Error, please try again with correct syntax!');
  }
  else{
    return {
      action: "add",
      payload: noteContent,
    };
  };
};

module.exports = {gimmeDat};


