# Solutions — Sum of Scores of Built Strings

## Z-function

The key observation is that every prefix-built string `s_i` is a suffix of the final string: characters are prepended, so `s_1` is the last character, `s_2` the last two, and `s_n = s` itself. The score of `s_i` — the longest common prefix of `s_i` and `s` — is therefore exactly `z[n - i]`, the length of the longest prefix of `s` that matches the suffix of `s` starting at position `n - i`. Summing all scores is just summing the Z-array, with the special case `z[0] = n` for `s_n` since a string is its own longest prefix.

The code computes the Z-array in the standard linear fashion by maintaining the rightmost-known match window `[left, right)`. For each position `i` inside the window, the already-computed value `z[i - left]` is a lower bound (capped at `right - i` so the claim never extends past verified territory); outside the window it starts at 0. A direct character-comparison loop then extends the match as far as it truly goes, and the window is moved whenever `i + z[i]` pushes past `right`. Every successful comparison strictly advances `right`, and `right` never decreases, so the total comparison work is `O(n)`.

The guard for `n == 0` keeps the array allocations sane, though the constraint promises `n >= 1`. The whole computation is a single left-to-right pass over the string plus one summation, and the only auxiliary storage is the `z` array itself.

**Complexity:** `O(n)` time, `O(n)` space.
