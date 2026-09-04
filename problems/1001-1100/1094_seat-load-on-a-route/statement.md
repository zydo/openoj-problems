# Seat Load on a Route

## Description

A vehicle with `capacity` seats drives along a straight route, never turning
back. You are given `groups`, where each element `groups[i] = [size, start, end]`
says that `size` passengers board at mark `start` and ride to mark `end`,
where they get off. Marks are counted in the direction of travel.

Return `true` if the vehicle can serve every listed group without the number
of passengers on board ever rising above `capacity`, and `false` otherwise.

Passengers getting off at a mark free their seats before anyone boards at
that same mark.

### Example 1

```text
Input: groups = [[3,0,4],[4,2,6]], capacity = 5
Output: false
Explanation: Between marks 2 and 4 both groups ride at once, so 7 seats
would be needed.
```

### Example 2

```text
Input: groups = [[4,1,3],[4,3,6]], capacity = 4
Output: true
Explanation: The first group steps off exactly at mark 3, freeing its seats
for the second group boarding there.
```

### Example 3

```text
Input: groups = [[1,0,5],[3,2,8],[1,6,9]], capacity = 4
Output: true
Explanation: From mark 2 to 5, and again from 6 to 8, exactly 4 passengers
ride together — the load touches the limit but never crosses it.
```

### Constraints

- `1 <= groups.length <= 1000`
- `groups[i].length == 3`
- `1 <= groups[i][0] <= 100`
- `0 <= start < end <= 1000`
- `1 <= capacity <= 10⁵`

## Hints

### Hint 1

Along the route the seat load only changes at boarding and alighting marks.
How many changes does one group contribute, and of what size?

### Hint 2

The marks run only from 0 to 1000, so a slot for every mark fits in memory.
Sum the changes in mark order and watch the running load.

### Hint 3

A group's alighting mark is where its negative change lands, so a seat freed
at a mark counts before any boarding recorded at that same mark.
