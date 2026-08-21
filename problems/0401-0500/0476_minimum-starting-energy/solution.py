class Solution:
    def minimumEnergy(self, tasks: list[list[int]]) -> int:
        # Order by slack (minimum - actual) descending: a high-slack task
        # done early banks its surplus while the budget is still high —
        # exchange arguments show an adjacent inversion never helps.
        tasks = sorted(tasks, key=lambda t: t[1] - t[0], reverse=True)
        spent = 0
        answer = 0
        for actual, minimum in tasks:
            # Each task needs current energy >= its minimum, so the answer is
            # the largest prefix requirement; only `actual` is consumed.
            answer = max(answer, spent + minimum)
            spent += actual
        return answer
