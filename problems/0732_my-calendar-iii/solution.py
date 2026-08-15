class MyCalendarThree:
    def __init__(self) -> None:
        self.delta = {}

    def book(self, startTime: int, endTime: int) -> int:
        self.delta[startTime] = self.delta.get(startTime, 0) + 1
        self.delta[endTime] = self.delta.get(endTime, 0) - 1
        best = 0
        active = 0
        for time in sorted(self.delta):
            active += self.delta[time]
            if active > best:
                best = active
        return best
