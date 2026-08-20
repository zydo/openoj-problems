import heapq


class Solution:
    def mostCoursesBeforeDeadlines(self, courses: list[list[int]]) -> int:
        total = 0
        heap: list[int] = []  # max-heap via negated durations
        for duration, last_day in sorted(courses, key=lambda course: course[1]):
            if total + duration <= last_day:
                total += duration
                heapq.heappush(heap, -duration)
            elif heap and -heap[0] > duration:
                total += duration + heap[0]  # heap[0] is negative
                heapq.heapreplace(heap, -duration)
        return len(heap)
