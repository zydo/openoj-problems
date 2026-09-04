# Solutions — Repeated DNA Sequences

## Sliding Window with Hash Set

Every 10-letter sequence occurs at some starting index, so the solution slides a fixed-length window of size 10 across the string and asks one question per position: has this exact substring been seen before? A `seen` set records every window as it passes, and the moment a window is already present, it has occurred at least twice and goes into a `repeated` set.

Using a second set for the answers (rather than a list) handles windows that appear three or more times — such a window is "rediscovered" several times but is collected exactly once. The loop runs over `range(len(s) - 9)`, which naturally produces an empty result for strings shorter than 10 since no full window fits. Each iteration slices and hashes a 10-character string, which is constant work per index.

The result is emitted from `sorted(repeated)`, giving a deterministic output order regardless of the order in which duplicates were encountered. The hash set is the working horse that turns a pairwise O(n^2) substring comparison into a single linear scan.

**Complexity:** `O(n)` time, `O(n)` space.
