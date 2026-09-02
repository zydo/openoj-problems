# Even Numbers From Digits

## Description

You are given an array `digits` whose elements are single digits from `0` to
`9`, possibly with repeats. Assemble integers by choosing three elements of
`digits` and concatenating them in some order — each copy of a digit may be
spent at most as many times as it occurs in the array. An assembly counts as
valid when it has exactly three digits, does not start with `0`, and is even.

For example, from the digits `[1, 2, 3]` the assemblies `132` and `312` are
both valid.

Return every distinct valid integer, listed in increasing order.

### Example 1

```text
Input: digits = [0,1,2]
Output: [102,120,210]
Explanation: The assemblies that begin with 0 — 012 and 021 — do not form
three-digit integers, and 201 is odd. That leaves 102, 120, and 210.
```

### Example 2

```text
Input: digits = [5,4,2,3,1]
Output: [124,132,134,142,152,154,214,234,254,312,314,324,342,352,354,412,432,452,512,514,524,532,534,542]
Explanation: An assembly is valid exactly when its last digit is even and its
first digit is not zero; every such ordering of these five digits appears in
the output.
```

### Example 3

```text
Input: digits = [7,7,7,2]
Output: [772]
Explanation: Three sevens and a 2 yield the distinct assemblies 277, 727, and
772, and only 772 is even. Note that 7 is spent twice even though the array
holds just one 2 and three 7s.
```

### Example 4

```text
Input: digits = [1,9,5]
Output: []
Explanation: Every available digit is odd, so no assembly can end in an even
digit.
```

### Constraints

- `3 <= digits.length <= 100`
- `0 <= digits[i] <= 9`

## Hints

### Hint 1

Only 450 even integers live between 100 and 998. Checking each of them
against the multiset of digits you hold is already fast enough.

### Hint 2

Count the copies of each digit in the input. A candidate survives when none
of its three digits is demanded more often than it is supplied, and walking
the candidates from small to large leaves the output sorted and free of
duplicates with no extra bookkeeping.
