# Parking Space Allotter

## Description

A parking structure runs three lots — big, medium, and small — each with
a fixed number of spaces. Incoming cars ask for a spot in the lot that
matches their size, and are turned away when that lot is full.

Implement the `ParkingAllotter` class:

- `ParkingAllotter(int big, int medium, int small)` initializes the three
  lots with the given space counts.
- `boolean addCar(int carType)` admits a car of the given type — `1` for
  big, `2` for medium, `3` for small — into its matching lot and returns
  `true`, or returns `false` when that lot has no space left. A turned-
  away car does not consume anything.

### Example 1

```text
Input:
["ParkingAllotter","addCar","addCar","addCar","addCar","addCar","addCar","addCar","addCar","addCar"]
[[1,2,1],[1],[1],[2],[2],[2],[3],[3],[3]]
Output: [null,true,false,true,true,false,true,false,false]
Explanation: The big lot has one space — the first big car takes it and
the second is refused. The medium lot has two spaces — two medium cars
fit and the third is refused. The small lot has one space — one small
car fits and both later small cars are refused.
```

### Constraints

- `0 <= big, medium, small <= 1000`
- `carType` is `1`, `2`, or `3`.
- At most `1000` calls in total are made to `addCar`.

## Hints

### Hint 1

One counter per lot is the entire state; `addCar` just decrements its own
lot when the counter is positive.
