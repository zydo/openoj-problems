# Untangle the Tagged Sentence

## Description

Words travel through this judge's pipeline with a digit hitched to the
end of each one. A sentence is written as words separated by single
spaces with no leading or trailing space, and every word carries a tag:
a digit from `1` to `9` appended after its letters that records which
position the word originally held.

The shuffled input `s` hands you the words in scrambled order, each with
its tag still attached. Peel the tags off, put every word back where its
tag says it belongs, and return the restored sentence — words joined by
single spaces, no digits left.

For example, `"greet3 words1 kind2"` untangles to `"words kind greet"`.

### Example 1

```text
Input: s = "river4 Quiet2 a3 flows1"
Output: "flows Quiet a river"
Explanation: The tags say "flows" was first, "Quiet" second, "a"
third, and "river" fourth; dropping the digits and reordering gives the
original sentence.
```

### Example 2

```text
Input: s = "believe3 We1 can2"
Output: "We can believe"
Explanation: Reordering by the trailing digits 1, 2, 3 and stripping
them restores "We can believe".
```

### Example 3

```text
Input: s = "reads5 She2 every3 night1 book4"
Output: "night She every book reads"
Explanation: Position 1 holds "night", 2 "She", 3 "every", 4 "book",
and 5 "reads".
```

### Constraints

- `2 <= s.length <= 200`
- `s` consists of lowercase and uppercase English letters, spaces, and
  digits from `1` to `9`.
- `s` holds between 1 and 9 words, separated by single spaces, with no
  leading or trailing spaces.

## Hints

### Hint 1

Split the sentence on spaces to work with one tagged word at a time.

### Hint 2

The digit glued to each word is not a comparison key — it is the word's
destination slot, so drop each de-tagged word straight into that slot of
a result list and join at the end.
