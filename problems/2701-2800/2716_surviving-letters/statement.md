# Surviving Letters

## Description

You are given a string `s` of lowercase English letters and may apply the
following two moves, in any order, as many times as you like:

- Pick an index `i` and read its character `c`. If `c` also occurs somewhere
  to the left of `i`, delete the occurrence of `c` nearest to `i` on the
  left side.
- Pick an index `i` and read its character `c`. If `c` also occurs somewhere
  to the right of `i`, delete the occurrence of `c` nearest to `i` on the
  right side.

Each move shortens the string by exactly one character. Applying moves until
no move changes anything leaves the shortest string reachable. Return that
minimum possible length.

### Example 1

```text
Input: s = "reduce"
Output: 5
Explanation:
The final `e` (index 5) has an `e` to its left, so picking i = 5 and deleting
toward the left removes the first `e`, leaving "rduce". Now every letter is
distinct and no move can find a partner to delete, so 5 characters survive.
```

### Example 2

```text
Input: s = "mississippi"
Output: 4
Explanation:
Only the letters m, i, s, and p appear. Every duplicate can keep shedding
copies — always one twin survives per letter — so the four distinct letters
are exactly what remains.
```

### Example 3

```text
Input: s = "wxyz"
Output: 4
Explanation:
No character ever repeats, so neither move ever finds a nearest copy to
delete. The string is already as short as it can ever become.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists only of lowercase English letters

## Hints

### Hint 1

Once two copies of some letter coexist, one of the two moves can always
strike at one twin through the other — so a fully shrunk string cannot
contain a repeated character.

### Hint 2

Neither move can wipe a letter out entirely: the index you pick keeps its
own character, and only a duplicate neighbor dies. Every distinct letter of
the original must therefore still be present in the end.
