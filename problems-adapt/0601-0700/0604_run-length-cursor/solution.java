class RunLengthCursor {

    // A lazy single-segment cursor over the compressed string: the
    // iterator never expands anything, it holds the current segment's
    // letter, how many copies of it are still unspent, and a parse
    // position. nextChar() spends one copy and re-parses the nextChar
    // letter-and-count only when the current one runs out; counts are
    // read as long since a single segment may repeat a letter 10^9 times.
    private final String s;
    private int i = 0;
    private char ch = ' ';
    private long count = 0;

    public RunLengthCursor(String compressedString) {
        s = compressedString;
    }

    // Load the nextChar segment: one letter, then its run of digits.
    private void advance() {
        if (i < s.length()) {
            ch = s.charAt(i++);
            long parsed = 0;
            while (i < s.length() && Character.isDigit(s.charAt(i))) {
                parsed = parsed * 10 + (s.charAt(i) - '0');
                ++i;
            }
            count = parsed;
        }
    }

    public String nextChar() {
        if (count == 0) {
            advance();
        }
        if (count == 0) {
            // The parse position reached the end: exhausted for good.
            return " ";
        }
        --count;
        return String.valueOf(ch);
    }

    public boolean hasMore() {
        // More to give whenever the current count is positive or an
        // unparsed segment remains (every segment's count is at least 1).
        return count > 0 || i < s.length();
    }
}
