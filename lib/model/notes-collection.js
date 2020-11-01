'use strict';
const Notes = require('./notes-schema');

class RestMethods {
  async post(potato, category){
    const newRecord = await new Notes({text: potato, categories: category});
    return newRecord.save();
  }

  async get(payload){
    let something = await Notes.find({});
    return something;
  }

  async delete(id){
    let anotherThing = await Notes.findByIdAndDelete(id);
    return anotherThing;
  }
}

module.exports = RestMethods;