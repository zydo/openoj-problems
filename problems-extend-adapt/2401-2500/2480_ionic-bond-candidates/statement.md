# Ionic Bond Candidates

## Description

Table: `Atoms`

| Column    | Type    |
| --------- | ------- |
| symbol    | varchar |
| category  | varchar |
| electrons | int     |

`symbol` is the primary key. `category` is one of `('Metal', 'Nonmetal',
'Noble')`; `electrons` holds the element's atomic number.

Two distinct elements can form an ionic bond when one is a `Metal` and the
other is a `Nonmetal`. Report every such pair: two columns `metal` and
`nonmetal` holding the two symbols. The answer may list the pairs in any
order.

Each test case supplies its own `dataset`: the DDL seeds the `Atoms` table
with that test case's rows. The result format is shown in the following
example.

### Example 1

```text
Input: the Atoms table from the dataset below.
Atoms rows:
symbol | category  | electrons
H      | Nonmetal  | 1
He     | Noble     | 2
Na     | Metal     | 1
Mg     | Metal     | 2
Al     | Metal     | 3
Cl     | Nonmetal  | 1
O      | Nonmetal  | 2
Ar     | Noble     | 3
Output:
metal | nonmetal
Na    | Cl
Na    | H
Na    | O
Mg    | Cl
Mg    | H
Mg    | O
Al    | Cl
Al    | H
Al    | O
Explanation: Every Metal (Na, Mg, Al) pairs with every Nonmetal (H, Cl, O), for nine candidate bonds; the Noble gases are excluded.
```

Answer with a single `SELECT`.

## Hints

### Hint 1

Read the table twice under two aliases and join them on the type test — one
copy restricted to `Metal`, the other to `Nonmetal`.

### Hint 2

The two predicates are independent, so the join is the full cross product of
the Metals with the Nonmetals; no `ORDER BY` is needed because the row set is
judged order-insensitively.
