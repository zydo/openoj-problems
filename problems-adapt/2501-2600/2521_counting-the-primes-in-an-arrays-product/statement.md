# Counting the Primes in an Array's Product

## Description

You are given an array `nums` of positive integers. Imagine multiplying
all of its elements together into one huge product, and count how many
distinct primes divide that product.

Two reminders:

- A value greater than 1 is prime when the only things dividing it are 1
  and itself.
- A value `d` is a factor of a value `m` when `m / d` comes out whole.

### Example 1

```text
Input: nums = [6,15,10]
Output: 3
Explanation: 6 = 2 * 3, 15 = 3 * 5, and 10 = 2 * 5, so the product
carries the primes 2, 3, and 5 — three distinct ones.
```

### Example 2

```text
Input: nums = [9,25,49]
Output: 3
Explanation: The elements are 3 * 3, 5 * 5, and 7 * 7, so the primes 3,
5, and 7 all divide the product and the count is 3.
```

### Example 3

```text
Input: nums = [512,81]
Output: 2
Explanation: 512 = 2⁹ and 81 = 3⁴, so only the primes 2 and 3 divide
the product.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `2 <= nums[i] <= 1000`

## Hints

### Hint 1

Never form the product itself — with this many elements it would
overflow anything.

### Hint 2

A prime divides a product of several numbers exactly when it divides at
least one of those numbers individually.

### Hint 3

Split every element into its prime pieces and drop the pieces into a
set, which absorbs any repeats across elements; the answer is the set's
size.
