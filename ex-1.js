// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for(let i in array){
    newEmployeeSalaries[i] =  operation(array[i])
  }
}

function increaseSalary(employee){
   return employee += 5000
   
}
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here

forEach(employeeSalaries,increaseSalary)
console.log(newEmployeeSalaries); 