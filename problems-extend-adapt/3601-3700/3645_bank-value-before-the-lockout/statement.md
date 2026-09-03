# Bank Value Before The Lockout

## Description

Two integer arrays `value` and `limit`, both of length `n`, describe a row
of elements. Everything starts inactive, and you may switch elements on one
at a time in whatever order you like:

- Element `i` may be switched on only while the number of currently active
  elements is strictly below `limit[i]`. Switching it on banks `value[i]`.
- Right after each activation, let `x` be the number of currently active
  elements. Every element `j` with `limit[j] <= x` is locked out for good.
  The sweep catches two kinds of victims: active elements — which keep the
  value they already banked but give their slot back — and elements still
  waiting their turn, which may never be switched on at all.

Return the largest total that a cleverly chosen activation order can bank.

### Example 1

```text
Input: value = [6,2,9], limit = [2,1,3]
Output: 17
Explanation: Activate 1 first (banks 2). The count reaches 1, so this
limit-1 element locks out immediately — but having been active, it only
gives its slot back, having kept its 2. Activate 0 (banks 6). Activate 2
(banks 9); the count of 2 that follows locks element 0 out, and again the
banked 6 stays. The total is 2 + 6 + 9 = 17.
```

### Example 2

```text
Input: value = [5,9,1], limit = [1,1,1]
Output: 9
Explanation: Whichever element goes first, the count hits 1 afterwards and
all three limit-1 elements lock out together — including the one just
activated — so a second activation is never possible. The best opening
move banks 9.
```

### Example 3

```text
Input: value = [5,9,8,7], limit = [3,2,2,2]
Output: 22
Explanation: Activate 1 (banks 9), then 2 (banks 8). The resulting count
of 2 locks out every limit-2 element, so element 3 and its 7 are shut out
before ever contributing. Activate 0 (banks 5) at the end: 9 + 8 + 5 = 22.
```

### Constraints

- `1 <= n == value.length == limit.length <= 10⁵`
- `1 <= value[i] <= 10⁵`
- `1 <= limit[i] <= n`

## Hints

### Hint 1

Reason about the elements limit group by limit group — what any order can
squeeze out of one group barely depends on the others.

### Hint 2

A group whose limit is `L` and that holds `m` elements can put at most
`min(L, m)` of them through, and its most valuable ones are the right
picks: every value is positive, so nothing should be left on the table
that the budget allows.

### Hint 3

One sorted scan collects the answer: take values from highest to lowest,
keeping a counter per limit, and accept an element only while its limit's
counter still sits below the limit itself.
