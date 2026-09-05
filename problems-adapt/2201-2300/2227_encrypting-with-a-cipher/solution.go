package main

// Forward map for encryption; for decryption, dictionary words are
// pre-encrypted once and counted in a bag, so each decrypt call is one
// hash lookup — the count of dictionary strings whose encryption equals
// word2 equals the number of ways word2 decrypts into the dictionary.
type Cipher struct {
	forward   map[byte]string
	encCounts map[string]int
}

func NewCipherTyped(keys []string, values []string, dictionary []string) *Cipher {
	design := &Cipher{
		forward:   make(map[byte]string),
		encCounts: make(map[string]int),
	}
	for i, k := range keys {
		design.forward[k[0]] = values[i]
	}
	for _, word := range dictionary {
		encrypted := design.encrypt(word)
		if encrypted != "" {
			design.encCounts[encrypted]++
		}
	}
	return design
}

func (design *Cipher) encrypt(word1 string) string {
	out := make([]byte, 0, len(word1)*2)
	for i := 0; i < len(word1); i++ {
		mapped, ok := design.forward[word1[i]]
		if !ok {
			return ""
		}
		out = append(out, mapped...)
	}
	return string(out)
}

func (design *Cipher) decrypt(word2 string) int {
	return design.encCounts[word2]
}
