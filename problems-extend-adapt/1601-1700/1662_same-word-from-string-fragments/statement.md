# Same Word From String Fragments

## Description

Two lists of fragments, `word1` and `word2`, each builds one longer word:
read the fragments left to right and glue them together end to end. Return
`true` when both lists build exactly the same word, and `false` otherwise.

The two lists never need to split the word at the same places — only the
joined results are compared.

### Example 1

```text
Input: word1 = ["car", "go"], word2 = ["c", "argo"]
Output: true
Explanation:
word1 joins to "car" + "go" -> "cargo"
word2 joins to "c" + "argo" -> "cargo"
Both lists build the same word, so the answer is true.
```

### Example 2

```text
Input: word1 = ["tar", "get"], word2 = ["target", "s"]
Output: false
```

### Example 3

```text
Input: word1 = ["al", "go", "rithm"], word2 = ["algorithm"]
Output: true
```

### Constraints

- Each list contains between 1 and 1000 fragments.
- Each fragment is between 1 and 1000 characters long.
- Each joined word is between 1 and 1000 characters long.
- Every fragment consists of lowercase English letters.

## Hints

### Hint 1

Joining each list's fragments in order produces one word per list; build
both words and compare them.

### Hint 2

Two joined words are equal exactly when they agree character for
character, so the fragment boundaries themselves never matter.
