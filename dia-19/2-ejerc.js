//15-Replace empty strings in object with null values

// Write a function that takes an object as an argument
// Some of the property values ​​contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object


const ReplaceNullObject = (obj) =>{
  let obj1 = {}
  for(let i in obj){
    obj1[i] = obj[i] === ''? null:obj[i]
  }
   return obj1
}

  console.log(ReplaceNullObject({a:'a', b:'', c:'c', d:''}));






//let obj = { a: 'a', f:'', b: 'b', c: ''};

//return result = Object.keys(obj)
//.forEach(key => obj[key] = obj[key] === '' ? null: obj[key]);
