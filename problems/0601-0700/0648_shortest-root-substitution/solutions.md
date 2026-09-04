# Solutions — Shortest Root Substitution

## Root set, ascending prefix scan

Load the dictionary into a hash set, so testing whether a string is a root
costs one lookup. A derivative is then found by scanning its prefixes from
length 1 upward: the first prefix that lands in the set is the shortest root
forming the word — ascending order settles the shortest-root tie rule by
itself, with no comparison bookkeeping. A word whose prefixes all miss keeps
itself, which is exactly the replace-nothing case; the output is the words
joined back with single spaces.

No root is longer than 100 letters, so the scan stops there: a longer prefix
could not equal any root, and the cap keeps a 1000-letter word from paying for
prefixes no root can match. A trie of the roots would walk each word once
instead, but the set scan is simpler and, at these bounds, just as fast.

**Complexity:** `O(W * L²)` time — `W` sentence words each testing up to
`L = min(word, 100)` prefixes, every test hashing a prefix of its own length
(~5·10⁶ hashed characters at the 10⁶-letter sentence ceiling) — and
`O(D + S)` space for the root set (`D` total dictionary letters) and the
rebuilt sentence (`S` its length).
