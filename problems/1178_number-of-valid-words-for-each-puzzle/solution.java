import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public int[] findNumOfValidWords(String[] words, String[] puzzles) {
        Map<Integer, Integer> counts = new HashMap<>();
        for (String w : words) {
            int m = 0;
            for (int t = 0; t < w.length(); t++) m |= 1 << (w.charAt(t) - 'a');
            counts.merge(m, 1, Integer::sum);
        }

        int[] answer = new int[puzzles.length];
        for (int p = 0; p < puzzles.length; p++) {
            String puzzle = puzzles[p];
            int first = 1 << (puzzle.charAt(0) - 'a');
            int puzzleMask = 0;
            for (int t = 0; t < puzzle.length(); t++) puzzleMask |=
                1 << (puzzle.charAt(t) - 'a');
            int total = 0;
            int sub = puzzleMask;
            while (sub != 0) {
                if ((sub & first) != 0) {
                    Integer c = counts.get(sub);
                    if (c != null) total += c;
                }
                sub = (sub - 1) & puzzleMask;
            }
            answer[p] = total;
        }
        return answer;
    }
}
