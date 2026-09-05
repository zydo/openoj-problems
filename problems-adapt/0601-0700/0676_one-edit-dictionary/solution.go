package main

// Words grouped by length; each loadWords REPLACES the previous dictionary,
// so matchesOneEdit only ever sees the latest call's words. A candidate matches when
// it differs from the matchesOneEdit word in exactly one position.

type OneEditDictionary struct {
	buckets map[int][]string
}

func NewOneEditDictionaryTyped() *OneEditDictionary {
	return &OneEditDictionary{buckets: map[int][]string{}}
}

func (design *OneEditDictionary) loadWords(dictionary []string) {
	buckets := map[int][]string{}
	for _, word := range dictionary {
		length := len(word)
		buckets[length] = append(buckets[length], word)
	}
	design.buckets = buckets
}

func (design *OneEditDictionary) matchesOneEdit(searchWord string) bool {
	for _, word := range design.buckets[len(searchWord)] {
		mismatches := 0
		for index := 0; index < len(word); index++ {
			if word[index] != searchWord[index] {
				mismatches++
				if mismatches > 1 {
					break
				}
			}
		}
		if mismatches == 1 {
			return true
		}
	}
	return false
}
