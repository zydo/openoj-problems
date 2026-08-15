import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public int[] smallestSufficientTeam(
        String[] req_skills,
        String[][] people
    ) {
        Map<String, Integer> skill_index = new HashMap<>();
        for (int i = 0; i < req_skills.length; i++) skill_index.put(
            req_skills[i],
            i
        );

        int np = people.length;
        int[] masks = new int[np];
        for (int i = 0; i < np; i++) {
            for (String skill : people[i])
                masks[i] |= 1 << skill_index.get(skill);
        }

        int full = (1 << req_skills.length) - 1;

        // LinkedHashMap mirrors Python's insertion-ordered dict (update keeps
        // the original position for existing keys, appends new keys).
        Map<Integer, List<Integer>> dp = new LinkedHashMap<>();
        dp.put(0, new ArrayList<>());

        for (int i = 0; i < np; i++) {
            List<Map.Entry<Integer, List<Integer>>> snapshot = new ArrayList<>(
                dp.entrySet()
            );
            Map<Integer, List<Integer>> newEntries = new LinkedHashMap<>();
            for (Map.Entry<Integer, List<Integer>> e : snapshot) {
                int newState = e.getKey() | masks[i];
                List<Integer> candidate = new ArrayList<>(e.getValue());
                candidate.add(i);
                List<Integer> cur = dp.get(newState);
                if (cur == null || cur.size() > candidate.size()) {
                    List<Integer> pending = newEntries.get(newState);
                    if (pending == null || pending.size() > candidate.size()) {
                        newEntries.put(newState, candidate);
                    }
                }
            }
            dp.putAll(newEntries);
        }

        List<Integer> team = dp.get(full);
        int[] res = new int[team.size()];
        for (int i = 0; i < team.size(); i++) res[i] = team.get(i);
        java.util.Arrays.sort(res);
        return res;
    }
}
