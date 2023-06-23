//The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers `0` and `1` respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

function countStudents(students, sandwiches) {
    let unableToEat = 0;
    let noChanges = false;
  
    while (!noChanges && sandwiches.length > 0) {
      noChanges = true;
  
      for (let i = 0; i < students.length; i++) {
        if (students[i] === sandwiches[0]) {
          students.splice(i, 1);
          sandwiches.shift();
          noChanges = false;
          break;
        }
      }
  
      if (noChanges) {
        unableToEat = students.length;
      }
    }
  
    return unableToEat;
  }
//Let's test it with the provided examples:
console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));            // Output: 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));// Output: 3
