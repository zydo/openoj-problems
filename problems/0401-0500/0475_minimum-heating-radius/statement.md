# Minimum Heating Radius

## Description

A standard heater keeps every house warm once the house lies within the
heater's radius. All heaters on the line share the same radius.

The arrays `houses` and `heaters` give the positions of houses and heaters on
a horizontal line. Return the smallest radius that lets every house be warmed
by at least one heater.

### Example 1

```text
Input: houses = [1,2,3,4,5], heaters = [2,4]
Output: 1
Explanation: Every house is within distance 1 of a heater: houses 1-3 near
the heater at 2, and houses 4-5 near the heater at 4.
```

### Example 2

```text
Input: houses = [1,10], heaters = [3,6]
Output: 4
Explanation: The house at 1 must be reached from the heater at 3, needing
radius 4; the house at 10 needs radius 4 from the heater at 6 as well.
```

### Example 3

```text
Input: houses = [3,7], heaters = [1,10]
Output: 3
```

### Constraints

- `1 <= houses.length, heaters.length <= 3 * 10⁴`
- `1 <= houses[i], heaters[i] <= 10⁹`
