class Solution {

    public int minNumberOperations(int[] target) {
        long ops = target[0];
        for (int i = 1; i < target.length; i++) {
            if (target[i] > target[i - 1]) {
                ops += target[i] - target[i - 1];
            }
        }
        return (int) ops;
    }
}
