//For a stream of integers, implement a data structure that checks if the last `k` integers parsed in the stream are **equal** to `value`.
class DataStream {
    constructor(value, k) {
      this.stream = [];
      this.value = value;
      this.k = k;
    }
  
    consec(num) {
      this.stream.push(num);
      if (this.stream.length < this.k) {
        return false;
      }
      for (let i = this.stream.length - this.k; i < this.stream.length; i++) {
        if (this.stream[i] !== this.value) {
          return false;
        }
      }
      return true;
    }
  }
//You can create an instance of the DataStream class and call the consec method to check if the last k integers are equal to value as shown in the example:
const dataStream = new DataStream(4, 3);
console.log(dataStream.consec(4)); // Output: false
console.log(dataStream.consec(4)); // Output: false
console.log(dataStream.consec(4)); // Output: true
console.log(dataStream.consec(3)); // Output: false
