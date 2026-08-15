class Solution {
  public:
    bool isRobotBounded(string instructions) {
        int x = 0, y = 0;
        int dx = 0, dy = 1; // north
        for (char ch : instructions) {
            if (ch == 'G') {
                x += dx;
                y += dy;
            } else if (ch == 'L') {
                int ndx = -dy, ndy = dx;
                dx = ndx;
                dy = ndy;
            } else { // 'R'
                int ndx = dy, ndy = -dx;
                dx = ndx;
                dy = ndy;
            }
        }
        return (x == 0 && y == 0) || !(dx == 0 && dy == 1);
    }
};
