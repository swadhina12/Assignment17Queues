//You are given an integer array `deck`. There is a deck of cards where every card has a unique integer. The integer on the `ith` card is `deck[i]`.

function deckRevealedIncreasing(deck) {
    deck.sort((a, b) => a - b);
  
    const result = [];
    result.push(deck.pop());
  
    while (deck.length > 0) {
      result.unshift(result.pop());
      result.unshift(deck.pop());
    }
  
    return result;
  }
//Let's test it with the provided examples:
console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]));
// Output: [2, 13, 3, 11, 5, 17, 7]

console.log(deckRevealedIncreasing([1, 1000]));
// Output: [1, 1000]
