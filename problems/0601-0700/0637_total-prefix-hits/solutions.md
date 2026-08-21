# Solutions — Total Prefix Hits

## Trie with a pass counter per node

The hit count of a string `p` asks how many entries begin with `p`, and
`answer[i]` adds those counts over every non-empty prefix of `words[i]`. All
of these prefixes are root-to-node paths in one trie built over the whole
list, so build that trie once and let each node keep a counter of how many
insertions walked through it — which is, by construction, exactly the hit
count of the prefix ending at that node.

The Python variant uses nested dictionaries as nodes with the marker key `"#"`
for the counter, avoiding a node class and fixed alphabet arrays. Insertion
follows a word letter by letter, creating children on demand and adding one
to the counter at every depth, so the full word is counted for each of its own
prefixes too. A second pass walks each word again, accumulating the counters
along its path; that running total is the word's answer.

Each character is touched exactly once per pass, so the work and the trie's
size are both proportional to `S`, the combined length of all entries — at
most `10^6` under the given bounds. Entries that share a lead-in share nodes,
which is precisely where the savings over testing each prefix against each
word come from.

**Complexity:** `O(S)` time, `O(S)` space.
