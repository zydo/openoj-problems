# Fewest Substring Sorts To Alphabetize

## Description

Handed a string `s` of lowercase English letters, you may repeatedly tidy
it: one operation picks any substring of `s` — but never the entire string —
and rearranges that piece into non-descending alphabetical order.

What is the fewest operations that leave `s` fully alphabetized? If the job
cannot be done at all, answer `-1`.

### Example 1

```text
Input: s = "atom"
Output: 1
Explanation:
The letter a already leads, so sorting the remaining piece "tom" into "mot"
leaves s = "amot", which reads in order. One operation is enough.
```

### Example 2

```text
Input: s = "lemma"
Output: 2
Explanation:
Sort the substring "mma" into "amm", giving s = "leamm".
Then sort the substring "lea" into "ael", giving s = "aelmm", which is in
order. Thus, the answer is 2.
```

### Example 3

```text
Input: s = "zoom"
Output: 3
Explanation:
The smallest letter m sits at the very end while the largest letter z opens
the string — the one arrangement that resists every shortcut — so three
operations are needed.
```

### Example 4

```text
Input: s = "to"
Output: -1
Explanation:
A length-two string has no proper substring longer than one letter, so a
descending pair can never be repaired. Thus, the answer is -1.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

A string that is already in non-descending order costs nothing.

### Hint 2

If the opening letter is already the smallest (or the closing letter already
the largest), the single substring covering the rest can be sorted, so one
operation finishes the job.

### Hint 3

When the string has just two letters and they descend, no operation can
ever touch both — return `-1`.

### Hint 4

Otherwise the answer is two when the smallest or largest letter occurs
somewhere strictly inside, and three exactly when the string opens with its
largest letter and closes with its smallest.
