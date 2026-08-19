from typing import List, Optional


class Solution:
    def mostRequirementCapacityPairs(self, requirements: List[int], capacities: List[int]) -> int:
        requirements = sorted(requirements)
        capacities = sorted(capacities)
        # Greedy: pair the weakest unmatched requirement with the weakest
        # unmatched capacity — optimal by an exchange argument.
        i = 0
        j = 0
        matches = 0
        while i < len(requirements) and j < len(capacities):
            if requirements[i] <= capacities[j]:
                matches += 1
                i += 1
                j += 1
            else:
                # Capacity too weak for the weakest remaining requirement; requirements
                # only get stronger, so it is useless forever — skip it.
                j += 1
        return matches
