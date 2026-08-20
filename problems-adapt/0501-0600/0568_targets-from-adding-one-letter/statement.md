# Targets From Adding One Letter

## Description

You are given two lists of words, `startWords` and `targetWords`. Every word
is built from lowercase English letters, and no letter repeats within a word.

Call a word in `targetWords` reachable when some word in `startWords` can be
grown into it by this two-step move:

1. attach one lowercase letter that the word does not already contain;
2. shuffle the resulting letters into any order whatsoever.

From `"grip"`, for instance, the move reaches `"prigs"` — attach `s`, then
shuffle — but it can never give back `"grip"` itself, and no shuffle can undo
the attachment.

Count how many words in `targetWords` are reachable. Start words are only
inspected during the check, never consumed or changed.

### Example 1

```text
Input: startWords = ["grip","dot","trap"], targetWords = ["prigs","dot","gripd"]
Output: 2
Explanation: "prigs" grows from "grip" by attaching 's' and shuffling, and
"gripd" from "grip" by attaching 'd'. The target "dot" matches the start word
"dot" exactly, but the move always attaches a letter, so an unchanged word is
never reachable.
```

### Example 2

```text
Input: startWords = ["me","to"], targetWords = ["team","toe"]
Output: 1
Explanation: "toe" grows from "to" plus 'e'. "team" holds four letters; every
start word is two letters long and the move adds exactly one, so nothing
reaches it.
```

### Example 3

```text
Input: startWords = ["x","y"], targetWords = ["yx","xy","z"]
Output: 2
Explanation: "yx" is "x" plus 'y' shuffled (equally "y" plus 'x'), and "xy"
likewise, so both count. The lone "z" would need a start word made of no
letters, which does not exist.
```

### Constraints

- `1 <= startWords.length, targetWords.length <= 5 * 10⁴`
- `1 <= startWords[i].length, targetWords[j].length <= 26`
- every word consists of lowercase English letters only
- no letter occurs twice in any one word

## Hints

### Hint 1

After the shuffle step, the order of a word carries no information. What
single fact about a word decides everything here?

### Hint 2

Collect that fact for every start word into a container that answers
membership queries at once.

### Hint 3

With no letter repeating, a 26-bit mask — one flag per letter present —
captures a word's letter set exactly and compares in one instruction.

### Hint 4

A target is reachable exactly when deleting one letter from its set leaves a
stored start set. Try every deletion; there are at most 26.
