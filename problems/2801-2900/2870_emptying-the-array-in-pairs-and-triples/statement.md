# Emptying The Array In Pairs And Triples

## Description

You are given a 0-indexed array `nums` of positive integers.

You may repeat either of these two moves as often as you like:

- pick two elements carrying the same value and erase both;
- pick three elements carrying the same value and erase all three.

Empty the array using as few moves as possible and return that minimum,
or return `-1` when no sequence of moves can empty it.

### Example 1

```text
Input: nums = [5,5,5,7,7,9,9,9,9,9]
Output: 4
Explanation: The three 5s leave in one triple, the two 7s in one pair,
and the five 9s in a triple plus a pair. That is 4 moves, and no plan
does it in fewer.
```

### Example 2

```text
Input: nums = [1,2,2,3,3,3]
Output: -1
Explanation: The lone 1 can never be erased, since every move needs at
least two equal copies, so the array cannot be emptied.
```

### Example 3

```text
Input: nums = [4,4,4,4]
Output: 2
Explanation: One triple plus one pair clears all four copies in 2 moves.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

Moves never mix values, so every value can be costed independently — only
its frequency matters.

### Hint 2

A value that occurs exactly once is stuck: no legal move can ever touch
it.

### Hint 3

Each move erases at most three copies of a value, so a value with count
`c` needs at least `ceil(c / 3)` moves — and a mix of triples and pairs
always meets that bound when `c >= 2`.
