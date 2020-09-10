/*

Session 1

    write json to a file on the system with a specified filename
    get json by filename

    1. callback based
        1.1 async waterfall
    2. promise based
        2.1 promise.all
    3. async await
        3.1 promise.all async await

Session 2
    OOP based wrapper 
    
    const {id} = await new Person().save()

    const person = await Person.find(id)
    const persons = await Person.findAll([id, id2])

*/
const fs = require('fs');

function savePerson(person, callback) {
    fs.writeFile(`${person.name}.${person.lastname}.json`, JSON.stringify(person), (err) => {
        if (err) throw err;
        console.log("File has been saved.")
    })
}

function main() {
    /* 
      write { name: 'Tom', lastname: 'Whitaker'}
      to a tom.whitaker.json file

      through a top level function 

      savePerson(object, callback);
      
      then 

      save a bunch of people at once using callbacks
    */
}

main();