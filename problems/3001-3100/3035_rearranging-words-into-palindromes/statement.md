# Rearranging Words Into Palindromes

## Description

You are given an array `words` containing `n` strings.

You may perform any number of letter exchanges. One exchange picks one
character from one word and one character from another word — the two words
may even be the same word — and swaps them: choose indices `i`, `j`, `x`, and
`y` such that `0 <= i, j < n`, `0 <= x < words[i].length`, and
`0 <= y < words[j].length`, then swap the characters `words[i][x]` and
`words[j][y]`. A word's length never changes.

Return the greatest number of words that can be palindromes after any
sequence of exchanges.

### Example 1

```text
Input: words = ["cba","ab","cc"]
Output: 3
Explanation: The pool of letters is a x 2, b x 2, c x 3, which splits into
palindromes of the required lengths 3, 2, 2 — for instance the words can
become ["ccc","aa","bb"].
Every word is now a palindrome, so the answer is 3.
```

### Example 2

```text
Input: words = ["abcde","fghij","kk"]
Output: 1
Explanation: Across all seven distinct letters, only the two k's form a
matching pair. The two length-5 words would each need two such pairs for
their mirrored slots, and letters cannot be duplicated, so neither can be
made a palindrome.
"kk" already is one, and it can be shown that no second word can join it,
so the answer is 1.
```

### Example 3

```text
Input: words = ["mam","dad"]
Output: 2
Explanation: Both words are already palindromes, so no exchange is needed
and the answer is 2.
```

### Constraints

- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 100`
- Each word consists only of lowercase English letters.

## Hints

### Hint 1

An exchange can send any letter to any position of any word, so where letters
currently sit is irrelevant. Only the total count of each letter and the
lengths of the words matter.

### Hint 2

A palindrome fills mirrored slots with equal letters, so a word of length `L`
consumes `L / 2` same-letter pairs from the global letter pool. Count how
many disjoint pairs the whole pool supplies.

### Hint 3

Centers are never the bottleneck: the words chosen for palindromehood consume
exactly their own characters, and after the mirrored pairs are set aside
enough single letters always remain for the odd-length words among them.

### Hint 4

Process the words from shortest to longest, paying each one's half-length
from the pair budget. The first word whose half-length exceeds the remaining
budget rules out every longer word too, so stop there; the words paid so far
are the answer.
