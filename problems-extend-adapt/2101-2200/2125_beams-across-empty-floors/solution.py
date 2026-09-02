from typing import List


class Solution:
    def crossBeams(self, floors: List[str]) -> int:
        beams = 0
        previous = 0
        for row in floors:
            devices = row.count("1")
            if devices > 0:
                beams += previous * devices
                previous = devices
        return beams
