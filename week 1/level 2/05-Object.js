// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);// it logs out the keys of the object

  let values = Object.values(obj);
  console.log("After Object.values():", values);// it logs out the  values of the object

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);//returns an array of a given object's own enumerable property [key, value] pairs.

  let hasProp = obj.hasOwnProperty("property");// if it have that specific property it will log true else false
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });// merge two objects together
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
// objectMethods(sampleObject);

let keys =Object.keys(sampleObject);
// console.log("After Object.keys():", keys);

let entries = Object.entries(sampleObject);
  console.log("After Object.entries():", entries);



