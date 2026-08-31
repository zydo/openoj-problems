# One-Edit Dictionary

## Description

Load a dictionary of distinct words, then answer queries: can changing
exactly one character of the query word (same length, that one position
becoming some other letter) produce a word already in the dictionary?

Implement the `OneEditDictionary` class:

- `OneEditDictionary()` creates an empty dictionary.
- `void loadWords(String[] dictionary)` loads the distinct words once.
- `boolean matchesOneEdit(String searchWord)` returns whether exactly one
  character change turns `searchWord` into some loaded word.

### Example 1

```text
Input:
["OneEditDictionary", "loadWords", "matchesOneEdit", "matchesOneEdit", "matchesOneEdit", "matchesOneEdit"]
[[], [["hello","leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
Output: [null, null, false, true, false, false]
Explanation: "hello" already equals a loaded word (zero edits, not one), so
it's rejected; "hhllo" becomes "hello" by changing its second 'h' to 'e'.
```

### Constraints

- `1 <= dictionary.length <= 100`
- `1 <= dictionary[i].length <= 100`
- All dictionary words are distinct lowercase letters.
- `1 <= searchWord.length <= 100`, lowercase letters.
- `loadWords` is called exactly once, before any `matchesOneEdit` call.
- At most `100` calls are made to `matchesOneEdit`.
