# Longest Ascending Vowel Run

## Description

Call a substring of vowels an _ascending vowel run_ when both of these
hold:

- All five English vowels (`'a'`, `'e'`, `'i'`, `'o'`, `'u'`) occur in it
  at least once.
- Reading left to right, the letters never step backwards through the
  alphabet: every `'a'` precedes every `'e'`, every `'e'` precedes every
  `'i'`, and so on.

So `"aeiou"` and `"aaaaaaeiiiioou"` are ascending vowel runs, while
`"uaeio"`, `"aeoiu"`, and `"aaaeeeooo"` are not.

You are given a string `word` made up entirely of vowels. Return the
length of its longest substring that is an ascending vowel run, or `0`
when no substring qualifies.

### Example 1

```text
Input: word = "uuuaaaeiiooouuueee"
Output: 12
Explanation: The longest qualifying substring is "aaaeiiooouuu", of
length 12.
```

### Example 2

```text
Input: word = "aeeeiiiiooo"
Output: 0
Explanation: The letters never step backwards, but `'u'` never appears,
so no substring counts and the answer is 0.
```

### Example 3

```text
Input: word = "aaeoouuiaaaeeeiiiiooouu"
Output: 15
Explanation: The run "aaeoouu" covers every vowel except `'i'`, while
"aaaeeeiiiiooouuu" carries all five and wins at length 15.
```

### Constraints

- `1 <= word.length <= 5 * 10⁵`
- `word` consists of the characters `'a'`, `'e'`, `'i'`, `'o'`, `'u'`.

## Hints

### Hint 1

A qualifying substring must begin at an `'a'` — start a fresh run at
every `'a'` you meet.

### Hint 2

Extend the run while each next letter is at least the current one, and
remember which of the five vowels the run has already covered.

### Hint 3

When the run can no longer extend, only runs that covered all five
vowels are candidates; resume scanning from where the run ended.
