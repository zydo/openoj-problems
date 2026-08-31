# Longest Buildable Word

## Description

You are given an array of strings `words` drawn from an English
dictionary. Call a word **buildable** if you can produce it by starting
from some single letter already in `words` and repeatedly appending one
letter at a time to the end, with every intermediate prefix also
present somewhere in `words`.

Return the longest buildable word in `words`. If several buildable
words tie for longest, return the lexicographically smallest of them.
If no word is buildable at all, return the empty string.

### Example 1

```text
Input: words = ["c","ca","cat","cats"]
Output: "cats"
Explanation: "cats" builds from "cat", "cat" from "ca", and "ca" from the
single letter "c" — every prefix along the way is present in words.
```

### Example 2

```text
Input: words = ["a","ab","az","abc","azc"]
Output: "abc"
Explanation: Both "abc" (via "ab", "a") and "azc" (via "az", "a") are
buildable and tie at length 3. "abc" is returned because it comes first
alphabetically.
```

### Example 3

```text
Input: words = ["abc","de"]
Output: ""
Explanation: Neither word has its full prefix chain present — there is
no single-letter word to start from — so nothing is buildable.
```

### Constraints

- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 30`
- Every character of every word is a lowercase English letter.

## Hints

### Hint 1

For each word, you can check whether every prefix of it also appears in
`words` by keeping the words you have already confirmed buildable in a
set.
