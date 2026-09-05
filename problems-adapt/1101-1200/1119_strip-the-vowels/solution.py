class Solution:
    def stripVowels(self, s: str) -> str:
        vowels = {"a", "e", "i", "o", "u"}
        return "".join(character for character in s if character not in vowels)
