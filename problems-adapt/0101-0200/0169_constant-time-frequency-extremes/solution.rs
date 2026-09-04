use std::collections::HashMap;

const NIL: usize = usize::MAX;

// Node and bucket slabs linked by index; the structure mirrors the doubly
// linked bucket list with index NIL standing in for null.
struct FreqNode {
    key: String,
    prev: usize,
    next: usize,
    bucket: usize,
}

struct FreqBucket {
    count: i64,
    head: usize, // sentinel node before the first key
    tail: usize, // sentinel node after the last key
    prev: usize,
    next: usize,
}

pub struct FrequencyExtremes {
    nodes: HashMap<String, usize>,
    node_slab: Vec<FreqNode>,
    bucket_slab: Vec<FreqBucket>,
    first: usize, // sentinel bucket before the lowest count
    last: usize,  // sentinel bucket after the highest count
    free_nodes: Vec<usize>,
    free_buckets: Vec<usize>,
}

impl FrequencyExtremes {
    pub fn new() -> Self {
        let mut design = FrequencyExtremes {
            nodes: HashMap::new(),
            node_slab: Vec::new(),
            bucket_slab: Vec::new(),
            first: 0,
            last: 0,
            free_nodes: Vec::new(),
            free_buckets: Vec::new(),
        };
        design.first = design.new_bucket(0);
        design.last = design.new_bucket(0);
        design.bucket_slab[design.first].next = design.last;
        design.bucket_slab[design.last].prev = design.first;
        design
    }

    fn new_node(&mut self, key: String) -> usize {
        let node = FreqNode {
            key,
            prev: NIL,
            next: NIL,
            bucket: NIL,
        };
        match self.free_nodes.pop() {
            Some(index) => {
                self.node_slab[index] = node;
                index
            }
            None => {
                self.node_slab.push(node);
                self.node_slab.len() - 1
            }
        }
    }

    fn new_bucket(&mut self, count: i64) -> usize {
        let head = self.new_node(String::new());
        let tail = self.new_node(String::new());
        self.node_slab[head].next = tail;
        self.node_slab[tail].prev = head;
        let bucket = FreqBucket {
            count,
            head,
            tail,
            prev: NIL,
            next: NIL,
        };
        match self.free_buckets.pop() {
            Some(index) => {
                self.bucket_slab[index] = bucket;
                index
            }
            None => {
                self.bucket_slab.push(bucket);
                self.bucket_slab.len() - 1
            }
        }
    }

    fn unlink_node(&mut self, node: usize) {
        let (prev, next) = (self.node_slab[node].prev, self.node_slab[node].next);
        self.node_slab[prev].next = next;
        self.node_slab[next].prev = prev;
    }

    fn push_node(&mut self, bucket: usize, node: usize) {
        let tail = self.node_slab[self.bucket_slab[bucket].tail].prev;
        self.node_slab[node].prev = tail;
        self.node_slab[node].next = self.bucket_slab[bucket].tail;
        self.node_slab[tail].next = node;
        self.node_slab[self.bucket_slab[bucket].tail].prev = node;
        self.node_slab[node].bucket = bucket;
    }

    fn unlink_bucket(&mut self, bucket: usize) {
        let (prev, next) = (self.bucket_slab[bucket].prev, self.bucket_slab[bucket].next);
        self.bucket_slab[prev].next = next;
        self.bucket_slab[next].prev = prev;
    }

    fn add_bucket_after(&mut self, anchor: usize, bucket: usize) {
        let following = self.bucket_slab[anchor].next;
        self.bucket_slab[bucket].prev = anchor;
        self.bucket_slab[bucket].next = following;
        self.bucket_slab[anchor].next = bucket;
        self.bucket_slab[following].prev = bucket;
    }

    // Counts change by one, so the target bucket is always the neighbour on
    // that side — or a new bucket created exactly there.
    fn shift(&mut self, node: usize, target: i64, up: bool) {
        let old = self.node_slab[node].bucket;
        self.unlink_node(node);
        let neighbour = if up {
            self.bucket_slab[old].next
        } else {
            self.bucket_slab[old].prev
        };
        let bucket = if self.bucket_slab[neighbour].count == target {
            neighbour
        } else {
            let created = self.new_bucket(target);
            let anchor = if up { old } else { neighbour };
            self.add_bucket_after(anchor, created);
            created
        };
        self.push_node(bucket, node);
        let old_head = self.bucket_slab[old].head;
        let old_tail = self.bucket_slab[old].tail;
        if self.node_slab[old_head].next == old_tail {
            self.unlink_bucket(old);
            self.release_bucket(old);
        }
    }

    fn release_bucket(&mut self, bucket: usize) {
        let head = self.bucket_slab[bucket].head;
        let tail = self.bucket_slab[bucket].tail;
        self.free_nodes.push(head);
        self.free_nodes.push(tail);
        self.free_buckets.push(bucket);
    }

    pub fn increase(&mut self, key: String) {
        if let Some(&node) = self.nodes.get(&key) {
            let count = self.bucket_slab[self.node_slab[node].bucket].count;
            self.shift(node, count + 1, true);
            return;
        }
        let node = self.new_node(key.clone());
        self.nodes.insert(key, node);
        let following = self.bucket_slab[self.first].next;
        let bucket = if self.bucket_slab[following].count == 1 {
            following
        } else {
            let created = self.new_bucket(1);
            self.add_bucket_after(self.first, created);
            created
        };
        self.push_node(bucket, node);
    }

    pub fn decrease(&mut self, key: String) {
        let node = self.nodes[&key];
        let bucket = self.node_slab[node].bucket;
        if self.bucket_slab[bucket].count == 1 {
            self.unlink_node(node);
            let head = self.bucket_slab[bucket].head;
            let tail = self.bucket_slab[bucket].tail;
            if self.node_slab[head].next == tail {
                self.unlink_bucket(bucket);
                self.release_bucket(bucket);
            }
            self.nodes.remove(&self.node_slab[node].key);
            self.free_nodes.push(node);
            return;
        }
        let count = self.bucket_slab[bucket].count;
        self.shift(node, count - 1, false);
    }

    pub fn highestKey(&mut self) -> String {
        let bucket = self.bucket_slab[self.last].prev;
        if bucket == self.first {
            return String::new();
        }
        let head = self.bucket_slab[bucket].head;
        self.node_slab[self.node_slab[head].next].key.clone()
    }

    pub fn lowestKey(&mut self) -> String {
        let bucket = self.bucket_slab[self.first].next;
        if bucket == self.last {
            return String::new();
        }
        let head = self.bucket_slab[bucket].head;
        self.node_slab[self.node_slab[head].next].key.clone()
    }
}
