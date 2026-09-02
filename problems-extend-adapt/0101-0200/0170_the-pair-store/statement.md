# The Pair Store

## Description

Design a store that accepts a stream of integers and can be asked
whether any two of them sum to a given value.

Implement the `PairStore` class:

- `PairStore()` initializes the store with no numbers.
- `void add(int number)` records `number` in the store.
- `boolean find(int value)` returns `true` if some two recorded
  numbers sum to `value`, and `false` otherwise. The two numbers must
  be two separate records — a single stored number cannot be paired
  with itself.

### Example 1

```text
Input:
["PairStore", "add", "add", "add", "find", "find", "find"]
[[], [2], [7], [11], [9], [18], [4]]
Output: [null, null, null, null, true, true, false]
Explanation:
PairStore store = new PairStore();
store.add(2);   // the store holds [2]
store.add(7);   // the store holds [2, 7]
store.add(11);  // the store holds [2, 7, 11]
store.find(9);  // 2 + 7 = 9, return true
store.find(18); // 7 + 11 = 18, return true
store.find(4);  // would need two 2s, but only one is stored; false
```

### Example 2

```text
Input:
["PairStore", "add", "add", "find", "find", "add", "find"]
[[], [5], [5], [10], [11], [6], [11]]
Output: [null, null, null, true, false, null, true]
Explanation:
PairStore store = new PairStore();
store.add(5);   // the store holds [5]
store.add(5);   // the store holds [5, 5]
store.find(10); // 5 + 5 = 10 — two separate records exist; true
store.find(11); // nothing pairs to 11 yet; false
store.add(6);   // the store holds [5, 5, 6]
store.find(11); // 5 + 6 = 11, return true
```

### Constraints

- `-10⁵ <= number <= 10⁵`
- `-2³¹ <= value <= 2³¹ - 1`
- At most `10⁴` calls in total are made to `add` and `find`.

## Hints

### Hint 1

A map from each recorded value to how many times it was recorded is
all the state you need.

### Hint 2

To answer a query, walk the distinct stored values once and look up
each one's complement; a value that is its own complement needs a
count of at least two.
