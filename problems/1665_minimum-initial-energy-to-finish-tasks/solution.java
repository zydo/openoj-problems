import java.util.Arrays;
import java.util.Comparator;

class Solution {

    public long minimumEffort(int[][] tasks) {
        Arrays.sort(tasks, (a, b) -> Integer.compare(b[1] - b[0], a[1] - a[0]));
        long spent = 0;
        long answer = 0;
        for (int[] task : tasks) {
            int actual = task[0];
            int minimum = task[1];
            answer = Math.max(answer, spent + minimum);
            spent += actual;
        }
        return answer;
    }
}
