# Solutions — Zeros To The End

## Two-Pointer In-Place Swap

Two cursors advance together over the array. The reader, `fast`, inspects
every element; the writer, `slow`, always sits on the slot the next
non-zero value should occupy. This split maintains an invariant across the
loop: `nums[:slow]` is finished — the non-zero values in their original
order — and the stretch between the cursors holds nothing but zeros that
are waiting to be overtaken.

When `fast` finds a non-zero value it trades places with whatever sits at
`slow` and both cursors advance; a zero is left where it is, joining the
middle stretch that the prefix will eventually absorb into the tail. Since
non-zero values are placed at `slow` in the order of their discovery,
their relative order survives untouched, and the zeros displaced by swaps
drift toward the end. Running this over `[7, 0, 4, 0, 9]`: 7 self-swaps
into place, 0 is skipped, 4 swaps ahead of the parked zero, 0 is skipped
again, 9 swaps forward, and `[7, 4, 9, 0, 0]` falls out.

The swap form is also the answer to the follow-up. While no zero has been
seen the cursors coincide and every "swap" is an element exchanging with
itself — zero writes for a zero-free prefix — and afterwards each non-zero
value moves exactly once, dragging at most one zero behind it. Bubbling
zeros rightward one position at a time, by contrast, can move a single
zero many times.

Nothing needs special casing: an all-zero array never triggers a swap, a
one-element array swaps with itself or not at all, and the mutation is
confined to the given array.

**Complexity:** `O(n)` time, `O(1)` space.
