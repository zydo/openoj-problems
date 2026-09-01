# Tolerant Word Lookup

## Description

Design a lookup that answers every query word with a word from `wordlist`,
forgiving two kinds of spelling slip along the way:

- **Capitalization slips.** A query that disagrees with a wordlist word only
  in upper/lowercase letters still resolves to it, and the answer is
  reported in the casing the wordlist word carries. So with
  `wordlist = ["river"]` a query of `"RiVeR"` is answered `"river"`, and with
  `wordlist = ["River"]` a query of `"river"` is answered `"River"`.
- **Vowel slips.** A query also resolves to a wordlist word when its letters
  `a`, `e`, `i`, `o`, `u` — each such position on its own — can be swapped
  for other vowels so that, ignoring case, it becomes that word. The answer
  again carries the wordlist word's casing. With `wordlist = ["Rover"]`, the
  query `"ravar"` resolves to `"Rover"`, while `"rroveer"` (one vowel too
  many) and `"rrvr"` (vowels missing) resolve to nothing: inserting or
  dropping letters is not a vowel slip, and no consonant may ever change.

Each query is settled by the first tier that applies:

1. If the query equals some wordlist word exactly, letter for letter and
   case for case, that same word is echoed back.
2. Otherwise, the earliest wordlist word the query matches under the
   capitalization rule is the answer.
3. Otherwise, the earliest wordlist word the query matches under the vowel
   rule is the answer.
4. Otherwise, the answer is the empty string `""`.

Given `wordlist` and an array `queries`, return the list of answers, one per
query, in order.

### Example 1

```text
Input: wordlist = ["Red","rose","RAD","rade"], queries = ["red","Rad","rose","rode","RUDE","rodes"]
Output: ["Red","RAD","rose","rade","rade",""]
Explanation: "rose" echoes back exactly. "red" and "Rad" agree with
wordlist words up to capitalization. "rode" and "RUDE" agree with "rade" up
to vowel slips. "rodes" is a letter longer than every candidate and matches
nothing.
```

### Example 2

```text
Input: wordlist = ["blue"], queries = ["BlUe","blau","bluee"]
Output: ["blue","blue",""]
Explanation: "BlUe" differs only in casing and "blau" only in its vowels;
"bluee" has an extra letter and matches nothing.
```

### Constraints

- `1 <= wordlist.length, queries.length <= 5000`
- `1 <= wordlist[i].length, queries[i].length <= 7`
- `wordlist[i]` and `queries[i]` consist only of English letters.
