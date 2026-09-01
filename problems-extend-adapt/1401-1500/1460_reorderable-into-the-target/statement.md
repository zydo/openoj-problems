# Reorderable Into The Target

## Description

Two integer arrays `target` and `arr` share the same length. In one
move you may pick any stretch of consecutive elements inside `arr` and
flip its order, and you may apply as many moves as you like.

Report whether `arr` can be turned into `target` this way.

### Example 1

```text
Input: target = [1,5,3,5,2], arr = [5,2,1,5,3]
Output: true
Explanation: Both arrays hold 1, 2, and 3 once and 5 twice — only the
ordering differs, and flips can produce any ordering.
```

### Example 2

```text
Input: target = [10,20,30], arr = [30,10,20]
Output: true
Explanation: Flip the whole array to get [20,10,30], then flip the
first two elements to get [10,20,30], which equals target.
```

### Example 3

```text
Input: target = [4,4,9], arr = [4,9,9]
Output: false
Explanation: target contains two 4s and one 9, while arr holds one 4
and two 9s. Flips never change which values an array holds, so no
sequence of moves can succeed.
```

### Constraints

- `target.length == arr.length`
- `1 <= target.length <= 1000`
- `1 <= target[i] <= 1000`
- `1 <= arr[i] <= 1000`

## Hints

### Hint 1

Flipping segments never alters the multiset of values, only their
order — so compare what each array contains, not where things sit.

### Hint 2

Sorting both arrays and comparing, or counting values as you go, turns
the whole question into a plain equality test.
