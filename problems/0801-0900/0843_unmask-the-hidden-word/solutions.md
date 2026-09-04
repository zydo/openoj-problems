# Solutions — Unmask the Hidden Word

## Minimax elimination

Every reply `guess(w) = k` is a constraint with a rare property: the
hidden word must agree with `w` in exactly `k` positions, so cutting the
pool down to the words that satisfy the constraint can never throw the
answer away. Each round leaves the "bucket" of `w` at agreement `k`, and
the only decision is which `w` a guess should be spent on.

Spending guesses on an arbitrary word is fragile. On lists whose words
rarely share letters, almost every reply is 0 and the surviving bucket is
nearly the whole pool — ten rounds barely dent a hundred words. Instead,
score each candidate `w` by its largest agreement bucket (split the pool
by `matches(w, c)` over all candidates `c`) and guess the candidate whose
maximum bucket is smallest: whatever `k` comes back, the survivors number
no more than that bucket. This minimax choice favors words spread evenly
across the possible replies — precisely the guess that shrinks the pool
fastest when the reply is the worst one allowed.

The loop is pick → guess → filter, halting at a reply of 6 (the guess
equals the hidden word everywhere, and distinctness makes it unique). On
the adversarial list — words pairwise agreeing in zero positions — every
reply of 0 discards exactly the guessed word, so six guesses settle a
six-word list. Scoring costs `O(n^2 L)` per round with `L = 6`,
negligible at `n <= 100`.

**Complexity:** `O(n^2 · L · g)` time with `g <= 10` rounds, `O(n)` space.
