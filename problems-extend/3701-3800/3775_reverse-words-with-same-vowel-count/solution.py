class Solution:
    def reverseWords(self, s: str) -> str:
        # The first word fixes the target vowel count; every later word
        # sharing it is reversed, the rest pass through untouched.
        words = s.split()
        target = sum(c in "aeiou" for c in words[0])
        out = [words[0]]
        for w in words[1:]:
            if sum(c in "aeiou" for c in w) == target:
                out.append(w[::-1])
            else:
                out.append(w)
        return " ".join(out)
