# Biggest Prime on the Diagonals

## Description

You are given a square, 0-indexed grid of integers `nums`.

Look only at the two diagonals of the grid and report the largest prime
that sits on either one of them. If not a single diagonal cell holds a
prime, return `0`.

Two definitions to keep in mind:

- An integer is prime when it is bigger than 1 and divisible by nothing
  other than 1 and itself.
- A value `val` occupies a diagonal of `nums` when some index `i`
  satisfies `nums[i][i] == val` or `nums[i][nums.length - i - 1] == val`.

![diagram](figures/2614-1.svg)

### Example 1

```text
Input: nums = [[4,8,9],[2,15,7],[6,5,10]]
Output: 0
Explanation: The two diagonals carry 4, 15, 10 and 9, 15, 6. None of those
values is prime, so the answer is 0.
```

### Example 2

```text
Input: nums = [[3,8,1],[12,25,7],[11,6,2]]
Output: 11
Explanation: The main diagonal holds 3, 25 and 11, and the other diagonal
holds 1 and 12. The primes among them are 3 and 11, and 11 is the larger.
```

### Example 3

```text
Input: nums = [[6,4,17],[8,9,5],[19,21,22]]
Output: 19
Explanation: The main diagonal carries 6, 9 and 22 — none prime. The
anti-diagonal carries 17, 9 and 19, so the largest prime on the diagonals
is 19.
```

### Constraints

- `1 <= nums.length <= 300`
- `nums.length == nums[i].length`
- `1 <= nums[i][j] <= 4*10⁶`

## Hints

### Hint 1

A cell outside the two diagonals can never matter, so only about `2n`
values ever need a look.

### Hint 2

Primality of one candidate settles in about `sqrt(v)` steps with trial
division — plenty fast for the values allowed here.
