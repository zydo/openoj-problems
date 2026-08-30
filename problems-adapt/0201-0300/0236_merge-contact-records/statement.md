# Merge Contact Records

## Description

Every entry of `records` is a list of strings whose position `0` holds a
person's name and whose remaining positions hold email addresses that person
has used. The same person may be written down several times, and two different
people may well go by the same name, so the name identifies nobody.

An address does identify someone: whenever one address turns up in two entries,
those entries are the same person. The relation carries along chains — entries
linked through a series of shared addresses all describe one person.

Return one list per person. Each starts with that person's name and continues
with all of their addresses, with repeats removed and the rest in ascending
order. Because the judge compares the answer position by position, the lists
themselves also come back in a settled order: read the input entry by entry
and, inside an entry, address by address, and give each person the slot where
the first of their addresses turned up.

### Example 1

```text
Input: records = [["Ada","ada@x.io","ada.k@x.io"],["Ada","ada.k@x.io","ada99@x.io"],["Ravi","ravi@x.io"],["Ada","other.ada@x.io"]]
Output: [["Ada","ada.k@x.io","ada99@x.io","ada@x.io"],["Ravi","ravi@x.io"],["Ada","other.ada@x.io"]]
Explanation: Entries 0 and 1 both list ada.k@x.io, so they are one person with
three addresses. Ravi shares nothing. The last entry names an Ada too, but no
address of hers was seen before, so she is somebody else.
```

### Example 2

```text
Input: records = [["Lee","p@q.co","r@q.co"],["Lee","s@q.co"],["Lee","r@q.co","s@q.co"]]
Output: [["Lee","p@q.co","r@q.co","s@q.co"]]
Explanation: The first two entries have nothing in common, but the third one
touches both, which chains all three into a single person.
```

### Example 3

```text
Input: records = [["Sam","sam2@z.dev"],["Sam","sam1@z.dev"]]
Output: [["Sam","sam2@z.dev"],["Sam","sam1@z.dev"]]
Explanation: Two people, one name. The output keeps the order in which they
were introduced, which here is not alphabetical.
```

### Constraints

- `1 <= records.length <= 1000`
- `2 <= records[i].length <= 10`
- `1 <= records[i][j].length <= 30`
- `records[i][0]` is made of English letters
- every string after the first in `records[i]` is a valid email address

## Hints

### Hint 1

Group the addresses, not the entries. Two addresses written down together are
bound to each other, and that binding spreads from address to address until
whole clusters form. Clusters are what the answer reports.

### Hint 2

A disjoint-set structure keyed by the address string does the binding in one
pass: within an entry, attach every address to the first one, which fuses that
entry's cluster with whichever clusters those addresses already sat in.

### Hint 3

Alongside each cluster keep a name: a merged record carries the name of the
most recently read account that joins it, so the name updates on every
union. Then a second pass in reading order both fixes the output order and
collects each cluster's addresses for sorting.
