# Top Follower of the Key

## Description

You are given a 0-indexed integer array `nums` together with an integer
`key` that is guaranteed to appear in `nums`.

Look at every spot where an element is immediately followed by another
element: each time `nums[i]` equals `key`, the value `nums[i + 1]` is
one "follower" of the key. Over all indices `i` with
`0 <= i <= nums.length - 2` and `nums[i] == key`, figure out which
value shows up as a follower most often, and return it.

The input is arranged so that this most common follower is unique.

### Example 1

```text
Input: nums = [7,4,7,4,7,9], key = 7
Output: 4
Explanation: The key 7 occurs at indices 0, 2, and 4; what follows is
4, 4, and 9. Value 4 follows the key twice while 9 follows it once, so
the answer is 4.
```

### Example 2

```text
Input: nums = [5,5,5,11,5,5,11], key = 5
Output: 5
Explanation: Followers seen after an occurrence of the key 5 are 5,
5, 5, and 11 — the value 5 leads with three appearances.
```

### Example 3

```text
Input: nums = [3,8], key = 3
Output: 8
Explanation: The only follower of 3 is the 8 next to it.
```

### Constraints

- `2 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`
- The most common follower of the key is guaranteed to be unique.

## Hints

### Hint 1

Sweep the adjacent pairs once: whenever the left member equals `key`,
tally the right member.

### Hint 2

The answer is the value with the tallest tally — no tie-breaking is
required.
