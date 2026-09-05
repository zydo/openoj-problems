package main

// A fixed array of 769 buckets: key % 769 selects the bucket, and the
// bucket's short list holds exactly the keys that hashed there. add()
// appends only when the key is absent, remove() deletes only when the key
// is present, and contains() scans the one bucket. 769 is prime, so
// repetitive key patterns spread out instead of piling onto one bucket.

const bucketCount = 769

type CustomHashSet struct {
	buckets [][]int
}

func NewCustomHashSetTyped() *CustomHashSet {
	return &CustomHashSet{buckets: make([][]int, bucketCount)}
}

func (design *CustomHashSet) add(key int) {
	bucket := design.buckets[key%bucketCount]
	for _, stored := range bucket {
		if stored == key {
			return
		}
	}
	design.buckets[key%bucketCount] = append(bucket, key)
}

func (design *CustomHashSet) remove(key int) {
	bucket := design.buckets[key%bucketCount]
	for index, stored := range bucket {
		if stored == key {
			design.buckets[key%bucketCount] = append(bucket[:index], bucket[index+1:]...)
			return
		}
	}
}

func (design *CustomHashSet) contains(key int) bool {
	for _, stored := range design.buckets[key%bucketCount] {
		if stored == key {
			return true
		}
	}
	return false
}
