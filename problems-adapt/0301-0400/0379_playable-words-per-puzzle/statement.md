# Playable Words per Puzzle

## Description

A puzzle is a string of seven **distinct** lowercase letters, and its first
letter is the puzzle's **key letter**.

A word is _playable_ against a puzzle when:

- the word uses the puzzle's key letter, and
- every letter the word uses is one of the puzzle's seven letters.

Repeated letters inside a word are harmless — only the set of letters it uses
matters.

Given the string lists `words` and `puzzles`, return an array `answer` where
`answer[i]` is the number of words playable against `puzzles[i]`.

### Example 1

```text
Input: words = ["tide","tilde","doted","edit"], puzzles = ["tidelrp","editsuv","lodetuw","qwertyu"]
Output: [3,2,0,0]
Explanation:
"tidelrp" keys on t: "tide", "tilde" and "edit" draw only on its letters; "doted" brings an o.
"editsuv" keys on e: "tide" and "edit" still fit; "tilde" now needs an l.
"lodetuw" keys on l: only "tilde" uses an l, and it also needs an i, which this puzzle lacks.
No word contains q, so nothing is playable against "qwertyu".
```

### Example 2

```text
Input: words = ["sleets","stakes","kales","least","steals"], puzzles = ["stloaze","elostuw"]
Output: [3,1]
Explanation: "sleets", "least" and "steals" use only letters of "stloaze" and
include its key s; "stakes" and "kales" each need a k. "elostuw" keys on e,
and only "sleets" avoids letters outside it.
```

### Constraints

- `1 <= words.length <= 10⁵`
- `4 <= words[i].length <= 50`
- `1 <= puzzles.length <= 10⁴`
- every puzzle is exactly 7 letters, all distinct
- words and puzzles use lowercase English letters only

## Hints

### Hint 1

Only the set of letters a word uses decides anything, and a puzzle offers just
seven of them — so at most 2⁷ letter sets can ever be playable against one
puzzle.

### Hint 2

Encode a set of letters as a 26-bit integer, one bit per letter. A word is
playable exactly when its mask sits inside the puzzle's mask and the key
letter's bit is set.

### Hint 3

Testing every word against every puzzle is far too slow. Bucket the words by
mask once, then for each puzzle walk the submasks of its mask that carry the
key letter's bit, adding up the bucket sizes.
