class Solution:
    def fewestToggles(self, start: int, goal: int) -> int:
        return bin(start ^ goal).count("1")
