# Shaving the Array Total

## Description

An integer array `nums` is handed to you together with three integers
`k`, `op1`, and `op2`. You may lighten the array with two kinds of moves:

- A halving move replaces one element by half its value, rounded up to
  the nearest integer. At most `op1` halving moves may be made in total,
  and any single element can be halved at most once.
- A trimming move replaces one element by its value minus `k`, and is
  only allowed on an element whose value is at least `k`. At most `op2`
  trimming moves may be made in total, and any single element can be
  trimmed at most once.

One element may take both moves — one of each kind, in either order you
prefer.

Return the smallest total the array's elements can sum to after any
number of moves.

### Example 1

```text
Input: nums = [5,14,9], k = 4, op1 = 1, op2 = 1
Output: 17
Explanation: Trim nums[0] = 5 down to 1, and halve nums[1] = 14 down to
7. The array reads [1, 7, 9] for a total of 17, and no placement of the
two moves does better.
```

### Example 2

```text
Input: nums = [8,7,2,15], k = 6, op1 = 2, op2 = 2
Output: 9
Explanation: Halve nums[0] = 8 to 4, trim nums[1] = 7 to 1, and spend
both moves on nums[3]: halving 15 gives 8, then trimming 8 gives 2.
The array reads [4, 1, 2, 2] for a total of 9.
```

### Example 3

```text
Input: nums = [10,1,21,6], k = 5, op1 = 2, op2 = 0
Output: 23
Explanation: With no trimming moves available, halve nums[0] = 10 to 5
and nums[2] = 21 to 11. The array reads [5, 1, 11, 6] for a total of 23.
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 10⁵`
- `0 <= k <= 10⁵`
- `0 <= op1, op2 <= nums.length`

## Hints

### Hint 1

Dynamic programming over two move budgets is a natural fit: carry both
remaining counts along as you scan the array.

### Hint 2

Let `dp[index][halvings left][trims left]` be the smallest sum the
remaining suffix can reach; each element processed shrinks the state
space by one.

### Hint 3

Every element has a handful of outcomes — leave it alone, halve it, trim
it, or apply both moves. When both land on one element, the order
matters because the precondition checks the value it meets; try each
order under its own guard.
