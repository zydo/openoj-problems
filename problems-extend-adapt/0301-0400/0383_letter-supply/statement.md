# Letter Supply

## Description

You need to assemble the string `ransomNote` from individual letters taken
from `magazine`. Return `true` exactly when the magazine contains every
required letter with sufficient multiplicity; otherwise, return `false`.

Once a letter from `magazine` has supplied one position in `ransomNote`, it
cannot be used again.

### Example 1

```text
Input: ransomNote = "cab", magazine = "aabbcc"
Output: true
```

### Example 2

```text
Input: ransomNote = "book", magazine = "boko"
Output: true
```

### Example 3

```text
Input: ransomNote = "vivid", magazine = "div"
Output: false
```

### Constraints

- `1 <= ransomNote.length, magazine.length <= 10⁵`
- `ransomNote` and `magazine` consist of lowercase English letters.
