function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);


/*****************REPLIT***********/

// when we want to send any data to the server we use JSON  
const users='{"name":"sristy","age":20,"gender":"female"}'
// JSON.parse--JSON.parse is a method in JavaScript that parses a JSON (JavaScript Object Notation) string and converts it into a JavaScript object
// JSON.stringify--JSON.stringify is a method in JavaScript that converts a JavaScript object or value to a JSON string.
const user=JSON.parse(users)
// console.log(user["gender"]);

//now lets convert an object into json string 

const user1={
  name:"sristy",
  age:20,
  gender:"female"
}
const userjson=JSON.stringify(user1);
console.log(user1)
