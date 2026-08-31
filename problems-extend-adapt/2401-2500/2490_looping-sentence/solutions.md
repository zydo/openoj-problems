# Solutions — Looping Sentence

A sentence is looping exactly when every space joins a matching
last-to-first pair of characters and the sentence wraps from its final
word back to its first.

## Single scan over characters

Instead of decomposing into words, walk the raw string and inspect each
space: the character immediately before a space is the last character of
one word and the character immediately after it is the first character of
the next word, so a junction matches exactly when those two characters are
equal. The first character of the sentence is the first character of the
first word and the last character is the last character of the last word,
so the wrap condition reduces to a single comparison between
`sentence[0]` and the final character. The scan can stop at the first
space whose neighbours differ.

On `"racecar racecar racecar"` every space joins an equal pair and the
endpoints 'r' and 'r' match, so the answer is true; on `"aa bb aa"` the
first space joins 'a' and 'b', immediately falsifying the sentence. A
one-word sentence has no spaces, so it is looping exactly when its first
and last characters coincide — `"eetcode"` qualifies and `"Leetcode"` does
not.

**Complexity:** `O(n)` time, `O(1)` space.
