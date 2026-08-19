from typing import List, Optional
from bisect import bisect_left


class Solution:
    def suggestWords(self, catalog: List[str], query: str) -> List[List[str]]:
        # lexicographic order makes every shared prefix a contiguous run
        catalog = sorted(catalog)
        result = []
        prefix = ""
        for ch in query:
            # grow the prefix one typed character at a time
            prefix += ch
            # lower bound: where the run of words >= prefix begins
            i = bisect_left(catalog, prefix)
            suggestions = []
            # first three of the run; stop at the first word not sharing the
            # prefix — the cost is independent of how many catalog match
            for word in catalog[i : i + 3]:
                if word.startswith(prefix):
                    suggestions.append(word)
                else:
                    break
            result.append(suggestions)
        return result
