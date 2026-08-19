# Weighted String Reconciliation

## Description

Two lowercase records, `left` and `right`, must be reduced to the same
sequence. You may discard characters from either record without changing the
order of those that remain.

Discarding a character costs its lowercase ASCII code. Return the minimum
total cost needed to leave identical sequences in both records.

### Example 1

```text
Input: left = "stone", right = "tones"
Output: 230
Explanation: Remove the first 's' from "stone" and the final 's' from
"tones". Both records become "tone", at a cost of 115 + 115 = 230.
```

### Example 2

```text
Input: left = "plane", right = "panel"
Output: 216
Explanation: Discard the 'l' in each record. The remaining sequence is
"pane", and the two discarded characters cost 108 + 108 = 216.
```

### Constraints

- `1 <= left.length, right.length <= 1000`
- Each record contains only lowercase English letters.

## Hints

### Hint 1

Define a state for a pair of prefix lengths: the cheapest way to reconcile
exactly those two prefixes.

### Hint 2

The boundary states accumulate the character codes of the nonempty prefix,
because reconciling it with an empty prefix requires discarding all of it.

### Hint 3

Matching final characters can remain together and inherit the diagonal
state at no additional cost.

### Hint 4

For different final characters, compare paying for the final character on
the left with paying for the final character on the right.
