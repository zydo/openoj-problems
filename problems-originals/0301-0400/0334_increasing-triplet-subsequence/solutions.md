# Solutions — Increasing Triplet Subsequence

## Track the two smallest ascending candidates

Only a yes/no answer is needed, so nothing has to be remembered beyond
two numbers: `first`, the smallest value seen so far, and `second`, the
smallest value that already has a strictly smaller predecessor. Scanning
left to right, a value that does not beat `first` replaces it; one that
beats `first` but not `second` replaces `second`; and one that beats both
completes an ascending triple — its predecessor chain exists by
construction.

The subtle case is a new minimum arriving after `second` is set: it
updates `first` alone, which can only help later values, because
`second`'s guarantee — some smaller earlier element exists — is never
weakened by shrinking `first`.

**Complexity:** `O(n)` time, `O(1)` space.
