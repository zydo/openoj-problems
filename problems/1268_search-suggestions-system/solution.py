from typing import List, Optional
from bisect import bisect_left


class Solution:
    def suggestedProducts(
        self, products: List[str], searchWord: str
    ) -> List[List[str]]:
        products = sorted(products)
        result = []
        prefix = ""
        for ch in searchWord:
            prefix += ch
            i = bisect_left(products, prefix)
            suggestions = []
            for word in products[i : i + 3]:
                if word.startswith(prefix):
                    suggestions.append(word)
                else:
                    break
            result.append(suggestions)
        return result
