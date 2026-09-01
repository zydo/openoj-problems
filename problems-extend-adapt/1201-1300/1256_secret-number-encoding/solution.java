class Solution {

    public String secretEncoding(int num) {
        // num + 1 in binary, minus its leading 1.
        return Integer.toBinaryString(num + 1).substring(1);
    }
}
