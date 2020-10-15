// Your code here.
// const humanBeings = {}

// humanBeings.firstName  = 'Colin';
// humanBeings.lastName = 'Jaffe';
// humanBeings.fullName = humanBeings.firstName + ' ' + humanBeings.lastName;

const getFirstName = function(obj) {
  
return obj.firstName;
}

const getLastName = function(obj) {

  return obj.lastName;
}

const getFullName = function(obj) {
  obj.fullName = obj.firstName + ' ' + obj.lastName
  return obj.fullName;

}

const setFirstName = function(obj, name) {
  obj.firstName = name;
  
    return obj; 
  }


const setAge = function(obj, num) {
  obj.age = num
  
    return obj; 
  }
  
const giveBirthday = function(person) {
    if (person.age > 0) {
      return person.age++
    } else {
      return person.age = 1
    }
  }


const marry = function(person1, person2){
  person1.married = true;
  person2.married = true;

  person1.spouseName = getFullName(person2);

  person2.spouseName = getFullName(person1);

}

const divorce = function(person1, person2) {
  person1.married = false;
  person2.married = false;
  
  delete person1.spouseName
  delete person2.spouseName
  
}
  






// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
