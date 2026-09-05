# Recover the Undoubled Array

## Description

Take an integer array `original` and build `changed` from it by appending
twice every element's value and then shuffling everything. An array that
could have been produced this way is called a doubled array.

You receive an array `changed`. If it is a doubled array, hand back one
`original` that explains it; if it cannot be one, hand back an empty array.
Any mathematically valid `original` is acceptable, but the judge compares
output exactly, so return the values in nondecreasing order.

### Example 1

```text
Input: changed = [2,8,10,4,16,20]
Output: [2,8,10]
Explanation: The three originals double to the rest of the array — 2 to 4,
8 to 16, and 10 to 20.
```

### Example 2

```text
Input: changed = [3,7]
Output: []
Explanation: Neither 3 nor 7 is twice the other, so no pairing exists.
```

### Example 3

```text
Input: changed = [0,0,4,8]
Output: [0,4]
Explanation: A zero's double is another zero, so the two zeros must travel
as a pair; 4 and 8 pair with each other.
```

### Constraints

- `1 <= changed.length <= 10⁵`
- `0 <= changed[i] <= 10⁵`

## Hints

### Hint 1

Repeatedly remove a value together with its double; `changed` qualifies
exactly when this empties the array.

### Hint 2

Process values smallest first — the smallest surviving value can only be an
original, never somebody's double.

### Hint 3

Consume a zero by pairing it with a second zero, and take care to remove the
current value before looking up its double.
