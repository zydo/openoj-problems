class FrequencyExtremes {
    constructor() {
        this.nodes = new Map();
        this.first = this.#newBucket(0); // sentinel before the lowest count
        this.last = this.#newBucket(0); // sentinel after the highest count
        this.first.next = this.last;
        this.last.prev = this.first;
    }

    // One count value: the keys currently at that count, threaded on a
    // doubly linked list of count buckets in increasing order.
    #newBucket(count) {
        const bucket = { count, head: null, tail: null, prev: null, next: null };
        bucket.head = { key: "", prev: null, next: null, bucket: null };
        bucket.tail = { key: "", prev: null, next: null, bucket: null };
        bucket.head.next = bucket.tail;
        bucket.tail.prev = bucket.head;
        return bucket;
    }

    #unlinkNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    #pushNode(bucket, node) {
        const tail = bucket.tail.prev;
        node.prev = tail;
        node.next = bucket.tail;
        tail.next = node;
        bucket.tail.prev = node;
        node.bucket = bucket;
    }

    #unlinkBucket(bucket) {
        bucket.prev.next = bucket.next;
        bucket.next.prev = bucket.prev;
    }

    #addBucketAfter(anchor, bucket) {
        const following = anchor.next;
        bucket.prev = anchor;
        bucket.next = following;
        anchor.next = bucket;
        following.prev = bucket;
    }

    // Counts change by one, so the target bucket is always the neighbour on
    // that side — or a new bucket created exactly there.
    #move(node, target, up) {
        const old = node.bucket;
        this.#unlinkNode(node);
        const neighbour = up ? old.next : old.prev;
        let bucket;
        if (neighbour.count === target) {
            bucket = neighbour;
        } else {
            bucket = this.#newBucket(target);
            this.#addBucketAfter(up ? old : neighbour, bucket);
        }
        this.#pushNode(bucket, node);
        if (old.head.next === old.tail) {
            this.#unlinkBucket(old);
        }
    }

    increase(key) {
        let node = this.nodes.get(key);
        if (node === undefined) {
            node = { key, prev: null, next: null, bucket: null };
            this.nodes.set(key, node);
            let bucket;
            if (this.first.next.count === 1) {
                bucket = this.first.next;
            } else {
                bucket = this.#newBucket(1);
                this.#addBucketAfter(this.first, bucket);
            }
            this.#pushNode(bucket, node);
            return;
        }
        this.#move(node, node.bucket.count + 1, true);
    }

    decrease(key) {
        const node = this.nodes.get(key);
        if (node.bucket.count === 1) {
            this.#unlinkNode(node);
            if (node.bucket.head.next === node.bucket.tail) {
                this.#unlinkBucket(node.bucket);
            }
            this.nodes.delete(key);
            return;
        }
        this.#move(node, node.bucket.count - 1, false);
    }

    highestKey() {
        const bucket = this.last.prev;
        return bucket === this.first ? "" : bucket.head.next.key;
    }

    lowestKey() {
        const bucket = this.first.next;
        return bucket === this.last ? "" : bucket.head.next.key;
    }
}
