# Solutions — Spreading a Whisper at Meetings

## Process one timestamp graph at a time

Sort meetings by time. For every equal-time group, build a temporary undirected graph among its participants and start a breadth-first search from every participant who held the whisper before that moment. Because sharing is instantaneous, the search reaches exactly every connected component that contains an informed person.

Promote every reached participant into the permanent holders' set before moving to the next timestamp. Components without an informed seed are discarded, so their meetings cannot wrongly carry the whisper into later moments.

**Complexity:** `O(m log m + n)` time and `O(n + m)` space, where `m = meetings.length`.
