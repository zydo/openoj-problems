# Driving Every Letter Down to A

## Description

A string `s` made only of lowercase English letters is given.

One operation chooses a letter that appears somewhere in `s` and moves
every copy of it to the following letter of the alphabet. The alphabet
wraps around, so `z` cycles back to `'a'`. Any number of operations may
be used, including none.

What is the fewest operations that turns `s` into a string of nothing
but `'a'` characters?

### Example 1

```text
Input: s = "hello"
Output: 22
Explanation: The letter h sits 19 steps away from 'a', e sits 22 steps
away, and the l's and o are closer. Driving e first and letting the
others merge into its journey as they catch up costs 22 operations in
total, and no smaller number suffices.
```

### Example 2

```text
Input: s = "aza"
Output: 1
Explanation: Advancing z once wraps it around to a, and the two a's are
already in place, giving "aaa" after a single operation.
```

### Example 3

```text
Input: s = "abc"
Output: 25
Explanation: The b needs 25 steps of its own and the c needs 24. Driving
the b first turns it into a second c, and the two then travel together
for the remaining 24 steps, so 25 operations suffice.
```

### Constraints

- `1 <= s.length <= 5 * 10⁵`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

A single operation advances all copies of the chosen letter by exactly
one position, with `z` folding back to `'a'`.

### Hint 2

A letter whose zero-based position in the alphabet is `i` must be moved
`(26 - i) % 26` times on its own before it becomes `'a'`.

### Hint 3

Move the letter with the largest remaining distance first: any letter it
overtakes joins it and travels at no extra cost, so the total is simply
the largest per-letter distance among the letters present in `s`.
