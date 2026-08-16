# Solutions — Linked List Cycle

## Wire-Form Reconstruction plus Floyd's Cycle Detection

The judge hands the list over in wire form — `values` plus the tail's back-edge index `pos` — so the first step materializes it: create one node per value, link them in order, and, when pos is not -1, point the tail back to the node at index pos. An empty `values` array is acyclic by convention and returns False immediately.

Detection is Floyd's tortoise and hare. Both pointers start at the head; slow advances one node per step and fast two. If fast ever runs past the end of the list — itself null or its successor null — the list terminates and there is no cycle. Otherwise both pointers are trapped inside the loop, and because fast gains one node per step on slow around the cycle, it must catch slow within a single lap; their meeting is the proof of a cycle.

The reconstruction necessarily holds every node, which is O(n) storage forced by the input format, but the detection itself keeps only two pointers — the O(1) memory the follow-up asks for, where a visited-node set would cost O(n). The whole function is linear: the build pass plus at most about 2n pointer advances before fast exits or the meeting happens.

**Complexity:** `O(n)` time, `O(n)` space.
