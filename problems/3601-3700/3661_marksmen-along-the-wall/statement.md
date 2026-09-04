# Marksmen Along The Wall

## Description

A straight line stretches out forever, dotted with robot marksmen and a
scattering of walls. You are given integer arrays `robots`, `distance`,
and `walls`:

- `robots[i]` is the position of the `i`-th robot.
- `distance[i]` is how far, in meters, that robot's single bullet can fly.
- `walls[j]` is the position of the `j`-th wall.

Each robot carries exactly one bullet and picks a direction, left or
right. The bullet flies straight and knocks down every wall it crosses
that lies within `distance[i]` meters of its shooter — but the other
robots stand in the way: the moment a bullet reaches a different robot, it
stops right there, and nothing at that robot's position or beyond falls to
it. One exception: a wall that shares its position with a robot is only
ever threatened by that robot itself, whose shot begins right on top of
the wall, so no neighbor's bullet can be blocked short of it.

Return the largest number of distinct walls the robots can bring down
together.

### Example 1

```text
Input: robots = [7], distance = [4], walls = [3,6,12]
Output: 2
Explanation: The lone robot fires left, covering positions 3 through 7,
and the walls at 3 and 6 come down. Firing right would reach only up to
11, still short of the wall at 12.
```

### Example 2

```text
Input: robots = [3,9,14], distance = [2,4,1], walls = [1,4,8,12,15]
Output: 3
Explanation: A best salvo: the robot at 3 fires left taking the wall at 1,
the robot at 9 fires left taking the wall at 8, and the robot at 14 fires
right taking the wall at 15. No assignment of directions beats three.
```

### Example 3

```text
Input: robots = [5,6], distance = [10,10], walls = [100]
Output: 0
Explanation: The wall is far to the right. The robot at 5 cannot fire
right past the robot at 6 — its bullet stops there — and the wall is out
of reach for the robot at 6 as well.
```

### Constraints

- `1 <= robots.length == distance.length <= 10⁵`
- `1 <= walls.length <= 10⁵`
- `1 <= robots[i], walls[j] <= 10⁹`
- `1 <= distance[i] <= 10⁵`
- All values in `robots` are unique.
- All values in `walls` are unique.

## Hints

### Hint 1

Sort both the robots by position and the walls by position; in that order
every question of the form "which walls can this shot reach?" becomes a
count over a contiguous slice.

### Hint 2

No bullet ever passes a neighbor. Shot leftward, a robot's bullet halts at
the previous robot; shot rightward, at the next one — each direction gets
clipped into one candidate interval.

### Hint 3

Two binary searches, one at each end of an interval, count the walls
inside it.

### Hint 4

Sweep the sorted robots while carrying the best running total for each
direction the previous robot could have fired. When adjacent robots fire
toward each other, the walls both bullets reach in the gap between them
belong in the total only once.
