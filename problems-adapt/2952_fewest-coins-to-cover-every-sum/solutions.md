# Solutions — Fewest Coins to Cover Every Sum

## Greedy reach extension

One number carries the whole state: `reach`, the guarantee that every value
in `[1, reach]` is a subset sum (initially `reach = 0`). Process the coins
in ascending order. A coin `c` extends the guarantee to `reach + c` exactly
when `c <= reach + 1`, because pairing `c` with each already-covered sum
produces the band `[c, reach + c]`, contiguous with `[1, reach]` precisely
under that inequality. When the next coin (or the exhaustion of the pile)
breaks the rule — `c > reach + 1` — the value `reach + 1` is stranded for
good: every coin still unprocessed is at least `c`, so none can ever
complete a subset summing to it. The one remedy is an added coin, and the
coin worth exactly `reach + 1` is the strongest choice available: it fills
the smallest hole and doubles the covered range to `2 * reach + 1`, so no
other value can beat it by the usual exchange argument.

Walking Example 1 (`coins = [1,3,9]`, `target = 15`):

1. `reach = 0`; the coin 1 fits (`1 <= 1`) and lifts coverage to `[1,1]`.
2. The coin 3 overshoots `reach + 1 = 2`, so a 2-coin is added — coverage
   `[1,3]`.
3. Now `3 <= 4`, the 3 is absorbed, coverage `[1,6]`.
4. The 9 overshoots `reach + 1 = 7`, so a 7-coin is added — coverage
   `[1,13]`.
5. `9 <= 14`, the 9 is absorbed, coverage `[1,22] ⊇ [1,15]`. Two additions.

Each loop step consumes one coin or performs one addition, and every
addition at least doubles `reach`, so the answer is at most logarithmic in
`target` however large the pile's gaps are. Example 3 shows the other edge:
with no 1-coin at all, the very first comparison fails and the first
addition is forced to be a 1. Duplicates are harmless — `[1,1,1]`-style
piles simply extend coverage one notch per coin.

**Complexity:** `O(m log m)` time for the sort, `O(m)` space, where `m` is
the pile size.
