# Solutions — Mirror Letters in Place II

## Two pointers per character class

The two reversals act on disjoint position sets: a slot that starts on a
letter still holds a letter afterwards, and likewise for the special
characters, so neither reversal can disturb the other. That means each class
can be reversed on its own with the classic in-place two-pointer swap —
walk `i` from the left and `j` from the right, keep advancing whichever side
points at a character outside the class being reversed, and swap once both
sides point at characters of that class.

The first pass skips special characters and swaps the letters it meets,
which reverses the letters inside the letter positions. It leaves every
special character exactly where it was, so a second pass over the same
array — now skipping letters — finds the special characters in their
original order and reverses them inside the special positions. In
`"o@rem#h"` the letters `['o', 'r', 'e', 'm', 'h']` become
`['h', 'm', 'e', 'r', 'o']`, then the specials `['@', '#']` become
`['#', '@']`, giving `"h#mer@o"`. Each pointer only ever
moves inward, so both passes together touch each position a constant number
of times; the only extra space is the mutable copy of the string.

**Complexity:** `O(n)` time, `O(n)` space.
