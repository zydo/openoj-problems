package main

type listNode struct {
	key   int
	value int
	prev  *listNode
	next  *listNode
}

type RecencyCache struct {
	capacity int
	nodes    map[int]*listNode
	head     *listNode
	tail     *listNode
}

func NewRecencyCacheTyped(capacity int) *RecencyCache {
	cache := &RecencyCache{
		capacity: capacity,
		nodes:    make(map[int]*listNode),
		head:     &listNode{},
		tail:     &listNode{},
	}
	cache.head.next = cache.tail
	cache.tail.prev = cache.head
	return cache
}

func (cache *RecencyCache) unlink(node *listNode) {
	node.prev.next = node.next
	node.next.prev = node.prev
}

func (cache *RecencyCache) pushFront(node *listNode) {
	node.next = cache.head.next
	node.prev = cache.head
	cache.head.next.prev = node
	cache.head.next = node
}

func (cache *RecencyCache) get(key int) int {
	node, exists := cache.nodes[key]
	if !exists {
		return -1
	}
	cache.unlink(node)
	cache.pushFront(node)
	return node.value
}

func (cache *RecencyCache) put(key int, value int) {
	if node, exists := cache.nodes[key]; exists {
		node.value = value
		cache.unlink(node)
		cache.pushFront(node)
		return
	}
	node := &listNode{key: key, value: value}
	cache.nodes[key] = node
	cache.pushFront(node)
	if len(cache.nodes) > cache.capacity {
		victim := cache.tail.prev
		cache.unlink(victim)
		delete(cache.nodes, victim.key)
	}
}
