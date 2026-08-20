# Smallest Letter Subsequence

## Description

Given a string `s` of lowercase English letters, choose a subsequence in which
every letter that occurs in `s` appears exactly once.

Among all such subsequences, return the one that comes first in dictionary
order. A subsequence keeps the left-to-right order of the characters it keeps
but need not be contiguous.

### Example 1

```text
Input: s = "hfdhkhfh"
Output: "dhkf"
Explanation: The letters present are d, f, h and k. Starting from the second
character lets d come first; the later h, f and h copies are then skipped, so
each letter is used once and their relative order is preserved.
```

### Example 2

```text
Input: s = "bab"
Output: "ab"
Explanation: Keeping the first b would give "ba"; taking the later b instead
allows a to come first, and "ab" < "ba".
```

### Example 3

```text
Input: s = "twisted"
Output: "twised"
Explanation: Every letter except t occurs once, so s, e and d can never be
reordered behind one another — no later copy exists to swap in. The best
possible placement of the repeated t is the first position, giving "twised".
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Think about how you would verify that a candidate answer is achievable: which
requirement breaks first if you place a letter too early?

### Hint 2

Building the answer character by character, the tempting move — putting the
smallest available letter next — is wrong only when a letter you would discard
to get it has no later occurrence to restore it from.

### Hint 3

Keep the growing answer in a stack: pop the top while it is larger than the
incoming letter and still occurs again later. Skip any letter already in the
stack, and track remaining occurrences so the pop test is a constant-time
lookup.
