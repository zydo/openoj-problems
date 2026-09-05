package main

import "strings"

// A plain key -> value hash map: no nodes, no per-put maintenance. put()
// stores the pair and stops -- the map carries no structure beyond the
// pairs themselves -- and prefixSum() pays for that at query time,
// scanning every stored key and summing the values of those that start
// with the prefix.
type PrefixSumMap struct {
	values map[string]int
}

func NewPrefixSumMapTyped() *PrefixSumMap {
	return &PrefixSumMap{values: map[string]int{}}
}

func (design *PrefixSumMap) put(key string, val int) {
	design.values[key] = val
}

func (design *PrefixSumMap) prefixSum(prefix string) int {
	total := int64(0)
	for key, val := range design.values {
		if strings.HasPrefix(key, prefix) {
			total += int64(val)
		}
	}
	return int(total)
}
