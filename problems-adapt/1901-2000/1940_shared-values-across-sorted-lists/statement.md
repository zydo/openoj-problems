# Shared Values Across Sorted Lists

## Description

You are given a list `arrays` of integer arrays, and every one of them is
sorted in strictly increasing order. Return the values that appear in all
of the arrays, listed in ascending order.

Because each array never repeats a value, the values common to every array
show up in the same relative order everywhere, so this shared list is
exactly the longest common subsequence of the given arrays.

### Example 1

```text
Input: arrays = [[1,5,9,13],
                 [5,9],
                 [4,5,8,9]]
Output: [5,9]
Explanation: 5 and 9 are the only values that every array contains.
```

### Example 2

```text
Input: arrays = [[2,4,6,10],
                 [4,6,10,12],
                 [1,4,6,10]]
Output: [4,6,10]
Explanation: all three arrays share the values 4, 6, and 10.
```

### Example 3

```text
Input: arrays = [[7,8,9],
                 [10,11]]
Output: []
Explanation: the two arrays have no value in common.
```

### Constraints

- `2 <= arrays.length <= 100`
- `1 <= arrays[i].length <= 100`
- `1 <= arrays[i][j] <= 100`
- Each `arrays[i]` is sorted in strictly increasing order.

## Hints

### Hint 1

Pick any one array and treat its values as the candidates.

### Hint 2

Walk the remaining arrays and keep only the candidate values that each of
them also contains.

### Hint 3

Equivalently, tally how many arrays contain each value: a tally reaching
`arrays.length` marks a shared value, and scanning tallies in value order
emits the answer already sorted.
