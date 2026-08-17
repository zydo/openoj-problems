class MinStack {

    // Stack of (value, minimum-so-far) pairs — each entry is self-contained.
    private int[] values = new int[64];
    private int[] minimums = new int[64];
    private int size = 0;

    public MinStack() {}

    private void ensureCapacity() {
        if (size == values.length) {
            int grown = values.length * 2;
            int[] newValues = new int[grown];
            int[] newMinimums = new int[grown];
            System.arraycopy(values, 0, newValues, 0, size);
            System.arraycopy(minimums, 0, newMinimums, 0, size);
            values = newValues;
            minimums = newMinimums;
        }
    }

    public void push(int value) {
        ensureCapacity();
        values[size] = value;
        minimums[size] =
            size == 0 ? value : Math.min(value, minimums[size - 1]);
        size++;
    }

    public void pop() {
        size--;
    }

    public int top() {
        return values[size - 1];
    }

    public int getMin() {
        return minimums[size - 1];
    }
}
