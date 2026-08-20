from typing import List, Optional


class Solution:
    def countEmbeddedCandidates(self, text: str, candidates: List[str]) -> int:
        # Bucket each word by the next character it waits for: stream text
        # once and advance every word waiting on the arriving character.
        waiting = {}
        count = 0
        for w in candidates:
            # Empty candidates match trivially (defensive; constraints say
            # non-empty).
            if not w:
                count += 1
            else:
                waiting.setdefault(w[0], []).append((w, 1))
        for c in text:
            # Pop the bucket so re-filed entries are not reprocessed
            # within this step.
            its = waiting.pop(c, None)
            if not its:
                continue
            # The greedy subsequence check, distributed: a matched word
            # either completes or waits on its next character, and each
            # pointer only moves forward.
            for w, i in its:
                if i == len(w):
                    count += 1
                else:
                    waiting.setdefault(w[i], []).append((w, i + 1))
        return count
