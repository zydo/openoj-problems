class Solution {

    public boolean isRobotBounded(String instructions) {
        int x = 0,
            y = 0;
        int dx = 0,
            dy = 1; // north
        for (int i = 0; i < instructions.length(); i++) {
            char ch = instructions.charAt(i);
            if (ch == 'G') {
                x += dx;
                y += dy;
            } else if (ch == 'L') {
                int ndx = -dy,
                    ndy = dx;
                dx = ndx;
                dy = ndy;
            } else {
                // 'R'
                int ndx = dy,
                    ndy = -dx;
                dx = ndx;
                dy = ndy;
            }
        }
        return (x == 0 && y == 0) || !(dx == 0 && dy == 1);
    }
}
