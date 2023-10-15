//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let sum = 0
  for(let i in array){
    if(operation(array[i]) == true){
      sum+=1
    }
  }
  if(sum >= 5){
    return true 
  }else return false
}

function isGreaterThan70(score){
  if(score > 70){
    return true
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1,isGreaterThan70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2,isGreaterThan70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3,isGreaterThan70);

