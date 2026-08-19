# Solutions — Count Candidates Embedded in a Text

## Waiting buckets keyed by next needed character

Scanning `text` from the beginning for every candidate repeats too much work.
Instead, process the text once and advance every candidate currently waiting
for the arriving character. A bucket for each letter stores `(candidate,
index)` pairs, and each candidate occupies exactly one bucket.

Initialize each candidate in the bucket for its first character. When a text
character arrives, remove that entire bucket before processing it so that an
entry moved back to the same letter cannot advance twice on one character.
Completed candidates increase the answer; every other entry moves to the
bucket for its next required character.

Each pointer advances only when the earliest available matching text character
is seen. Choosing that earliest position can never prevent a later character
from being matched, so a candidate finishes exactly when it can be read in
order. Every candidate character advances at most once.

**Complexity:** `O(|text| + sum of |candidates[i]|)` time and
`O(|candidates|)` active bucket entries.
