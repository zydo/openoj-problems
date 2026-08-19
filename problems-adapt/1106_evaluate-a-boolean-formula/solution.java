import java.util.*;

class Solution {

    public boolean evaluateBooleanFormula(String formula) {
        return parse(formula, 0)[0] != 0;
    }

    private int[] parse(String formula, int index) {
        char ch = formula.charAt(index);
        if (ch == 't') {
            return new int[] { 1, index + 1 };
        }
        if (ch == 'f') {
            return new int[] { 0, index + 1 };
        }
        char op = ch;
        index += 2; // skip the operator and '('
        List<Integer> values = new ArrayList<>();
        while (true) {
            int[] result = parse(formula, index);
            values.add(result[0]);
            index = result[1];
            if (formula.charAt(index) == ',') {
                index += 1;
            } else {
                // ')'
                index += 1;
                break;
            }
        }
        if (op == '!') {
            return new int[] { values.get(0) == 1 ? 0 : 1, index };
        }
        if (op == '&') {
            for (int value : values) {
                if (value == 0) {
                    return new int[] { 0, index };
                }
            }
            return new int[] { 1, index };
        }
        for (int value : values) {
            if (value == 1) {
                return new int[] { 1, index };
            }
        }
        return new int[] { 0, index };
    }
}
