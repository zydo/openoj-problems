# Shortest Merged String

## Description

You are given an array of strings `words`. Build the shortest possible string
in which every element of `words` occurs as a substring, and return it.

Neighbouring words may be glued together wherever the tail of one repeats the
head of another, so the answer is usually much shorter than simply writing the
words out one after another.

No element of `words` is contained in any other element, and if several
shortest strings exist, returning any one of them counts as correct.

### Example 1

```text
Input: words = ["earth","ripe","pear"]
Output: "ripearth"
Explanation: Laying the words out as ripe, pear, earth glues "pe" and then
"ear", giving 8 characters. No arrangement does better.
```

### Example 2

```text
Input: words = ["sun","nset","unse"]
Output: "sunset"
Explanation: The order sun, unse, nset overlaps by 2 and then by 3 characters,
and the six-letter result carries all three words at once.
```

### Example 3

```text
Input: words = ["chase","seven","enter","terse"]
Output: "chaseventerse"
Explanation: Each consecutive pair in the order chase, seven, enter, terse
shares two or three characters with its successor, so 20 characters of input
collapse into 13.
```

### Constraints

- `words` holds at least 1 and at most 12 strings.
- Every string in `words` is between 1 and 20 characters long.
- Only lowercase English letters appear.
- The strings are pairwise distinct.

## Hints

### Hint 1

Fix the order in which the words appear. The best you can then do is glue each
neighbouring pair by their longest possible join, so the only quantity worth
precomputing is, for each ordered pair, how many trailing characters of the
first coincide with that many leading characters of the second.

### Hint 2

With those joins known, the length of an arrangement is the total input length
minus the joins it uses, and you want the arrangement that saves the most. That
is a path visiting all `k` words once each — and `k` never exceeds 12.

### Hint 3

Index the search by a subset of words already placed together with the word
placed last, and extend one word at a time. Keep enough in each state (the text
built so far, or a pointer back to the state it came from) to rebuild the
winning string once the search finishes.
