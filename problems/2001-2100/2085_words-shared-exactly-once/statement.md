# Words Shared Exactly Once

## Description

You are handed two lists of lowercase words, `words1` and `words2`. Count
the words that appear exactly once in the first list and exactly once in
the second. A word that repeats within either list never qualifies, no
matter how often it shows up in the other.

### Example 1

```text
Input: words1 = ["cat","dog","cat","bird"], words2 = ["bird","cat"]
Output: 1
Explanation:
"bird" appears once in each list, so it counts. "cat" appears twice in
words1, and "dog" is missing from words2 entirely. Answer: 1.
```

### Example 2

```text
Input: words1 = ["x","y","z"], words2 = ["x","x","z"]
Output: 1
Explanation:
"x" appears once in words1 but twice in words2, and "y" is absent from
words2, so only "z" qualifies.
```

### Example 3

```text
Input: words1 = ["p","q","r","s"], words2 = ["t","u"]
Output: 0
Explanation: The two lists share no words at all.
```

### Example 4

```text
Input: words1 = ["same","same"], words2 = ["same"]
Output: 0
Explanation: "same" occurs once in words2 but twice in words1, so nothing
qualifies.
```

### Constraints

- Each list holds between `1` and `1000` words.
- Every word is `1` to `30` lowercase English letters long.

## Hints

### Hint 1

One frequency tally per list is all you need: a word qualifies precisely
when both tallies show exactly `1`.

### Hint 2

Building those tallies with a hash map keeps the whole scan linear in the
combined input size.
