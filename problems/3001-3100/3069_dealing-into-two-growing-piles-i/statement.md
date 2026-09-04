# Dealing Into Two Growing Piles I

## Description

You are given a 1-indexed array `nums` holding `n` distinct integers.

Each element must be dealt onto one of two growing piles, `arr1` and
`arr2`, over the course of `n` operations. Operation 1 puts `nums[1]` onto
`arr1`; operation 2 puts `nums[2]` onto `arr2`. Every later operation `i`
then routes `nums[i]` by comparing the piles' tops:

- if the last element of `arr1` is greater than the last element of
  `arr2`, `nums[i]` lands on `arr1`;
- otherwise it lands on `arr2`.

The array `result` glues the two piles together, `arr1` followed by `arr2`;
for example, `arr1 == [1,2,3]` and `arr2 == [4,5,6]` give
`result = [1,2,3,4,5,6]`.

Return `result`.

### Example 1

```text
Input: nums = [7,2,9,4,6]
Output: [7,9,4,6,2]
Explanation: The opening operations leave arr1 = [7] and arr2 = [2]. Dealing 9: since 7 > 2 it lands on arr1, giving [7,9]. Dealing 4: since 9 > 2 it lands on arr1, giving [7,9,4]. Dealing 6: since 4 > 2 it lands on arr1 again, giving [7,9,4,6]. Concatenation then yields [7,9,4,6,2].
```

### Example 2

```text
Input: nums = [10,20,30]
Output: [10,20,30]
Explanation: After the first two operations arr1 = [10] and arr2 = [20]. The top of arr1 is not greater than the top of arr2 (10 < 20), so 30 lands on arr2, making arr2 = [20,30]. Hence the concatenation is [10,20,30].
```

### Example 3

```text
Input: nums = [4,9,2,7,3,8]
Output: [4,7,3,8,9,2]
Explanation: The seeds are arr1 = [4] and arr2 = [9]. Element 2: 4 < 9, so arr2 becomes [9,2]. Element 7: 4 > 2, so arr1 becomes [4,7]. Element 3: 7 > 2, so arr1 becomes [4,7,3]. Element 8: 3 > 2, so arr1 becomes [4,7,3,8]. Gluing the piles gives [4,7,3,8,9,2].
```

### Constraints

- `3 <= n <= 50`
- `1 <= nums[i] <= 100`
- All elements of `nums` are distinct.

## Hints

### Hint 1

A single walk over the input with the two piles' last elements in hand is
enough — that comparison alone decides where each new element belongs.
