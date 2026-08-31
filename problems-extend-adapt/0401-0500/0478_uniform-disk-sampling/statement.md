# Uniform Disk Sampling

## Description

Generate random points uniformly inside a disk of known radius and center. A
point on the circumference counts as inside.

Implement the `RandomDiskSampler` class:

- `RandomDiskSampler(double radius, double xCenter, double yCenter)` fixes the
  disk.
- `double[] samplePoint()` returns one uniformly random `[x, y]` point in the
  disk.

Each call returns an independent sample; the judge compares the observed
distribution of `samplePoint` outputs against the disk's true area fractions
over the standard sampling grid.

### Example 1

```text
Input:
["RandomDiskSampler", "samplePoint", "samplePoint", "samplePoint"]
[[1.0, 0.0, 0.0], [], [], []]
Output: [null, [-0.02493, -0.38077], [0.82314, 0.38945], [0.36572, 0.17248]]
Explanation: Repeated calls scatter points across the disk; the returned
values above are three representative draws.
```

### Constraints

- `0 < radius <= 10⁸`
- `-10⁷ <= x_center, y_center <= 10⁷`
- At most `3 × 10⁴` calls are made to `samplePoint`.
