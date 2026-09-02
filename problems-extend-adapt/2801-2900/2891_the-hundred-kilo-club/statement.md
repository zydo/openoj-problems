# The Hundred-Kilo Club

## Description

Table: `Menagerie`

| Column Name    | Type    |
| -------------- | ------- |
| animal_name    | varchar |
| animal_species | varchar |
| age_years      | int     |
| weight_kg      | int     |

Each row of this table is one animal in the menagerie: its name, its
species, its age in years, and its weight in kilograms.

Write a query that lists the names of the animals weighing strictly
more than 100 kilograms, heaviest first.

Each testcase supplies its own `dataset`: the script seeds the
`Menagerie` table with that testcase's rows before your query runs.
Weights within a dataset are distinct, so the required descending
order is unique.

The result format is in the following example.

### Example 1

```text
Input:
Menagerie table:
+-------------+----------------+-----------+-----------+
| animal_name | animal_species | age_years | weight_kg |
+-------------+----------------+-----------+-----------+
| Dune        | Camel          | 7         | 480       |
| Bramble     | Boar           | 4         | 120       |
| Ember       | Owl            | 3         | 100       |
| Cinder      | Fox            | 2         | 9         |
| Ash         | Pony           | 5         | 245       |
+-------------+----------------+-----------+-----------+
Output:
+-------------+
| animal_name |
+-------------+
| Dune        |
| Ash         |
| Bramble     |
+-------------+
Explanation:
Dune weighs 480 kg, Ash 245 kg, and Bramble 120 kg, so the three join
the list, heaviest first. Ember weighs exactly 100 kg and is excluded —
the bar is strictly more than 100 — and Cinder's 9 kg is far below it.
```

Write your solution as a single `SELECT` query returning exactly one
column, `animal_name`, holding the names of the animals whose
`weight_kg` is strictly greater than 100 — an animal weighing exactly
100 is excluded — ordered by `weight_kg` from heaviest to lightest.

## Hints

### Hint 1

The whole task is two clauses of one `SELECT`: `WHERE weight_kg > 100`
keeps exactly the qualifying rows — the comparison is strict, so 100
itself does not qualify — and `ORDER BY weight_kg DESC` lines the
survivors up from heaviest to lightest.
