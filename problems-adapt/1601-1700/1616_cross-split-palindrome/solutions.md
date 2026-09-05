# Solutions — Cross-Split Palindrome

## Outside-in matching with a middle-palindrome check

For a fixed combination such as `ahead + btail`, the cut index only
decides where the boundary falls — it never changes which characters end
up adjacent at the outer edges. The very first character of `ahead`
(namely `a[0]`) always lands next to the very last character of
`btail` (namely `b[n-1]`), the second character of `ahead` always
lands next to the second-to-last character of `btail`, and so on,
regardless of where the cut actually sits. So a two-pointer scan can
test all cuts for that combination at once: walk `left` from the start
of `a` and `right` from the end of `b`, advancing inward one step at a
time while `a[left] == b[right]`. Every step confirms one more mirrored
pair no matter which cut index is eventually chosen, as long as the
cut falls at or beyond the matched region.

The scan stops either because `left >= right` — the two pointers met or
crossed, so the entire string is already accounted for by matched pairs
and any cut in the exhausted range trivially works — or because
`a[left] != b[right]`, the first true mismatch. In the mismatch case the
combination can still succeed, but only by choosing a cut that places
the untouched middle range `[left, right]` entirely inside one string's
half. Concretely, cutting right after `right` uses `a[left..right]` as
the tail of `ahead`, and cutting right at `left` uses `b[left..right]`
as the head of `btail`; either way the outer matched pairs already
mirror each other, so the combination is a palindrome exactly when that
leftover middle segment — `a[left..right]` or `b[left..right]` — is
itself a palindrome. Because `ahead + btail` and `bhead + atail`
are different combinations, the whole procedure runs twice, once
matching `a`'s head against `b`'s tail and once with the roles
swapped, and the answer is true if either run succeeds.

**Complexity:** `O(n)` time, `O(1)` space.
