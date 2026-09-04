# Random Node from a List

## Description

A singly linked list holds one value per node. Build a sampler over it:
report the value of one node, with every node equally likely to be the one
reported, however many nodes share a value.

Implement the `Solution` class:

- `Solution(int[] head)` — prepare the sampler from the list's head.
- `int draw()` — report one node's value, chosen so that all nodes come up
  with equal probability.

Because the judge passes plain arrays, the list arrives in wire form as a
single argument: `head`, the node values in order. Position `i` of that
array _is_ the `i`-th node; there is nothing to chain up.

### How the draw is judged

A single random return value cannot be matched against a fixed expectation,
so the judge checks `draw` statistically. Each judged `draw` is repeated
about 25000 times: every reported value must be one of the list's values,
and the observed frequency of each value must stay within a tolerance band
of `count(value) / n`, its share of the nodes — a value sitting on three
nodes is three times as likely to come back as one sitting on a single node.
Any sampler that is uniform over nodes passes.

### Example 1

```text
Input:
["Solution", "draw", "draw", "draw", "draw", "draw"]
[[[4, 7, 12]], [], [], [], [], []]
Output: [null, 12, 4, 7, 7, 12]
Explanation:
Solution solution = new Solution([4, 7, 12]);
solution.draw();  // 12
solution.draw();  // 4
solution.draw();  // 7
solution.draw();  // 7
solution.draw();  // 12
// Any call reports 4, 7, or 12, each about a third of the time.
```

### Example 2

```text
Input:
["Solution", "draw", "draw"]
[[[5, 5, 5, 9, 9]], [], []]
Output: [null, 5, 9]
Explanation:
Solution solution = new Solution([5, 5, 5, 9, 9]);
solution.draw();  // 5 — three of the five nodes hold 5, so 5 comes up
                  // three times as often as 9
solution.draw();  // 9
```

### Constraints

- The list holds between `1` and `10⁴` nodes.
- `-10⁴ <= Node.val <= 10⁴`
- At most `10⁴` calls to `draw`.

### Follow-up

Suppose the list is unbounded and its length is unknowable in advance — a
stream you can walk once. Can you sample a node uniformly while carrying
only a couple of variables besides the candidate itself?

## Hints

### Hint 1

Uniformity over _nodes_ does not care how the nodes are wired together; a
walk that visits one node per step in a fixed order is interchangeable with
the sequence of values it visits. Reduce the problem to sampling one slot of
that sequence uniformly.

### Hint 2

With the sequence in hand, sampling a slot is one random integer: pick `i`
uniformly in `[0, n)` and report slot `i`. Materializing the sequence once,
at construction, turns each `draw` into constant work.

### Hint 3

The follow-up takes away both the known length and the stored copy. Walk the
stream one node at a time holding a single candidate: on reaching node `k`,
let it replace the candidate with probability exactly `1/k`. An induction
argument shows that after `n` nodes each one is the survivor with
probability `1/n` — two counters and one value of storage.
