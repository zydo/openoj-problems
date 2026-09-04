// A lazy single-segment cursor over the compressed string: the iterator
// never expands anything, it holds the current segment's letter, how many
// copies of it are still unspent, and a parse position. nextChar() spends one
// copy and re-parses the nextChar letter-and-count only when the current one
// runs out; counts are read as Numbers since a single segment may repeat
// a letter 10^9 times.
//
// `export` scopes this file as a module: the judge's TypeScript wrapper
// compiles with --lib ES2022,DOM, whose lib.es2015.iterable declares a
// generic interface RunLengthCursor<T> that a top-level non-generic class
// of the same name collides with (TS2428).
export class RunLengthCursor {
    private s: string;
    private i = 0;
    private ch = " ";
    private count = 0;

    constructor(compressedString: string) {
        this.s = compressedString;
    }

    // Load the nextChar segment: one letter, then its run of digits.
    private advance(): void {
        if (this.i < this.s.length) {
            this.ch = this.s[this.i];
            this.i++;
            let parsed = 0;
            while (this.i < this.s.length && this.s[this.i] >= "0" && this.s[this.i] <= "9") {
                parsed = parsed * 10 + (this.s.charCodeAt(this.i) - 48);
                this.i++;
            }
            this.count = parsed;
        }
    }

    nextChar(): string {
        if (this.count === 0) {
            this.advance();
        }
        if (this.count === 0) {
            // The parse position reached the end: exhausted for good.
            return " ";
        }
        this.count--;
        return this.ch;
    }

    hasMore(): boolean {
        // More to give whenever the current count is positive or an
        // unparsed segment remains (every segment's count is at least 1).
        return this.count > 0 || this.i < this.s.length;
    }
}
