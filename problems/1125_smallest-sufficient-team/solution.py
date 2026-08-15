from typing import List, Optional


class Solution:
    def smallestSufficientTeam(
        self, req_skills: List[str], people: List[List[str]]
    ) -> List[int]:
        skill_index = {skill: i for i, skill in enumerate(req_skills)}
        masks = []
        for skills in people:
            mask = 0
            for skill in skills:
                mask |= 1 << skill_index[skill]
            masks.append(mask)

        full = (1 << len(req_skills)) - 1
        dp = {0: []}
        for i, person_mask in enumerate(masks):
            new_entries = {}
            for state, team in list(dp.items()):
                new_state = state | person_mask
                candidate = team + [i]
                if new_state not in dp or len(dp[new_state]) > len(candidate):
                    if new_state not in new_entries or len(
                        new_entries[new_state]
                    ) > len(candidate):
                        new_entries[new_state] = candidate
            dp.update(new_entries)

        return sorted(dp[full])
