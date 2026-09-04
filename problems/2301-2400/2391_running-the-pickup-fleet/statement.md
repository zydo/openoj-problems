# Running the Pickup Fleet

## Description

Along one street stand the houses numbered from 0, and house `i` puts out
whatever waste `garbage[i]` holds — a string over the letters `'M'`,
`'P'`, and `'G'`, one letter per unit of metal, paper, or glass. Lifting
a single unit of any type onto a truck costs one minute.

Between neighboring houses the drive is not free either: crossing from
house `i` to house `i + 1` takes `travel[i]` minutes.

Three trucks make up the fleet, one dedicated to each waste type. Every
truck starts the morning at house 0 and works its way along the street in
order, lifting only its own type, and it may turn back once no house
further along still holds its type. The crews share a single loading
dock, so only one truck drives or lifts at any moment — the other two
wait.

Return the smallest total number of minutes in which the fleet can clear
every unit of waste.

### Example 1

```text
Input: garbage = ["MPG","M","PG"], travel = [1,2]
Output: 13
Explanation: The metal truck lifts 2 units and drives once (1 minute):
3 total. The paper truck lifts 2 units and drives to house 2 (3 minutes):
5 total. The glass truck lifts 2 units and also drives to house 2:
5 total. Summing 3 + 5 + 5 gives 13.
```

### Example 2

```text
Input: garbage = ["G","P"], travel = [5]
Output: 7
Explanation: The glass truck finishes at house 0 after lifting its one
unit. The paper truck lifts its unit at house 1 and spends 5 minutes
driving there, so 1 + 6 = 7.
```

### Example 3

```text
Input: garbage = ["PM","PPG","M","G"], travel = [3,1,4]
Output: 22
Explanation: Lifting all 7 units costs 7 minutes. Metal last appears at
house 2 (4 travel minutes), paper at house 1 (3), glass at house 3 (8):
7 + 4 + 3 + 8 = 22.
```

### Constraints

- `2 <= garbage.length <= 10⁵`
- `garbage[i]` contains only the characters `'M'`, `'P'`, and `'G'`.
- `1 <= garbage[i].length <= 10`
- `travel.length == garbage.length - 1`
- `1 <= travel[i] <= 100`

## Hints

### Hint 1

The trucks never get in each other's way cost-wise, so price each type's
route separately: one minute per unit lifted, plus the drive to the last
house where that type turns up.

### Hint 2

One sweep over the street records how many units sit at each house and
the furthest index reaching for each of `'M'`, `'P'`, `'G'`; fold in the
travel sums with a running prefix as you go.
