# Summarizing a Frequency Table

## Description

A huge sample of integers — every one between `0` and `255` — arrives
not as a list of values but as a frequency table: `count[k]` is how
many times the value `k` occurs in the sample.

Summarize the sample with five numbers:

- `minimum`: the smallest value that occurs;
- `maximum`: the largest value that occurs;
- `mean`: the total of all occurrences divided by how many there are;
- `median`: the middle value of the sorted sample; with an even number
  of occurrences, the average of the two middle values;
- `mode`: the value with the highest count, guaranteed unique.

Return the five statistics as an array of floating-point numbers
`[minimum, maximum, mean, median, mode]`. Anything within `10⁻⁵` of the
true answer is accepted.

### Example 1

```text
Input: count = [0,0,2,0,1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: [2.00000,7.00000,4.83333,5.50000,7.00000]
Explanation: The table describes the sample [2,2,4,7,7,7]. The
smallest and largest values are 2 and 7. The mean is
(2+2+4+7+7+7) / 6 = 29 / 6 = 4.8333. The sample size is even, so the
median averages the middle pair 4 and 7, giving 5.5. The mode is 7,
which occurs three times.
```

### Example 2

```text
Input: count = [0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: [1.00000,3.00000,2.33333,3.00000,3.00000]
Explanation: The table describes the sample [1,3,3]. The mean is
(1+3+3) / 3 = 7 / 3 = 2.3333. With an odd number of occurrences the
median is the single middle value, 3. That 3 is also the mode.
```

### Example 3

```text
Input: count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0]
Output: [250.00000,250.00000,250.00000,250.00000,250.00000]
Explanation: Every one of the four occurrences is 250, so all five
statistics collapse to 250.
```

### Constraints

- `count.length == 256`
- `0 <= count[i] <= 10⁹`
- `1 <= sum(count) <= 10⁹`
- The mode of the sample the table describes is unique.

## Hints

### Hint 1

Everything except the median falls out of one left-to-right walk over
the buckets: the first and last nonzero buckets are the minimum and
maximum, the deepest bucket is the mode, and the mean needs the total
occurrence count plus the weighted value sum — accumulate that sum in a
64-bit integer, since it can leave the 32-bit range.

### Hint 2

The median only asks for the k-th smallest occurrence. Walk the buckets
again, accumulating counts until the running total reaches `k`; call
that helper once for an odd-sized sample and twice for an even one.
