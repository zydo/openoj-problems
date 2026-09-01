# The Line Of Succession

## Description

A realm tracks its line of succession. The founder starts the line; every
child born to a member is appended immediately after that member's whole
subtree, so each family branch stays contiguous. When a member dies they
are skipped in the order, but their position (and their descendants')
still shapes what follows.

Implement the `SuccessionOrder` class:

- `SuccessionOrder(string kingName)` initializes the realm with the
  founder as the first member.
- `void birth(string parentName, string childName)` announces that a
  child was born to `parentName`.
- `void death(string name)` records that member `name` died; the name
  stays in the family tree but is skipped by the order.
- `string[] getInheritanceOrder()` returns the current succession order —
  the pre-order traversal of the family tree with dead members removed.

### Example 1

```text
Input:
["SuccessionOrder","birth","birth","birth","getInheritanceOrder","death","getInheritanceOrder"]
[["aria"],["aria","ben"],["aria","cara"],["ben","dina"],[],["cara"],[]]
Output: [null,null,null,null,["aria","ben","dina","cara"],null,["aria","ben","dina"]]
Explanation: The tree is aria → (ben → dina, cara). The pre-order walk
visits aria, ben, ben's subtree (dina), then cara. After cara dies the
walk skips her name but keeps her position — the order now ends at dina.
```

### Constraints

- `1 <= kingName.length <= 10`
- `1 <= childName.length, parentName.length, name.length <= 10`
- All names consist of lowercase English letters and are unique.
- At most `10⁵` calls are made in total to `birth`, `death`, and
  `getInheritanceOrder`.

## Hints

### Hint 1

Model the family as a general tree: each member holds their children in
birth order.

### Hint 2

A pre-order walk emits every member's subtree contiguously — exactly the
"child right after the parent's branch" rule. Keep a set of dead names
and filter during the walk.
