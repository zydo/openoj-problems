# Solutions — Dial Spelling Steps

## Stage-by-Stage Dynamic Programming over Alignments

The only thing that carries from one key character to the next is _where the
dial is pointing_ — the history of how it got there is spent. That makes the
dial position the entire state, and since a press is only legal when the
marked position already holds the wanted letter, the reachable states after
spelling `key[:t]` are exactly the ring indices carrying `key[t-1]`. So the
search never explores the whole ring at every stage: grouping the ring's
indices by letter up front leaves each stage considering only the alignments
that can actually spell its character.

Each stage keeps a table from alignment to the cheapest rotation total that
reaches it. Moving from an alignment `i` to an alignment `j` costs the
circular distance `min(|i - j|, n - |i - j|)` — clockwise and
counterclockwise cost the same per step, so the better of the two arcs always
wins, and nothing is gained by ever taking the longer way around. Every new
alignment takes the minimum over all alignments surviving from the previous
stage, which is what lets a locally expensive rotation stand when it sets up
a cheaper remainder: a letter appearing twice on the rim may be worth
reaching at the far copy if the following letters cluster there. Starting
from `{0: 0}` encodes the one fact given — `ring[0]` begins at the marker,
at no cost.

Presses are deliberately left out of the table. Exactly one press is spent
per key character no matter which alignments the path chooses, so it is a
constant that cannot influence any comparison; adding `len(key)` once at the
end keeps the state space about rotation alone. The answer is the cheapest
surviving alignment after the final character, plus that constant.

**Complexity:** `O(k · n²)` time and `O(n)` space, where `n = len(ring)` and
`k = len(key)` — each stage pairs its candidate alignments against the
previous stage's, and both sets are bounded by the ring's length.
