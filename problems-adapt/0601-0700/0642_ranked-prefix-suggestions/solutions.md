# Solutions — Ranked Prefix Suggestions

## Trie with Frequencies and a Cursor

Insert each historical sentence into a trie and store its frequency at the
terminal node. The node reached after a prefix represents exactly the set of
sentences eligible for that prefix.

Keep a cursor and a text buffer for the active session. An ordinary character
advances the cursor when its edge exists. If the path is missing, latch the
cursor into a dead state so further ordinary characters return no suggestions,
while still appending them to the buffer.

From a live cursor, traverse its subtree and collect terminal sentences with
their frequencies. Sorting by descending frequency and ascending sentence,
then taking three, implements the ranking. On `#`, insert or update the full
buffered sentence, reset to the root, and return an empty list.

**Complexity:** each ordinary call uses `O(T + r log r)` time for `T` nodes and
`r` sentences below the prefix; the trie uses `O(S)` total historical text
space.
