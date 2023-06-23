//You have a `RecentCounter` class which counts the number of recent requests within a certain time frame.

class RecentCounter {
    constructor() {
      this.queue = [];
    }
  
    ping(t) {
      this.queue.push(t);
  
      while (this.queue[0] < t - 3000) {
        this.queue.shift();
      }
  
      return this.queue.length;
    }
  }
//Let's test it with the provided example:
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));     // Output: 1
console.log(recentCounter.ping(100));   // Output: 2
console.log(recentCounter.ping(3001));  // Output: 3
console.log(recentCounter.ping(3002));  // Output: 3
