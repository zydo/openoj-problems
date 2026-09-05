# Shared Values in Three Sorted Arrays

## Description

You are given three integer arrays `arr1`, `arr2`, and `arr3`, each sorted in
**strictly increasing** order. Collect every value that occurs in **all
three** arrays and return those values as a sorted array.

### Example 1

```text
Input: arr1 = [2,5,9,14,20], arr2 = [3,5,9,11,20], arr3 = [1,5,8,9,20]
Output: [5,9,20]
Explanation: 5, 9, and 20 are the only values present in every one of the
three arrays.
```

### Example 2

```text
Input: arr1 = [4,10,16], arr2 = [7,12,19], arr3 = [2,6,30]
Output: []
Explanation: The three arrays share no value at all.
```

### Example 3

```text
Input: arr1 = [777], arr2 = [500,777], arr3 = [777,900]
Output: [777]
Explanation: 777 is the single value common to all three arrays.
```

### Constraints

- `1 <= arr1.length, arr2.length, arr3.length <= 1000`
- `1 <= arr1[i], arr2[i], arr3[i] <= 2000`

## Hints

### Hint 1

Keep one index per array and compare the three values currently under them.

### Hint 2

When the three values differ, the smallest one can never be matched later —
everything after it is even larger. Advance every index that sits on that
smallest value and keep going.
