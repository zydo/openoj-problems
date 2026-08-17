from typing import List


class Solution:
    def employeeFreeTime(self, schedule: List[List[List[int]]]) -> List[List[int]]:
        intervals = sorted(interval for employee in schedule for interval in employee)
        free: List[List[int]] = []
        previous_end = None
        for start, end in intervals:
            if previous_end is not None and start > previous_end:
                free.append([previous_end, start])
            previous_end = end if previous_end is None else max(previous_end, end)
        return free
