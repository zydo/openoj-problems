from typing import List, Optional


class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        diff = [0] * (n + 1)
        for first, last, seats in bookings:
            diff[first - 1] += seats
            diff[last] -= seats
        answer = []
        running = 0
        for i in range(n):
            running += diff[i]
            answer.append(running)
        return answer
