class Solution:
    def gentleDigitSteps(self, s: str) -> bool:
        return all(abs(int(a) - int(b)) <= 2 for a, b in zip(s, s[1:]))
