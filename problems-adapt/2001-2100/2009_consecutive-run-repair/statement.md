# Consecutive Run Repair

## Description

Call an array a **consecutive run** when its values are pairwise distinct and
span exactly the array's length: the largest value minus the smallest equals
`nums.length - 1`. For instance, `[6,3,4,5]` qualifies, but `[2,1,3,6,5]` does
not — five values spread over a span of five instead of four.

In one move you may choose any element of `nums` and overwrite it with any
integer. Return the fewest moves needed to turn `nums` into a consecutive run.

### Example 1

```text
Input: nums = [3,4,5,6]
Output: 0
Explanation: The values are distinct and already span exactly 3, so the array
is a consecutive run as it stands.
```

### Example 2

```text
Input: nums = [7,3,1,6,2]
Output: 2
Explanation: Keep 3, and turn the rest into 1, 2, 4, 5 — for example replace
6 with 4 and 7 with 5, giving [5,3,1,4,2]. No single move can work: no four
of the distinct values fit inside a span of 4.
```

### Example 3

```text
Input: nums = [5,5,5,9]
Output: 3
Explanation: The repeated 5s can never coexist, and 9 cannot sit in the same
run as a 5 with only four elements, so at most one element is kept. Rewriting
the others into 6, 7, and 8 takes three moves.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Elements you keep are the only ones that constrain anything — everything else
can be overwritten at will. The answer is the array length minus the most
distinct values that can stay.

### Hint 2

A set of kept values is legal exactly when its maximum minus its minimum stays
below `nums.length`. Sort the distinct values and slide a window whose span
never reaches that bound; the left end only ever moves forward.
