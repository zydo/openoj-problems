class Solution {

    public int finalTally(String[] tokens) {
        int value = 0;
        for (String operation : tokens) {
            value += operation.charAt(1) == '+' ? 1 : -1;
        }
        return value;
    }
}
