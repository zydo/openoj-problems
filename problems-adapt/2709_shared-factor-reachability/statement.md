# Shared Factor Reachability

## Description

You are given an integer array `nums`. Two distinct positions `i` and `j`
are neighbours when `gcd(nums[i], nums[j]) > 1`.

Report whether the positions form one connected family: for any two
positions, some chain of neighbour steps must lead from one to the other.

### Example 1

```text
Input: nums = [10,21,15]
Output: true
Explanation: gcd(10, 21) = 1, so positions 0 and 1 are not neighbours.
But gcd(10, 15) = 5 makes positions 0 and 2 neighbours, and gcd(21, 15) = 3
makes positions 1 and 2 neighbours, so 0 reaches 1 through 2.
```

### Example 2

```text
Input: nums = [4,9,25]
Output: false
Explanation: The values 4 = 2², 9 = 3² and 25 = 5² are pairwise coprime,
so no two positions are neighbours and nothing is connected.
```

### Example 3

```text
Input: nums = [6,1,3]
Output: false
Explanation: The value 1 has no prime factor, so position 1 can never be a
neighbour of anything. Positions 0 and 2 are neighbours with each other
(gcd(6, 3) = 3), but position 1 stays isolated.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## Hints

### Hint 1

Two values are neighbours exactly when a prime divides both. Which values
does a single prime place in the same neighbourhood?

### Hint 2

A prime need not link every pair of values it divides — chaining each value
to the previous one keeps the whole neighbourhood connected with far fewer
links than a full mesh.

### Hint 3

The question becomes: do all positions end up in one component? Any
connectivity tool answers that. Watch out for the one value that can never
share a prime with anything.
