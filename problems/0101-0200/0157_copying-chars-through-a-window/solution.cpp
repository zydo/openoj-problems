class Solution {
  public:
    int read(CharSource &charSource, int n, std::vector<std::string> &buf) {
        int total = 0;
        std::vector<std::string> buf4(4);
        while (total < n) {
            int count = charSource.read4(buf4);
            if (count == 0) {
                break;
            }
            int take = std::min(count, n - total);
            for (int index = 0; index < take; ++index) {
                buf[total + index] = buf4[index];
            }
            total += take;
        }
        return total;
    }
};
