class Solution {

    public int twoEggDrop(int n) {
        int cover = 0,
            moves = 0;
        while (cover < n) {
            moves++;
            cover += moves;
        }
        return moves;
    }
}
