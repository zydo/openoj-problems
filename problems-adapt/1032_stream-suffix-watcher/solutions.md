# Solutions — Stream Suffix Watcher

## Word Tree with a Trail of Live Attempts

Answering each character on its own means re-reading endings that overlap
heavily from one step to the next, so the work has to be carried forward
instead. Put the words into a character tree — one node per distinct prefix,
with a flag on the node where a word finishes — and keep a **trail**: the set of
nodes that the currently possible attempts have reached. An attempt is
identified by the position in the text where it began, and the node it sits on
says exactly how much of some word it has spelled so far.

Every call does the same three things. Each node in the trail is asked for the
edge labelled with the new character; a node that has one moves to its child,
and a node that does not is thrown away, since the text from that starting
position has already deviated from every word and no later character repairs it.
The start node is then added, which is what lets a word begin at the character
just fed. Finally the call reports whether any freshly reached node is flagged
as a word ending — the start node itself never counts, as words are non-empty.

The trail cannot outgrow the longest word: an attempt that has consumed more
characters than that has no chance left. Building the tree walks each word once
and stores one node per distinct prefix. Both reference implementations follow
the same shape, one with dictionaries and an end marker, the other with hash
maps and a boolean field on the node.

**Complexity:** `O(L)` per `feed` (`L` = longest word length; the trail never
exceeds it), `O(total word characters)` build and space.
