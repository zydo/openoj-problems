# Synonym Swaps in a Sentence

## Description

Each pair in `synonyms` marks two words as interchangeable, and the
relation follows chains: if `a` is interchangeable with `b`, and `b` with
`c`, then all three stand in for one another.

Given a sentence `text`, build every sentence that results from replacing
any of its words with an interchangeable one — each position may keep its
word or switch to any other member of that word's group, independently of
the rest. Return all resulting sentences sorted lexicographically.

### Example 1

```text
Input: synonyms = [["fast","quick"],["quick","speedy"],["slow","sluggish"]], text = "a fast runner is not slow"
Output: ["a fast runner is not slow","a fast runner is not sluggish","a quick runner is not slow","a quick runner is not sluggish","a speedy runner is not slow","a speedy runner is not sluggish"]
Explanation: fast, quick, and speedy form one group through the chain
fast-quick-speedy; slow and sluggish form another.
```

### Example 2

```text
Input: synonyms = [["big","large"]], text = "the big red box"
Output: ["the big red box","the large red box"]
Explanation: Words outside every pair, like red, never change.
```

### Constraints

- `0 <= synonyms.length <= 10`
- `synonyms[i].length == 2`
- `1 <= synonyms[i][0].length, synonyms[i][1].length <= 10`
- `synonyms[i][0] != synonyms[i][1]`
- All the pairs are distinct.
- `text` consists of at most `10` words separated by single spaces.

## Hints

### Hint 1

Pair up the words into groups in which every member is interchangeable
with every other.

### Hint 2

A union-find structure merges the pairs, chains included, in near-linear
time.

### Hint 3

Then walk the sentence word by word, fanning each position out over its
group's members, and sort what comes out.
