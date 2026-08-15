func ladderLength(beginWord string, endWord string, wordList []string) int {
	words := make(map[string]bool, len(wordList))
	for _, word := range wordList {
		words[word] = true
	}
	if !words[endWord] {
		return 0
	}
	length := len(beginWord)
	patternOf := func(word string, i int) string {
		return word[:i] + "*" + word[i+1:]
	}

	buckets := make(map[string][]string)
	for _, word := range wordList {
		for i := 0; i < length; i++ {
			key := patternOf(word, i)
			buckets[key] = append(buckets[key], word)
		}
	}

	visited := map[string]bool{beginWord: true}
	queue := []string{beginWord}
	steps := 1
	for len(queue) > 0 {
		next := []string{}
		for _, word := range queue {
			if word == endWord {
				return steps
			}
			for i := 0; i < length; i++ {
				key := patternOf(word, i)
				for _, neighbor := range buckets[key] {
					if !visited[neighbor] {
						visited[neighbor] = true
						next = append(next, neighbor)
					}
				}
				delete(buckets, key)
			}
		}
		queue = next
		steps++
	}
	return 0
}
