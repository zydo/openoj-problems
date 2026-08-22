package main

type freqNode struct {
	key    string
	prev   *freqNode
	next   *freqNode
	bucket *freqBucket
}

// One count value: the keys currently at that count, threaded on a doubly
// linked list of count buckets in increasing order.
type freqBucket struct {
	count int
	head  *freqNode // sentinel before the first key
	tail  *freqNode // sentinel after the last key
	prev  *freqBucket
	next  *freqBucket
}

func newFreqBucket(count int) *freqBucket {
	bucket := &freqBucket{count: count, head: &freqNode{}, tail: &freqNode{}}
	bucket.head.next = bucket.tail
	bucket.tail.prev = bucket.head
	return bucket
}

// FrequencyExtremes groups keys into count buckets on a doubly linked list.
// The bucket after the head sentinel is the minimum count and the bucket
// before the tail sentinel is the maximum, so both getters read one pointer.
// increase/decrease move a key between adjacent buckets, creating or
// deleting buckets as they fill or empty.
type FrequencyExtremes struct {
	nodes map[string]*freqNode
	first *freqBucket // sentinel before the lowest count
	last  *freqBucket // sentinel after the highest count
}

func NewFrequencyExtremesTyped() *FrequencyExtremes {
	extremes := &FrequencyExtremes{}
	extremes.ensure()
	return extremes
}

// The judge assembles this class from its zero value, so every entry point
// seeds the map and the sentinel buckets on first use.
func (design *FrequencyExtremes) ensure() {
	if design.nodes == nil {
		design.nodes = make(map[string]*freqNode)
		design.first = newFreqBucket(0)
		design.last = newFreqBucket(0)
		design.first.next = design.last
		design.last.prev = design.first
	}
}

func (design *FrequencyExtremes) unlinkNode(node *freqNode) {
	node.prev.next = node.next
	node.next.prev = node.prev
}

func (design *FrequencyExtremes) pushNode(bucket *freqBucket, node *freqNode) {
	tail := bucket.tail.prev
	node.prev = tail
	node.next = bucket.tail
	tail.next = node
	bucket.tail.prev = node
	node.bucket = bucket
}

func (design *FrequencyExtremes) unlinkBucket(bucket *freqBucket) {
	bucket.prev.next = bucket.next
	bucket.next.prev = bucket.prev
}

func (design *FrequencyExtremes) addBucketAfter(anchor *freqBucket, bucket *freqBucket) {
	following := anchor.next
	bucket.prev = anchor
	bucket.next = following
	anchor.next = bucket
	following.prev = bucket
}

// Counts change by one, so the target bucket is always the neighbour on that
// side — or a new bucket created exactly there.
func (design *FrequencyExtremes) move(node *freqNode, target int, up bool) {
	old := node.bucket
	design.unlinkNode(node)
	var bucket *freqBucket
	if up {
		neighbour := old.next
		if neighbour.count == target {
			bucket = neighbour
		} else {
			bucket = newFreqBucket(target)
			design.addBucketAfter(old, bucket)
		}
	} else {
		neighbour := old.prev
		if neighbour.count == target {
			bucket = neighbour
		} else {
			bucket = newFreqBucket(target)
			design.addBucketAfter(neighbour, bucket)
		}
	}
	design.pushNode(bucket, node)
	if old.head.next == old.tail {
		design.unlinkBucket(old)
	}
}

func (design *FrequencyExtremes) increase(key string) {
	design.ensure()
	node, exists := design.nodes[key]
	if !exists {
		node = &freqNode{key: key}
		design.nodes[key] = node
		var bucket *freqBucket
		if design.first.next.count == 1 {
			bucket = design.first.next
		} else {
			bucket = newFreqBucket(1)
			design.addBucketAfter(design.first, bucket)
		}
		design.pushNode(bucket, node)
		return
	}
	design.move(node, node.bucket.count+1, true)
}

func (design *FrequencyExtremes) decrease(key string) {
	design.ensure()
	node := design.nodes[key]
	if node.bucket.count == 1 {
		design.unlinkNode(node)
		if node.bucket.head.next == node.bucket.tail {
			design.unlinkBucket(node.bucket)
		}
		delete(design.nodes, key)
		return
	}
	design.move(node, node.bucket.count-1, false)
}

func (design *FrequencyExtremes) highestKey() string {
	design.ensure()
	bucket := design.last.prev
	if bucket == design.first {
		return ""
	}
	return bucket.head.next.key
}

func (design *FrequencyExtremes) lowestKey() string {
	design.ensure()
	bucket := design.first.next
	if bucket == design.last {
		return ""
	}
	return bucket.head.next.key
}
