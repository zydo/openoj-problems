class Solution {

    public int[] corpFlightBookings(int[][] bookings, int n) {
        int[] diff = new int[n + 1];
        for (int[] b : bookings) {
            diff[b[0] - 1] += b[2];
            diff[b[1]] -= b[2];
        }
        int[] answer = new int[n];
        int running = 0;
        for (int i = 0; i < n; i++) {
            running += diff[i];
            answer[i] = running;
        }
        return answer;
    }
}
