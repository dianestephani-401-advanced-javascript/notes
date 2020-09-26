//Used from class demo
'use strict';

// const express = require('express');
// const app = express();
const input = require('./lib/input');
const notes = require('./lib/notes');

let envelope = input.gimmeDat();

notes.giveMessage(envelope);
