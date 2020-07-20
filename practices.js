let user = {
    name: undefined,
    age: 30
  };
  
// let key = prompt("What do you want to know about the user?", "name");

// access by variable
// alert( user[key] ); // John (if enter "name")
if (("name" in user)) {
  console.log("yes");
}