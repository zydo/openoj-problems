# Constant-Time Frequency Extremes

## Description

Maintain positive counters associated with lowercase string keys. Counters can
move up or down by one, and the structure must report a key at either current
frequency extreme.

Implement the `FrequencyExtremes` class:

- `FrequencyExtremes()` creates an empty structure.
- `void increase(String key)` adds a new key with count `1`, or raises its
  existing count by `1`.
- `void decrease(String key)` lowers an existing key's count by `1` and removes
  the key when the count reaches zero. The named key always exists.
- `String highestKey()` returns any key having the greatest count, or `""`
  when the structure is empty.
- `String lowestKey()` returns any key having the least count, or `""` when
  the structure is empty.

Every operation must take `O(1)` average time.

### Example 1

```text
Input:
["FrequencyExtremes", "increase", "increase", "increase", "highestKey", "lowestKey", "increase", "increase", "highestKey", "lowestKey"]
[[], ["red"], ["red"], ["blue"], [], [], ["blue"], ["blue"], [], []]
Output: [null, null, null, null, "red", "blue", null, null, "blue", "red"]
```

### Example 2

```text
Input:
["FrequencyExtremes", "increase", "increase", "decrease", "highestKey", "lowestKey", "decrease", "highestKey", "lowestKey"]
[[], ["ash"], ["ash"], ["ash"], [], [], ["ash"], [], []]
Output: [null, null, null, null, "ash", "ash", null, "", ""]
```

### Constraints

- `1 <= key.length <= 10`
- Each key contains only lowercase English letters.
- Every `decrease` call names a key currently in the structure.
- At most `5 * 10^4` operations are performed.

### Follow-up

How can unit-sized count changes be used to move keys only between adjacent
frequency groups?

## Hints

### Hint 1

Group all keys with equal counts into buckets ordered by their count.

### Hint 2

Thread the buckets in a doubly linked list and map each key directly to its
current bucket entry.

### Hint 3

Create a neighboring bucket only when needed and unlink it as soon as its last
key leaves. The list endpoints then always hold the two extremes.
