# Cancel Adjacent Twin Letters

## Description

You are given a string `s` of lowercase English letters. One canceling
step picks two neighboring letters that are equal and deletes both from
the string. Deleting a pair makes its two former neighbors neighbors, so
a step can expose fresh pairs.

Keep canceling for as long as any equal neighboring pair exists, and
return the string that remains. The outcome never depends on which pairs
you cancel first — the final string is unique.

### Example 1

```text
Input: s = "deefgcc"
Output: "dfg"
Explanation: The leading "ee" cancels, leaving "dfgcc"; the "cc" then
cancels as well, and no equal letters remain adjacent.
```

### Example 2

```text
Input: s = "abccbad"
Output: "d"
Explanation: Removing "cc" brings "bb" together, removing "bb" brings
"aa" together, and the cascade dies out leaving only "d".
```

### Example 3

```text
Input: s = "babbbacc"
Output: "baba"
Explanation: Canceling the "bb" formed by the third and fourth letters
leaves "babacc", and the trailing "cc" cancels in turn.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

Sweep the string once with a stack of survivors: each new letter either
cancels the survivor on top of the stack or joins it.
