from typing import List, Optional


class Solution:
    def rand10(self, rand7_outputs: List[int]) -> int:
        index = 0
        while True:
            a = rand7_outputs[index]
            b = rand7_outputs[index + 1]
            index += 2
            idx = (a - 1) * 7 + b
            if idx <= 40:
                return (idx - 1) % 10 + 1
