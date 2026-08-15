import java.util.ArrayList;
import java.util.List;

class Solution {

    public int[][] combinationSum(int[] candidates, int target) {
        List<List<Integer>> results = new ArrayList<>();
        backtrack(candidates, 0, target, new ArrayList<>(), results);
        int[][] out = new int[results.size()][];
        for (int i = 0; i < results.size(); i++) {
            List<Integer> comb = results.get(i);
            int[] arr = new int[comb.size()];
            for (int j = 0; j < comb.size(); j++) {
                arr[j] = comb.get(j);
            }
            out[i] = arr;
        }
        return out;
    }

    private void backtrack(
        int[] candidates,
        int start,
        int remaining,
        List<Integer> path,
        List<List<Integer>> results
    ) {
        if (remaining == 0) {
            results.add(new ArrayList<>(path));
            return;
        }
        for (int i = start; i < candidates.length; i++) {
            int value = candidates[i];
            if (value > remaining) continue;
            path.add(value);
            backtrack(candidates, i, remaining - value, path, results);
            path.remove(path.size() - 1);
        }
    }
}
