'use strict';
const { json } = require('express');
const mongoose = require('mongoose');

let notes = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  }
})

notes.pre('validate', function(){
  this.categories = categories.toLowerCase();
})

notes.post('save', function(){
  console.log(`Adding ${this.text} to ${this.category}. Very nice!`);
})

module.exports = mongoose.model('notes', notes)