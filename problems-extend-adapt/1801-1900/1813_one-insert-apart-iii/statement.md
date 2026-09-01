# One Insert Apart III

## Description

A sentence is a sequence of words separated by single spaces, with no
leading or trailing space, and every word is made only of English
letters. You are given two sentences `sentence1` and `sentence2`.

The two sentences are _one insert apart_ when a single insertion can make
them identical: pick either sentence and splice in any sentence of your
choice — possibly an empty one — between two of its words (or before the
first or after the last word). The inserted words must be joined with
single spaces, exactly like the words already there.

For instance, `"go team"` becomes `"go big team"` after inserting `"big"`
after `"go"`, so those two are one insert apart. But `"red rose"` cannot
be turned into `"red roses"` by any insertion, because the difference is
inside a word rather than a whole word between spaces.

Return `true` if `sentence1` and `sentence2` are one insert apart, and
`false` otherwise.

### Example 1

```text
Input: sentence1 = "we all love fresh bread", sentence2 = "we bread"
Output: true
Explanation: Inserting "all love fresh" between "we" and "bread" in
sentence2 makes it equal to sentence1.
```

### Example 2

```text
Input: sentence1 = "big red truck", sentence2 = "big blue truck"
Output: false
Explanation: The sentences disagree inside their common frame, and no
single insertion can fix a swapped word.
```

### Example 3

```text
Input: sentence1 = "early bird", sentence2 = "early bird catches the worm"
Output: true
Explanation: Inserting "catches the worm" after the last word of
sentence1 makes the two equal.
```

### Constraints

- `1 <= sentence1.length, sentence2.length <= 100`
- `sentence1` and `sentence2` consist of lowercase and uppercase English
  letters and spaces.
- Words in both sentences are separated by a single space.

## Hints

### Hint 1

Think of the shorter sentence's word list as a concatenation of a prefix
and a suffix of the other sentence's word list; everything strictly
between them is what the insertion supplies.

### Hint 2

Scan for the longest shared prefix from the front and the longest shared
suffix from the back, then check whether the two scans together account
for every word of the shorter sentence.
