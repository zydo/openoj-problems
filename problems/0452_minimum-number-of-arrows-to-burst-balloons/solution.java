import java.util.Arrays;

class Solution {

    public int findMinArrowShots(int[][] points) {
        Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));
        int arrows = 0;
        long lastArrow = Long.MIN_VALUE;
        for (int[] point : points) {
            if (point[0] > lastArrow) {
                arrows++;
                lastArrow = point[1];
            }
        }
        return arrows;
    }
}
