# Gated Climbs To The Shared Ancestor

## Description

A tree is rooted at node `0` and spans `n` nodes numbered `0` to `n - 1`;
`parent[i]` names the father of node `i`.

Every node `i` is fitted with `gates[i] = [redᵢ, blueᵢ, whiteᵢ]` — that many
red, blue, and white gates. A gate is operated with a card:

- a red gate accepts only a red card and leaves the card red;
- a blue gate accepts only a blue card and leaves the card blue;
- a white gate accepts either card and recolors it to the other color.

Two travelers, Alice and Bob, start at given nodes holding given cards
(1 = red, 0 = blue) and each must climb independently up to the lowest
common ancestor (LCA) of their two starting nodes.

One move takes a traveler from their current node `u` to `parent[u]`, and
works like this:

- The traveler picks exactly one specific gate instance at `u`; identical
  gates are separate objects, so `k` copies of a gate give `k` choices.
- Holding red, they may spend a red gate (stay red) or a white gate (turn
  blue). Holding blue, they may spend a blue gate (stay blue) or a white
  gate (turn red).
- If no gate at `u` accepts their card, they are stuck and the climb ends.

The queries array holds `queries[i] = [aNodeᵢ, aCardᵢ, bNodeᵢ, bCardᵢ]`:
Alice's start node and card, then Bob's. For each query, multiply the number
of distinct climbs Alice can take by the number for Bob — both modulo
`10⁹ + 7` — then XOR that product into a running answer. Return the running
answer after all queries.

Two climbs count as different when the multiset of gate instances either
traveler spends differs. A traveler who already starts at the query's LCA
has exactly 1 way.

### Example 1

```text
Input: n = 3, parent = [-1,0,0], gates = [[0,2,0],[1,1,0],[2,0,0]],
       queries = [[1,1,2,1],[1,0,2,0]]
Output: 2
Explanation:
    Both queries have LCA 0, and Bob always starts at 0 with 1 way.

    Query 0: Alice is red at node 1, whose gates are 1 red + 1 blue. Only
    the red gate fits, so 1 way. Bob is red at node 2, which holds 2 red
    gates, so 2 ways. Product 1 × 2 = 2.

    Query 1: Alice is blue at node 1 (1 way, the blue gate). Bob is blue at
    node 2, which has no blue or white gate at all — 0 ways. Product 0.

    XOR: 2 XOR 0 = 2.
```

### Example 2

```text
Input: n = 2, parent = [-1,0], gates = [[1,0,0],[0,0,3]],
       queries = [[1,0,0,1],[1,1,0,0]]
Output: 0
Explanation:
    The LCA is always 0 and Bob already stands there with 1 way. Node 1
    carries only 3 white gates, so Alice — red or blue — has exactly 3
    distinct choices at her only move. Both queries yield 3 × 1 = 3, and
    3 XOR 3 = 0.
```

### Example 3

```text
Input: n = 3, parent = [-1,0,1], gates = [[1,1,1],[0,0,2],[1,1,0]],
       queries = [[2,1,0,0]]
Output: 2
Explanation:
    Alice is red at node 2 and the LCA with Bob (at 0) is 0. At node 2 her
    red card must use the lone red gate: 1 way, still red. At node 1 only
    the 2 white gates fit a red card: 2 choices, arriving blue. So Alice
    has 1 × 2 = 2 climbs, Bob has 1, and the product 2 is the answer.
```

### Constraints

- `2 <= n <= 2 * 10⁴`
- `n == parent.length == gates.length`
- `parent[0] == -1`
- `0 <= parent[i] < n` for `i` in `[1, n - 1]`
- `gates[i] == [redᵢ, blueᵢ, whiteᵢ]`
- `0 <= redᵢ, blueᵢ, whiteᵢ <= 10`
- `1 <= queries.length <= 2 * 10⁴`
- `queries[i] = [aNodeᵢ, aCardᵢ, bNodeᵢ, bCardᵢ]`
- `0 <= aNodeᵢ, bNodeᵢ <= n - 1`
- `0 <= aCardᵢ, bCardᵢ <= 1`
- The input is generated such that the array `parent` represents a valid tree.

## Hints

### Hint 1

One node's card mechanics compress into a 2 x 2 matrix: staying gates sit on
the diagonal and white gates fill the off-diagonal.

### Hint 2

Preprocess ancestor jumps with binary lifting, carrying the product of the
jumped nodes' matrices alongside each jump.

### Hint 3

Per query, locate the LCA, multiply out both travelers' matrices up to it,
sum each traveler's two possible arrival colors, multiply the two sums mod
`10⁹ + 7`, and XOR the result into the total.
