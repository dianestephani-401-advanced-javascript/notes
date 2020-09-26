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
    return noteContent;
  }
};

module.exports = {gimmeDat};


// function noteObject(obj) {
//   const command = {
//     text: obj.text || obj.tx || undefined,
//     method: obj.method || obj.m || 'add',
//     query: obj.query || obj.q || {},
//     category: obj.category || obj.c || undefined,
//   }

