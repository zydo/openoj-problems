import java.util.HashSet;
import java.util.Set;

class Solution {

    public boolean isHappy(int n) {
        Set<Integer> seen = new HashSet<>();
        while (n != 1 && seen.add(n)) {
            int total = 0;
            while (n != 0) {
                int digit = n % 10;
                total += digit * digit;
                n /= 10;
            }
            n = total;
        }
        return n == 1;
    }
}
