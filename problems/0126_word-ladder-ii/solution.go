func findLadders(beginWord string, endWord string, wordList []string) [][]string {
	wordSet := make(map[string]bool)
	for _, w := range wordList {
		wordSet[w] = true
	}
	if !wordSet[endWord] {
		return [][]string{}
	}
	delete(wordSet, beginWord)

	dist := map[string]int{beginWord: 0}
	adjacency := make(map[string][]string)
	queue := []string{beginWord}
	letters := "abcdefghijklmnopqrstuvwxyz"
	for head := 0; head < len(queue); head++ {
		word := queue[head]
		d := dist[word]
		chars := []byte(word)
		for i := 0; i < len(chars); i++ {
			orig := chars[i]
			for _, c := range []byte(letters) {
				if c == orig {
					continue
				}
				chars[i] = c
				nxt := string(chars)
				if !wordSet[nxt] {
					continue
				}
				if nd, ok := dist[nxt]; !ok {
					dist[nxt] = d + 1
					adjacency[word] = append(adjacency[word], nxt)
					queue = append(queue, nxt)
				} else if nd == d+1 {
					adjacency[word] = append(adjacency[word], nxt)
				}
			}
			chars[i] = orig
		}
	}

	result := [][]string{}
	path := []string{beginWord}

	var dfs func(word string)
	dfs = func(word string) {
		if word == endWord {
			cp := make([]string, len(path))
			copy(cp, path)
			result = append(result, cp)
			return
		}
		for _, nxt := range adjacency[word] {
			path = append(path, nxt)
			dfs(nxt)
			path = path[:len(path)-1]
		}
	}
	dfs(beginWord)
	return result
}
