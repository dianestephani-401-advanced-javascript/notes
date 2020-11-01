'use strict';

const minimist = require('minimist');

class Input {
  constructor(){
    const args = minimist(process.argv.slice(2));
    let parsedThings = this.parse(args);
    console.log(args);

    this.action = parsedThings.action;
    this.payload = parsedThings.payload;
    this.category = parsedThings.category;
    this.categoryAction = parsedThings.categoryAction;
  }

  parse(args){
    let object = {};
    object.action = Object.keys(args).slice(1)[0];
    object.payload = Object.values(args).slice(1)[0];
    object.categoryAction = Object.keys(args).slice(1)[1] || null;

    if (args[object.categoryAction]){
      object.category = Object.values(args).slice(1)[1];
    }
    else {
      object.category = 'general';
    }
    return object;
  }

  valid(){
    if(this.action == 'l' || this.action == 'list'){
      return true;
    }
    else{
      let command = false;
      let payload = false;
      let categoryAction = false;
  
      if (this.action == 'add' || this.action == 'a'){
        command = true;
      }
      if (this.action == 'delete' || this.action == 'd'){
        command = true;
      }
  
      if(typeof(this.payload) != 'boolean'){
        payload = true;
      }
  
      if(!this.categoryAction){
        categoryAction = true;
      }
      else if(this.categoryAction == 'category' || this.categoryAction == 'c'){
        categoryAction = true;
      }
      else{
        categoryAction = false;
      }
      return command && payload && categoryAction;
    }
  }
}

// let noteContent = args.add || args.a;
// console.log(noteContent);

// function gimmeDat(){
//   if(!noteContent){
//     console.log('Error, please try again with correct syntax!');
//   }
//   else{
//     return {
//       action: "add",
//       payload: noteContent,
//     };
//   };
// };

// console.log(new Input());

module.exports = Input;


