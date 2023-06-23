//Given a **circular integer array** `nums` of length `n`, return *the maximum possible sum of a non-empty **subarray** of* `nums`.

function maxSubarraySumCircular(nums) {
    let maxSum = nums[0];
    let minSum = nums[0];
    let currMax = nums[0];
    let currMin = nums[0];
    let totalSum = nums[0];
  
    // First pass: Maximum subarray sum for non-circular arrays
    for (let i = 1; i < nums.length; i++) {
      currMax = Math.max(nums[i], currMax + nums[i]);
      maxSum = Math.max(maxSum, currMax);
      totalSum += nums[i];
    }
  
    // Second pass: Maximum subarray sum for circular arrays
    for (let i = 1; i < nums.length; i++) {
      currMin = Math.min(nums[i], currMin + nums[i]);
      minSum = Math.min(minSum, currMin);
    }
  
    // Return the maximum subarray sum
    if (totalSum === minSum) {
      return maxSum;
    } else {
      return Math.max(maxSum, totalSum - minSum);
    }
  }
//Let's test it with the provided examples:

console.log(maxSubarraySumCircular([1, -2, 3, -2]));    // Output: 3
console.log(maxSubarraySumCircular([5, -3, 5]));       // Output: 10
console.log(maxSubarraySumCircular([-3, -2, -3]));    // Output: -2
