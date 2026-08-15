class Solution {
  public:
    vector<int> corpFlightBookings(vector<vector<int>> &bookings, int n) {
        vector<int> diff(n + 1, 0);
        for (const auto &b : bookings) {
            diff[b[0] - 1] += b[2];
            diff[b[1]] -= b[2];
        }
        vector<int> answer;
        answer.reserve(n);
        int running = 0;
        for (int i = 0; i < n; i++) {
            running += diff[i];
            answer.push_back(running);
        }
        return answer;
    }
};
