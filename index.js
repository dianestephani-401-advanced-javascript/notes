//Used from class demo
'use strict';

// const express = require('express');
// const app = express();
// const input = require('./lib/input');
const notes = require('./lib/notes');
const mongoose = require('mongoose');
const Input = require('./lib/input');

// let envelope = input.gimmeDat();

// notes.execute(envelope);

mongoose.connect('mongodb://localhost:27017/notesy', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

let input = new Input()
if (input.valid()){
  console.log('Great success!');
  let note = new Note(input);
  mongoose.disconnect();
}
else{
  console.log('Error');
  mongoose.disconnect();
}