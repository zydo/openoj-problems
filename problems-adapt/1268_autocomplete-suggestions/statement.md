# Autocomplete Suggestions

## Description

You are given a list of distinct words `catalog` and a string `query`.

A search box autocompletes as you type: after each character of `query` is
entered, the box lists up to three words from `catalog` that begin with the
characters entered so far. When more than three words begin with that prefix,
the box keeps the three that come first in dictionary order.

Return one list of suggestions per typed character, in typing order.

### Example 1

```text
Input: catalog = ["plan","plane","planet","plank","plant","play"], query = "planet"
Output: [["plan","plane","planet"],["plan","plane","planet"],["plan","plane","planet"],["plan","plane","planet"],["plane","planet"],["planet"]]
Explanation: In dictionary order the catalog reads
["plan","plane","planet","plank","plant","play"]. The prefixes "p", "pl",
"pla", and "plan" all match more than three words, so the first three are
shown; "plane" narrows the field to two words, and "planet" to one.
```

### Example 2

```text
Input: catalog = ["sock"], query = "socket"
Output: [["sock"],["sock"],["sock"],["sock"],[],[]]
Explanation: "sock" matches every prefix of `query` up to and including
itself. Once the fifth character is typed no word begins with the entered
text, so the box goes empty and stays that way.
```

### Example 3

```text
Input: catalog = ["fern","fig","flax"], query = "fi"
Output: [["fern","fig","flax"],["fig"]]
Explanation: "f" prefixes all three words; adding "i" leaves only "fig".
```

### Constraints

- `1 <= catalog.length <= 1000`
- `1 <= catalog[i].length <= 3000`
- `1 <= sum(catalog[i].length) <= 2 * 10⁴`
- The words in `catalog` are distinct.
- Every word in `catalog` consists of lowercase English letters.
- `1 <= query.length <= 1000`
- `query` consists of lowercase English letters.

## Hints

### Hint 1

Put the catalog in dictionary order first. Every word sharing a given prefix
then occupies one contiguous stretch of the sorted list, and the three
suggestions you owe the user are simply that stretch's first three entries.

### Hint 2

Each keystroke extends the previous prefix by one character, so the matching
stretch only ever shrinks. A lower-bound search tells you where the stretch
for the current prefix begins.

### Hint 3

You never need more than the three words that start at that position — stop
at the first word that outgrows the prefix. A trie that stores the best
three words at each node answers every keystroke directly.
