class FreqNode {
    key: string;
    prev: FreqNode | null = null;
    next: FreqNode | null = null;
    bucket: FreqBucket | null = null;

    constructor(key: string) {
        this.key = key;
    }
}

// One count value: the keys currently at that count, threaded on a doubly
// linked list of count buckets in increasing order.
class FreqBucket {
    count: number;
    head: FreqNode; // sentinel before the first key
    tail: FreqNode; // sentinel after the last key
    prev: FreqBucket | null = null;
    next: FreqBucket | null = null;

    constructor(count: number) {
        this.count = count;
        this.head = new FreqNode("");
        this.tail = new FreqNode("");
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
}

class FrequencyExtremes {
    private nodes = new Map<string, FreqNode>();
    private first: FreqBucket; // sentinel before the lowest count
    private last: FreqBucket; // sentinel after the highest count

    constructor() {
        this.first = new FreqBucket(0);
        this.last = new FreqBucket(0);
        this.first.next = this.last;
        this.last.prev = this.first;
    }

    private unlinkNode(node: FreqNode): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }

    private pushNode(bucket: FreqBucket, node: FreqNode): void {
        const tail = bucket.tail.prev!;
        node.prev = tail;
        node.next = bucket.tail;
        tail.next = node;
        bucket.tail.prev = node;
        node.bucket = bucket;
    }

    private unlinkBucket(bucket: FreqBucket): void {
        bucket.prev!.next = bucket.next;
        bucket.next!.prev = bucket.prev;
    }

    private addBucketAfter(anchor: FreqBucket, bucket: FreqBucket): void {
        const following = anchor.next!;
        bucket.prev = anchor;
        bucket.next = following;
        anchor.next = bucket;
        following.prev = bucket;
    }

    // Counts change by one, so the target bucket is always the neighbour on
    // that side — or a new bucket created exactly there.
    private move(node: FreqNode, target: number, up: boolean): void {
        const old = node.bucket!;
        this.unlinkNode(node);
        const neighbour = up ? old.next! : old.prev!;
        let bucket: FreqBucket;
        if (neighbour.count === target) {
            bucket = neighbour;
        } else {
            bucket = new FreqBucket(target);
            this.addBucketAfter(up ? old : neighbour, bucket);
        }
        this.pushNode(bucket, node);
        if (old.head.next === old.tail) {
            this.unlinkBucket(old);
        }
    }

    increase(key: string): void {
        const existing = this.nodes.get(key);
        if (existing === undefined) {
            const node = new FreqNode(key);
            this.nodes.set(key, node);
            let bucket: FreqBucket;
            if (this.first.next!.count === 1) {
                bucket = this.first.next;
            } else {
                bucket = new FreqBucket(1);
                this.addBucketAfter(this.first, bucket);
            }
            this.pushNode(bucket, node);
            return;
        }
        this.move(existing, existing.bucket!.count + 1, true);
    }

    decrease(key: string): void {
        const node = this.nodes.get(key)!;
        if (node.bucket!.count === 1) {
            const bucket = node.bucket!;
            this.unlinkNode(node);
            if (bucket.head.next === bucket.tail) {
                this.unlinkBucket(bucket);
            }
            this.nodes.delete(key);
            return;
        }
        this.move(node, node.bucket!.count - 1, false);
    }

    highestKey(): string {
        const bucket = this.last.prev!;
        return bucket === this.first ? "" : bucket.head.next!.key;
    }

    lowestKey(): string {
        const bucket = this.first.next!;
        return bucket === this.last ? "" : bucket.head.next!.key;
    }
}
