class Solution {

    public int[] lampsStillLit(int[] lamps) {
        // Toggle a fixed table indexed by lamp number; a lamp ends on exactly when
        // it is toggled an odd number of times. Sweep indices 1..100 and collect
        // the on positions — ascending order for free.
        boolean[] on = new boolean[101];
        for (int value : lamps) {
            on[value] = !on[value];
        }
        int count = 0;
        for (int i = 1; i <= 100; i++) {
            if (on[i]) {
                count++;
            }
        }
        int[] result = new int[count];
        int index = 0;
        for (int i = 1; i <= 100; i++) {
            if (on[i]) {
                result[index++] = i;
            }
        }
        return result;
    }
}
