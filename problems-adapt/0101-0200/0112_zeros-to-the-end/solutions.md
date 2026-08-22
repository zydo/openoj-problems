# Solutions — Zeros To The End

Two in-place compactions that agree on the reading sweep and part ways over
the zeros. The write index declines to carry them at all: non-zero values
are copied forward, and the tail is declared zero afterwards in a second
short pass. The snowball keeps every zero and rolls the whole pack of them
rightward — each non-zero it meets vaults the pack in a single exchange.

## Write Index

One cursor doing two jobs. The reader sweeps every element; the write index
marks the slot the next non-zero value belongs in, so everything left of it
is finished — the non-zero values in their original order. A non-zero read
is copied to `nums[write]` and `write` advances; a zero is not moved, it is
simply not carried. Overwriting is safe because `write` never passes the
reader — the copy lands at worst on the slot just left behind, never on a
value still waiting to be read.

When the sweep ends, `write` is the count of non-zero values, and every
slot from there on holds either a stale duplicate or an already-read zero —
so the tail pass overwrites all of it with zeros and the rearrangement is
done. Over `[7, 0, 4, 0, 9]`: 7 copies onto itself, 4 and 9 copy forward to
give `[7, 4, 9, 0, 9]`, and the two tail slots are zeroed — the trailing 9
is a duplicate the sweep left behind, which is exactly why the tail pass
cannot be skipped.

Every slot is written exactly once — the front stretch by copy, the tail by
decree — and nothing is special-cased: an all-zero array writes only zeros,
an all-non-zero array copies every element onto itself.

**Complexity:** `O(n)` time, `O(1)` space.

## Snowball Swap

Two cursors advance together over the array. The reader, `fast`, inspects
every element; the writer, `slow`, always sits on the slot the next
non-zero value should occupy. This split maintains an invariant across the
loop: `nums[:slow]` is finished — the non-zero values in their original
order — and the stretch between the cursors holds nothing but zeros that
are waiting to be overtaken. That stretch is the snowball: it grows by one
every time `fast` rolls over a zero, and every non-zero vaults the whole
ball in a single exchange.

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
