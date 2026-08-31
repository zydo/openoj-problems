# Large Countries

## Description

Table: `Countries`

| Column Name | Type    |
| ----------- | ------- |
| name        | varchar |
| continent   | varchar |
| area        | int     |
| population  | int     |
| gdp         | bigint  |

`name` is the primary key. Each row describes one country: its name,
continent, area in square kilometres, population, and gdp.

A country is large when its area is at least `3000000` or its population is
at least `25000000` — either bar alone suffices.

Report each large country's `name`, `population`, and `area`, in any order.

Each test case supplies its own `dataset`: the DDL seeds the `Countries`
table with that test case's rows. The result format is shown in the
following example.

### Example 1

```text
Input: the Countries table from the dataset below.
Countries rows:
name    | continent | area     | population | gdp
Avalon  | North     | 2900000  | 26000000   | 900000000
Boreas  | South     | 5000000  | 15000000   | 400000000
Cymru   | West      | 800000   | 2000000    | 50000000
Output:
name    | population | area
Avalon  | 26000000   | 2900000
Boreas  | 15000000   | 5000000
Explanation: Avalon clears the population bar and Boreas the area bar;
Cymru clears neither.
```

Answer with a single `SELECT` whose output columns are `name`, `population`,
and `area`, in that order.

## Hints

### Hint 1

Large is a disjunction: `WHERE area >= 3000000 OR population >= 25000000`
keeps a country that clears either bar.

### Hint 2

Both bounds are inclusive, and joining the branches with `AND` would silently
drop every country that is large on only one measure.
