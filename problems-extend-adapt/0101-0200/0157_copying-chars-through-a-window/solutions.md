# Solutions — Copying Chars Through A Window

## Buffered copy through read4

Read the char source in four-character blocks: each `read4(buf4)` call returns the number of fresh characters it placed in `buf4` (0 once the charSource is exhausted), so the loop keeps calling it while fewer than `n` characters have been delivered. Each block contributes only `min(count, n - total)` characters — the final block is usually partial, either because the request runs out or the charSource does.

Copy that many characters from `buf4` into `buf` at the running offset and advance the total. Stop early when `read4` reports 0, which is the end-of-source signal, so no extra queries are wasted on a spent charSource.

**Complexity:** O(n) time, O(1) extra space (the four-slot scratch buffer).
