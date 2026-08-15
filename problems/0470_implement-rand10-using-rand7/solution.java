class Solution {

    public int rand10(int[] rand7_outputs) {
        int index = 0;
        while (true) {
            int a = rand7_outputs[index];
            int b = rand7_outputs[index + 1];
            index += 2;
            int idx = (a - 1) * 7 + b;
            if (idx <= 40) {
                return ((idx - 1) % 10) + 1;
            }
        }
    }
}
