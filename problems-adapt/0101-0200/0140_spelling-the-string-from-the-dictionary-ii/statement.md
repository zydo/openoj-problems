# Spelling The String From The Dictionary II

## Description

Given a string `s` and a list of words `dictionary`, break `s` into pieces by
inserting spaces so that every resulting word is a dictionary word, and
return every sentence that can be built this way.

A word may appear any number of times — several times inside one sentence,
and across different sentences.

The answer has to be deterministic, so the sentences come back in a pinned
order: compare two sentences by their last word, the shorter last word
coming first, and sentences that tie on the last word keep the same relative
ordering among the words before it.

### Example 1

```text
Input: s = "starsandmint", dictionary = ["star","stars","and","sand","mint"]
Output: ["stars and mint","star sand mint"]
Explanation: both readings of the "and"/"sand" seam work; the tie on the
final "mint" is broken by the shorter middle word "and" ahead of "sand".
```

### Example 2

```text
Input: s = "gogogo", dictionary = ["go","gogo"]
Output: ["go go go","gogo go","go gogo"]
Explanation: "go" is reused freely; "go go go" leads because on the final
"go" its prefix "go go" sorts ahead of "gogo" by the same shorter-first rule.
```

### Example 3

```text
Input: s = "railroadcar", dictionary = ["rail","road","railroad","carrot"]
Output: []
Explanation: no dictionary word covers the trailing "car", so no sentence
can be formed at all.
```

### Constraints

- `1 <= s.length <= 20`
- `1 <= dictionary.length <= 1000`
- `1 <= dictionary[i].length <= 10`
- `s` and `dictionary[i]` contain only lowercase English letters.
- All the words in `dictionary` are **unique**.
- The input is guaranteed to keep the total length of all returned sentences
  within `10⁵`.
