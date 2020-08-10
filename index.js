//Used from class demo
'use strict';

const express = require('express');
const app = express();

// const minimist = require('minimist');
// const args = minimist(process.argv.slice(2));

// const request = require('./input.js/'); This line is the problem

// console.log(noteObject); This line is also problematic


app.listen(3000);

//Requires library files (input, notes).

//Instantiates an instance of an "Input" parser module, which parses the command line input and returns the command and data.

//Passes the command to the Notes library, which executes the command.