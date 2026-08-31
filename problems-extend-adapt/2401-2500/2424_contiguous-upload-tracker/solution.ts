// Uploaded marks in a boolean array plus a prefix pointer that only
// moves forward. markUploaded() sets one mark; longestReadyPrefix() advances the pointer
// while the next video is already uploaded. The pointer never retreats,
// so its total travel across all calls is bounded by n and every query
// is amortized constant.
class UploadPrefixTracker {
    private n: number;
    private uploaded: boolean[];
    private prefix: number;

    constructor(n: number) {
        this.n = n;
        this.uploaded = new Array(n + 1).fill(false);
        this.prefix = 0;
    }

    markUploaded(video: number): void {
        this.uploaded[video] = true;
    }

    longestReadyPrefix(): number {
        while (this.prefix < this.n && this.uploaded[this.prefix + 1]) {
            this.prefix++;
        }
        return this.prefix;
    }
}
