# Best Word Score From a Letter Pool

## Description

You have a list of `words`, a pool of `letters` (single characters,
possibly repeated), and a `score` array giving the point value of each
letter: `score[0]` for `'a'`, `score[1]` for `'b'`, and so on to
`score[25]` for `'z'`.

Pick a set of words — each word at most once — that can be built
simultaneously from the pool. Every pool letter is spent at most once, and
leftover letters are simply unused. Return the largest total point value of
such a set. Picking nothing scores 0.

### Example 1

```text
Input: words = ["sun","net","nuts"], letters = ["n","n","u","u","t","s","e","e"], score = [0,0,0,0,5,0,0,0,0,0,0,0,0,1,0,0,0,0,2,4,3,0,0,0,0,0]
Output: 16
Explanation: e=5, n=1, s=2, t=4, u=3. "sun" (2+3+1) and "net" (5+1+4) use
one n each and score 6 + 10 = 16; adding or swapping in "nuts" fails — it
would need a second s or a second t.
```

### Example 2

```text
Input: words = ["ark","ra","kit"], letters = ["a","r","k","i","t"], score = [1,0,0,0,0,0,0,0,5,0,3,0,0,0,0,0,0,2,0,4,0,0,0,0,0,0]
Output: 15
Explanation: a=1, r=2, k=3, i=5, t=4. Skipping "ark" leaves its letters for
"ra" (1+2) and "kit" (3+5+4), totalling 15 — better than "ark" alone at 6.
```

### Example 3

```text
Input: words = ["egg","gg"], letters = ["e","g","g"], score = [0,0,0,0,4,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: 16
Explanation: e=4, g=6. The pool's two g's cover "egg" (4+6+6) but not
"egg" and "gg" together, which would need four g's.
```

### Constraints

- `1 <= words.length <= 14`
- `1 <= words[i].length <= 15`
- `1 <= letters.length <= 100`
- every entry of `letters` is a single character
- `score.length == 26`
- `0 <= score[i] <= 10`
- `words[i]` and the pool entries are lowercase English letters

## Hints

### Hint 1

Fourteen words means at most `2^14` candidate sets — enumerate them all
rather than trying to be clever about which words combine.

### Hint 2

Reduce the pool to a 26-entry count, and each word to its own 26-entry
count plus its total value. Feasibility is then a componentwise
comparison, not a search over letters.

### Hint 3

Walk the words in order, branching on skip or take; take a word only when
the remaining pool still covers its count.

### Hint 4

Every node of that walk is itself a complete valid selection, so compare
the running total against the best at each step, not just at the leaves.
