'use strict';

const method = require('./model/notes-collection');

// function execute(envelope){
//   let payload = envelope.payload;
//   let action = envelope.action;
//   add(payload);
// };

// function add(text){
//   let id = '';
//   let noteObject = {id, text};

//   console.log(`I will add your note: ${text}`);
// }

// module.exports = {execute};

class Notes {
  constructor(input){
    this.action = input.action;
    this.payload = input.payload;
    this.category = input.category;
    this.categoryAction = input.categoryAction;
  }

  async execute(){
    switch(this.action){
      case 'a': 
      case 'add':
        await method.post(this.payload, this.category);
        break;
      case 'l':
      case 'list':
        await method.get(this.payload);
        break;
      case 'd':
      case 'delete':
        await method.delete(this.payload);
        break;
      default: console.log('Error!')
    }
  }
}

