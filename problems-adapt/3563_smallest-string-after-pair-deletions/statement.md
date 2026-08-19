# Smallest String After Pair Deletions

## Description

You are given a string `s` of lowercase English letters.

In one step you may delete two neighbouring characters that are also
neighbours in the alphabet, in either order — `'c'` next to `'d'`, or `'d'`
next to `'c'`. The characters after the gap slide left, which can bring new
pairs together. Treat the alphabet as circular: `'a'` and `'z'` count as
neighbours too.

Apply the deletion as many times as you like (including not at all) and return
the lexicographically smallest string you can end up with.

### Example 1

```text
Input: s = "zac"
Output: "c"
Explanation: 'z' and 'a' are neighbours on the circular alphabet, so the pair
deletes and only "c" remains.
```

### Example 2

```text
Input: s = "zbca"
Output: ""
Explanation: Delete "bc" first, leaving "za", then delete "za" — the outer
pair are also neighbours — leaving the empty string.
```

### Example 3

```text
Input: s = "dabg"
Output: "dabg"
Explanation: Deleting "ab" leaves "dg", and comparing the two candidates
character by character, "dabg" is smaller than "dg" because 'a' < 'g'. Doing
nothing is the better plan.
```

### Constraints

- `1 <= s.length <= 250`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Think about which substrings can vanish completely, rather than which single
deletion to make first.

### Hint 2

A substring disappears exactly when it splits into two vanishing pieces, or
when its two end characters are alphabet neighbours wrapping another vanishing
piece — a table over all intervals computes this.

### Hint 3

With that table in hand, assemble the answer from right to left.

### Hint 4

Let `ans[i]` be the smallest string producible from the suffix starting at
`i`. Then `ans[i]` is the minimum, over every `j`, of `s[j] + ans[j + 1]`,
where everything between `i` and `j` must vanish; compare whole candidate
strings, not just first characters.
