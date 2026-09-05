# Truck Range On Two Tanks

## Description

A delivery truck draws fuel from two tanks: its main tank holds
`mainTank` liters and its additional tank holds `additionalTank`
liters. The truck burns fuel at 10 km per liter, always out of the
main tank.

Each time the main tank finishes consuming 5 liters, 1 liter is
transferred from the additional tank into the main tank on the spot,
provided the additional tank still holds at least 1 liter. The
transfer is a single jump, not a trickle — it lands exactly when the
fifth liter of a stretch is used up.

Return the greatest total distance the truck can cover.

### Example 1

```text
Input: mainTank = 9, additionalTank = 3
Output: 110
Explanation: The first 5 liters cover 50 km and pull 1 liter over,
leaving 5 liters in the main tank. Those 5 cover another 50 km and
pull a second liter over, leaving 1 liter. The last liter covers
10 km, for a total of 110 km.
```

### Example 2

```text
Input: mainTank = 4, additionalTank = 5
Output: 40
Explanation: The main tank never gets through 5 liters, so no fuel is
ever transferred and the truck stops after 40 km despite the full
additional tank.
```

### Example 3

```text
Input: mainTank = 13, additionalTank = 4
Output: 160
Explanation: Three stretches of 5 liters each are burned — 150 km —
and each one pulls a liter across. The leftover liter covers 10 km
more, so the truck travels 160 km.
```

### Constraints

- `1 <= mainTank, additionalTank <= 100`

## Hints

### Hint 1

Drive the main tank in blocks of five: every full block is worth
50 km and, when the additional tank is not empty, pulls exactly one
liter across.

### Hint 2

Whatever remains below five liters at the end can never reach another
transfer point — add its 10 km per liter and stop.
