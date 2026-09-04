package main

import "strings"

type PathRegistry struct {
	values map[string]int
}

func NewPathRegistryTyped() *PathRegistry {
	return &PathRegistry{values: make(map[string]int)}
}

func (design *PathRegistry) addPath(path string, value int) bool {
	if _, exists := design.values[path]; exists {
		return false
	}
	parent := path[:strings.LastIndex(path, "/")]
	if parent != "" {
		if _, exists := design.values[parent]; !exists {
			return false
		}
	}
	design.values[path] = value
	return true
}

func (design *PathRegistry) get(path string) int {
	if value, exists := design.values[path]; exists {
		return value
	}
	return -1
}
