from collections import Counter


class Solution:
    def shortestCooldownSchedule(self, jobs: list[str], n: int) -> int:
        counts = Counter(jobs)
        max_freq = max(counts.values())
        # Labels tying the max each occupy one slot of the final partial run.
        num_max = sum(1 for v in counts.values() if v == max_freq)
        # The bottleneck letter frames (max_freq - 1) cycles of n + 1 plus the
        # final run; enough distinct jobs fill every gap, so never answer less
        # than the plain job count.
        return max(len(jobs), (max_freq - 1) * (n + 1) + num_max)
