//There are `n` friends that are playing a game. The friends are sitting in a circle and are numbered from `1` to `n` in **clockwise order**. More formally, moving clockwise from the `ith` friend brings you to the `(i+1)th` friend for `1 <= i < n`, and moving clockwise from the `nth` friend brings you to the `1st` friend.

function findTheWinner(n, k) {
    const friends = Array.from({ length: n }, (_, i) => i + 1);
    let currentIndex = 0;
  
    while (friends.length > 1) {
      currentIndex = (currentIndex + k - 1) % friends.length;
      friends.splice(currentIndex, 1);
    }
  
    return friends[0];
  }
//Let's test it with the provided example:
console.log(findTheWinner(6, 5));  // Output: 1
