# Solutions — Find All People With Secret

## Process one timestamp graph at a time

Sort meetings by time. For every equal-time group, build a temporary undirected graph among its participants and start a breadth-first search from every participant who knew the secret before that time. Because sharing is instantaneous, the search reaches exactly the entire connected components that contain an informed person.

Promote every reached participant into the permanent informed set before moving to the next timestamp. Components without an informed seed are discarded, so their meetings cannot incorrectly carry knowledge into later times.

**Complexity:** `O(m log m + n)` time and `O(n + m)` space, where `m = meetings.length`.
