class Solution:
    def containsAnagram(self, pattern: str, text: str) -> bool:
        m, n = len(pattern), len(text)
        # No window of length m can exist inside a shorter text.
        if m > n:
            return False
        need = [0] * 26
        window = [0] * 26
        a = ord("a")
        for ch in pattern:
            need[ord(ch) - a] += 1
        for ch in text[:m]:
            window[ord(ch) - a] += 1
        # Matching frequency vectors means the window is a permutation of pattern.
        if window == need:
            return True
        for i in range(m, n):
            # Slide one position: add the entering char, drop the leaving one.
            window[ord(text[i]) - a] += 1
            left = ord(text[i - m]) - a
            window[left] -= 1
            if window == need:
                return True
        return False
