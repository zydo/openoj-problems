# Solutions — Lone Element and One Pair

Both solutions exploit the same rigid shape — one value once, one value
twice, the rest exactly three times — but at different altitudes. The hash
map tallies whole values and simply reads off the two whose tallies break
the pattern, trading a linear-size table for directness. The bitwise
automaton drops to the 32 bit columns instead, where the triples vanish
modulo 3; two running masks and one partitioning bit recover both values in
truly constant extra space, the bound the statement asks for.

## Frequency counting with a hash map

The array's shape is completely rigid: one value once, one value twice,
everything else exactly three times, so both answers can be read straight off
a frequency table. One linear pass tallies each distinct value; a scan over
the (few) distinct keys hands back the key tallied once as the first answer
and the key tallied twice as the second.

The table holds at most one entry per distinct value, and integer keys hash
directly, so the full signed 32-bit range — negatives included — needs no
special casing. The two values come out in the required order
[single-occurrence value, paired value].

**Complexity:** `O(n)` time, `O(n)` space.

## Mod-3 bitwise counting with a differing-bit partition

The triples are the whole obstacle, and they dissolve once counting moves to
individual bits: a value appearing three times adds 3 to every bit column it
touches, which is 0 modulo 3. A plain XOR enjoys no such cancellation — it
erases pairs, not triples — so the count must be taken modulo 3, and a mod-3
count per bit needs two masks. The automaton keeps `ones` for bits whose
running count is 1 (mod 3) and `twos` for bits whose count is 2 (mod 3); each
element advances both with a few AND/XOR/NOT steps.

After the sweep the masks hold the two specials with one gap. A bit set only
in the single contributes 1 and lands in `ones`; a bit set only in the pair
contributes 2 and lands in `twos`; but a bit set in both contributes 3, falls
out of both masks, and is indistinguishable from a bit neither value has. No
further inspection of the two masks can close that gap, which is why a second
observation is needed.

The way out is that the two values differ somewhere: `ones | twos` is exactly
their XOR, and it is nonempty. Its lowest set bit belongs to one special and
not the other, so partitioning the array on that bit puts the single on one
side and the pair on the other, while every triple lands whole on whichever
side matches its own bit. Each side is a smaller instance of the familiar
shape — one exceptional multiplicity, everything else thrice — so running the
same automaton over each side yields the single intact from that side's
`ones` mask and the pair intact from its `twos`, shared bits included.

Values are plain 32-bit patterns throughout; negatives need nothing beyond
re-reading the sign bit once the masks settle. Two sweeps and a handful of
registers meet the statement's constant-space requirement exactly.

**Complexity:** `O(n)` time, `O(1)` space.
