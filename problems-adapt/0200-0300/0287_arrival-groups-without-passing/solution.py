from typing import List, Optional


class Solution:
    def countArrivalGroups(self, destination: int, starts: List[int], velocities: List[int]) -> int:
        # Cars cannot pass each other, so sweep from the car nearest
        # the destination backward.
        cars = sorted(zip(starts, velocities), reverse=True)
        fleets = 0
        last_time = 0.0
        for pos, spd in cars:
            # A car's fate is its alone-time to the destination.
            time = (destination - pos) / spd
            # Strictly later never catches the fleet ahead: a new
            # fleet lead. Otherwise it merges (equality at the destination
            # merges), and last_time — the current fleet's arrival
            # time — stays put.
            if time > last_time:
                fleets += 1
                last_time = time
        return fleets
