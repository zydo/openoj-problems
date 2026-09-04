# Ambiguous Abbreviation Check

## Description

A word's abbreviation joins its first letter, the count of letters
strictly between the first and last letter, and its last letter. A word
of two characters or fewer abbreviates to itself.

For example:

```text
dog --> d1g, since one letter sits between 'd' and 'g'.
internationalization --> i18n, since 18 letters sit between 'i' and 'n'.
it --> it, since a two-character word abbreviates to itself.
```

Implement the `AbbreviationChecker` class:

- `AbbreviationChecker(dictionary)` initializes the checker with a word
  list `dictionary`.
- `isAmbiguityFree(word)` returns `true` when either holds (otherwise
  `false`):
    - No word in `dictionary` shares `word`'s abbreviation.
    - Every word in `dictionary` sharing `word`'s abbreviation is `word`
      itself.

### Example 1

```text
Input:
["AbbreviationChecker", "isAmbiguityFree", "isAmbiguityFree", "isAmbiguityFree", "isAmbiguityFree", "isAmbiguityFree"]
[[["lamp", "lion", "goat", "gate"]], ["loop"], ["lint"], ["goad"], ["gale"], ["gate"]]
Output: [null, false, true, true, false, true]
Explanation:
AbbreviationChecker checker = new AbbreviationChecker(["lamp", "lion", "goat", "gate"]);
checker.isAmbiguityFree("loop"); // false — "lamp" also abbreviates to "l2p", and "loop" != "lamp"
checker.isAmbiguityFree("lint"); // true — no dictionary word abbreviates to "l2t"
checker.isAmbiguityFree("goad"); // true — no dictionary word abbreviates to "g2d"
checker.isAmbiguityFree("gale"); // false — "gate" also abbreviates to "g2e", and "gale" != "gate"
checker.isAmbiguityFree("gate"); // true — "gate" is in the dictionary, and no other word shares its abbreviation
```

### Constraints

- `1 <= dictionary.length <= 3 * 10⁴`
- `1 <= dictionary[i].length <= 20`
- `dictionary[i]` consists of lowercase English letters.
- `1 <= word.length <= 20`
- `word` consists of lowercase English letters.
- At most `5000` calls are made to `isAmbiguityFree`.
