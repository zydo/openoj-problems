# Solutions — Movie Rental Desk

## Tokenized lazy heaps over a fixed price table

Prices never move — `price[(shop, movie)]` is fixed at construction and
read-only afterwards. The only live state is which copies are out, and the
two queries want it grouped differently: `search` ranks one movie's
unrented copies by `(price, shop)` while `report` ranks every rented copy
by `(price, shop, movie)`. So the desk holds one min-heap per movie for
the shelf side and one global min-heap for the rented side, and `rent` /
`handBack` ferry a copy between them.

Deletion is the classic obstacle: heaps cannot pull an arbitrary entry,
and a copy that is rented, handed back, and rented again would appear
twice over. The fix is to never reuse an entry. Every push carries a fresh
**token** from a global counter, and the owning side records the live
token per `(shop, movie)`. Renting invalidates the shelf token; handing
back mints a new one. An entry is garbage exactly when its token no longer
matches the recorded one, so identical-looking entries from different
rental cycles can never both count.

`search` and `report` share one routine: discard garbage off the top,
gather the first five live entries, push them back — live entries are
peeked, not consumed, so answering never disturbs the state. Every entry
is pushed once and thrown away at most once, so cleanup amortizes into
the pushes.

Both the Python and Java canonical solutions implement exactly this
scheme. The Python one keys its maps on `(movie, shop)` tuples; the Java
one packs the pair into a `long` (`high * 10 000 001 + low`) and stores
heap entries as `long[] {price, shop[, movie], token}`.

**Complexity:** `O(log n)` per `rent`/`handBack`, `O(k log n)` per
`search`/`report` plus amortized garbage cleanup, `O(n)` space over `n`
catalogue entries.
