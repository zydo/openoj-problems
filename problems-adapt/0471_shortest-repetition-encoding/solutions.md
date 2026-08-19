# Solutions — Shortest Repetition Encoding

## Interval Dynamic Programming

Let `dp[i][j]` be a shortest representation of `s[i..j]`. Process intervals
in increasing length so every smaller interval is already available.

Begin with the literal substring. Try every split point and concatenate the
two optimal child representations. Also try every period dividing the
interval length. When repeating its prefix reconstructs the full interval,
form `count[dp-pattern]`, using the already optimized representation of the
period itself. This permits nested compression without a separate rule.

Keep only strictly shorter replacements when the current best is literal;
thus a tied encoded form does not replace unchanged text. The table's final
cell describes the complete input. Although multiple shortest encoded forms
may exist, the deterministic traversal supplies one accepted choice.

**Complexity:** `O(n^4)` time and `O(n^3)` space including stored strings.
