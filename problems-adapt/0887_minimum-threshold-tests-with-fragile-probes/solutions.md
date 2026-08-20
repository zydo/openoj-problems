# Solutions — Minimum Threshold Tests With Fragile Probes

## Inverted DP on Floors Resolved per Move

Let `covered[m][p]` be the number of consecutive levels whose threshold can be
resolved with `m` tests and `p` probes. A test at the appropriate boundary
leaves `p - 1` probes for the lower levels when it destroys the probe and `p`
probes for the upper levels when it survives. Counting the tested level gives

`covered[m][p] = covered[m-1][p-1] + covered[m-1][p] + 1`.

Increase the test count until coverage with `probeCount` reaches
`levelCount`. A one-dimensional array is sufficient: update probe counts from
high to low so both recurrence terms still belong to the previous test count.
The first count reaching the required coverage is minimal by construction.

With one probe, coverage grows by one per test, guaranteeing termination even
in the worst case.

**Complexity:** `O(probeCount · answer)` time and `O(probeCount)` space.
