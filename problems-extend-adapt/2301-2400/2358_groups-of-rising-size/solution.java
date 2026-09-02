import java.util.*;

class Solution {

    public int risingGroupCount(int[] grades) {
        long doubled = 8L * grades.length + 1;
        int root = (int) Math.sqrt(doubled);
        while ((long) (root + 1) * (root + 1) <= doubled) {
            root++;
        }
        while ((long) root * root > doubled) {
            root--;
        }
        return (root - 1) / 2;
    }
}
