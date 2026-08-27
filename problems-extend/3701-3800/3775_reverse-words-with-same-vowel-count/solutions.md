# Solutions — Reverse Words With Same Vowel Count

The first word fixes a target vowel count, and every later word is
classified against it: words with exactly that many vowels are reversed,
everything else stays as written. Because words are separated by a single
space with no leading or trailing spaces, splitting the sentence yields the
words directly, and each word's fate depends only on its own vowel count.

## Simulate per word

Split `s` into words and count the vowels of the first word to fix the
target. Then walk the remaining words: for each, recompute its vowel count,
and if it equals the target, append the word reversed, otherwise append it
unchanged. Rejoining with single spaces reproduces the sentence exactly.

The vowel check is a constant-size membership test per character, and each
character of `s` is examined a bounded number of times: once while counting
vowels and once during a reversal, so the work is linear in the total
length. The reversed copies double the peak memory to `O(n)`.

**Complexity:** `O(n)` time, `O(n)` space.
