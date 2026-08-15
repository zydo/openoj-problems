class Solution {
  public:
    int minKBitFlips(vector<int> &nums, int k) {
        int n = nums.size();
        vector<int> hint(n, 0);
        int flips = 0;
        int flip = 0;
        for (int i = 0; i < n; i++) {
            flip ^= hint[i];
            if ((nums[i] ^ flip) == 0) {
                if (i + k > n) {
                    return -1;
                }
                flips += 1;
                flip ^= 1;
                if (i + k < n) {
                    hint[i + k] ^= 1;
                }
            }
        }
        return flips;
    }
};
