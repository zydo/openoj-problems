import java.util.*;

class Solution {

    public int minOperations(int[] nums, int[] numsDivide) {
        int g = 0;
        for (int value : numsDivide) {
            g = gcd(g, value);
        }
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++) {
            if (g % nums[i] == 0) {
                return i;
            }
        }
        return -1;
    }

    private int gcd(int a, int b) {
        while (b != 0) {
            int t = a % b;
            a = b;
            b = t;
        }
        return a;
    }
}
