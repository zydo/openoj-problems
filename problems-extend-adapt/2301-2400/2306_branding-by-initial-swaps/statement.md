# Branding By Initial Swaps

## Description

You are given an array `ideas` of distinct lowercase names. To mint a company
name, pick two different names `a` and `b` from the list and exchange their
first letters. When neither of the two results already appears in `ideas`,
the selection succeeds and produces the company name formed by joining the
rewritten `a` and the rewritten `b` with a space, in that order.

Count how many distinct company names can be minted this way. The roles are
part of the output — picking `b` first yields the reversed concatenation — so
one unordered pair can produce up to two names, and an identical string is
only counted once.

### Example 1

```text
Input: ideas = ["tea","pie"]
Output: 2
Explanation: Both selections succeed:
- ("tea", "pie"): the swap forms "pea" and "tie", giving the name "pea tie".
- ("pie", "tea"): the same swap in the other role order gives "tie pea".
Neither result existed in the original list, so the answer is 2.
```

### Example 2

```text
Input: ideas = ["car","cot","cat"]
Output: 0
Explanation: Every pair shares its first letter, so each swap reproduces the
two original names unchanged — and those already exist. No selection
succeeds, so the answer is 0.
```

### Example 3

```text
Input: ideas = ["apple","apply","banana"]
Output: 4
Explanation: "apple" and "apply" share their first letter and cannot pair.
"banana" pairs with either of them: the swaps form "bpple" and "aanana", or
"bpply" and "aanana", none of which existed before. The four successful role
orders yield "bpple aanana", "aanana bpple", "bpply aanana", and
"aanana bpply", so the answer is 4.
```

### Constraints

- `2 <= ideas.length <= 5 * 10⁴`
- `1 <= ideas[i].length <= 10`
- Every name is lowercase English letters.
- All names in `ideas` are distinct.

## Hints

### Hint 1

Two names that begin with the same letter can never pair — trading initials
between them reproduces both originals. What does that suggest about how to
group the names?

### Hint 2

Group the names by first letter and keep each group's suffixes — the words
left over once that initial is chopped off.

### Hint 3

For two initials `a` and `b`, a crossing pair survives exactly when `a`'s
suffix set and `b`'s suffix set reject each other's members.

### Hint 4

Once the overlap of two suffix sets is known, inclusion-exclusion sizes the
survivors: each side contributes its size minus the shared count, and both
role orders count.
