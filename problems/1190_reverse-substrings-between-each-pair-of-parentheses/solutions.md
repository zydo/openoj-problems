# Solutions — Reverse Substrings Between Each Pair of Parentheses

## Stack of Fragments

The key insight is that a stack of string fragments mirrors the nesting of parentheses exactly. Each open parenthesis starts a fresh fragment; letters accumulate into the fragment currently on top of the stack. When a closing parenthesis arrives, the matching pair has been fully processed, so the top fragment is popped, reversed, and appended to the fragment that now sits below it.

This works because reversing is an involution that composes naturally with nesting: reversing an inner segment and then reversing the outer segment that contains it places every character in its final position in one pass. Explicitly reversing inner pairs one at a time would cost quadratic time in the worst case, while the stack folds all reversals into the merge step, touching each character exactly once per enclosing level but with total work linear in the string length.

The base fragment pushed before scanning acts as the outermost level, so the fully unwound result is simply `stack[0]` joined at the end. The input guarantees balanced parentheses, so every pop finds a fragment underneath, and the final stack always has exactly one fragment left. No brackets ever enter a fragment, so the output is bracket-free by construction.

**Complexity:** `O(n)` time, `O(n)` space.
