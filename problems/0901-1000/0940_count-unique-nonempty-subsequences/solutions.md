# Solutions — Count Unique Nonempty Subsequences

## Prefix Doubling with Last Occurrences

Let `dp[i]` count all different subsequences of the first `i` characters,
including the empty string. Appending a character initially doubles the set:
each old result remains available and also produces a version ending in the
new character.

A repeated character creates duplicates. If its previous occurrence followed
a prefix with `dp[j]` results, appending the character to those same results
produced exactly the strings now counted twice. Subtract `dp[j]` from the
doubled total and remember the current prefix position for the next repeat.

Store the previous prefix index for each of the 26 letters. Modular addition
before reduction keeps subtractions nonnegative. Finally subtract one for the
empty string.

**Complexity:** `O(n)` time and `O(n)` space.
