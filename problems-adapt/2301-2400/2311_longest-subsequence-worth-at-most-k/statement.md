# Longest Subsequence Worth At Most K

## Description

You are handed a binary string `s` and a positive integer `k`. Choose a
subsequence of `s`, read it as a binary number, and make that number as
long as you can without its value going over `k`. Return the length of the
longest subsequence that manages it.

Reading conventions:

- Leading zeroes are allowed — they stretch the subsequence without
  changing the value.
- The empty subsequence counts as the number 0.
- A subsequence preserves the left-to-right order of the characters it
  keeps; the dropped ones may sit anywhere in between.

### Example 1

```text
Input: s = "10110", k = 3
Output: 3
Explanation: Keeping "010" gives the value 2, which is at most 3, and no
subsequence of length 4 stays that small.
```

### Example 2

```text
Input: s = "110111", k = 13
Output: 4
Explanation: The kept digits "0111" read as 7, and any five kept digits
would have to be worth more than 13.
```

### Example 3

```text
Input: s = "0011", k = 2
Output: 3
Explanation: "001" reads as 1; keeping the fourth digit too would raise the
value to 3, which exceeds 2.
```

### Example 4

```text
Input: s = "1001001", k = 40
Output: 6
Explanation: Dropping the leading 1 leaves "001001", worth 9; keeping all
seven digits would be worth 73.
```

### Constraints

- `1 <= s.length <= 1000`
- `s[i]` is either '0' or '1'.
- `1 <= k <= 10⁹`

## Hints

### Hint 1

A digit's weight comes from how many kept digits sit to its right, so move
along the string from right to left — the weight of the digit under
consideration is fixed by what has already been kept.

### Hint 2

Every '0' is free: prepending zero does not move the value. Take each '1'
as well, whenever the running value plus its weight `2^(kept so far)` still
fits under `k`; that greedy choice is optimal.
