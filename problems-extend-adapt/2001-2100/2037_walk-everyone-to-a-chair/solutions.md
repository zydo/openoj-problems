# Solutions — Walk Everyone to a Chair

## Sort and pair equal ranks

Sort the chair positions and student positions independently, then pair the
smallest student position with the smallest chair position, the next
smallest with the next smallest, and so on. Add the absolute distance of
every pair.

If two assignments cross, swapping their destinations cannot increase their
total distance on a line. Repeatedly uncrossing assignments therefore yields
the rank-by-rank pairing, proving that its distance sum is minimal. Duplicate
starting positions remain separate entries and are handled naturally.

**Complexity:** `O(n log n)` time, `O(n)` auxiliary space in the worst case.
