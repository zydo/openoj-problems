# Solutions — Subarrays with Equal Maximal Ends

## Monotonic stack with per-value position lists

Tally by right endpoint. A subarray `[k..i]` ends at `nums[i]`, so for
both ends to be the maximum it must start at an equal value
(`nums[k] = nums[i]`) and contain nothing strictly greater in between —
interior copies of `nums[i]` are harmless, since the maximum is allowed
to repeat. The qualifying starts for endpoint `i` are therefore exactly
the positions of the value `nums[i]` within the stretch reaching back to
the last strictly larger element.

That stretch's left edge, `leftGreater[i]`, comes from one monotonic
stack sweep: pop indices whose values are at most the current value
(neither can be the nearest strictly-larger left neighbor for anything to
come), record the survivor underneath, push the current index. Equal
values get popped, which is precisely what keeps the boundary strict.

A second sweep keeps, per distinct value, the list of its earlier
positions — appended in increasing index order, so always sorted. For
endpoint `i`, the qualifying starts are those positions beyond
`leftGreater[i]`: `len(list) - bisect_right(list, leftGreater[i])`, plus
one for the singleton `[i..i]` whose single element is trivially its own
maximum. Summed over every `i`, each qualifying subarray is counted
exactly once, through its right endpoint.

On `[3,1,3,9,3]`, the two 3s flanking the 9 contribute nothing at the
final position — `leftGreater` for that 3 is the 9's index, and no
position of value 3 lies past it — while the first and third elements
pair up through the intervening 1, which never outranks them.

**Complexity:** `O(n log n)` time, `O(n)` space.
