class Solution:
    def totalPrefixHits(self, words: list[str]) -> list[int]:
        # one shared trie: a node's "#" counter equals the hit count of its prefix
        root = {}
        for word in words:
            node = root
            for ch in word:
                # nested dicts as nodes; "#" holds the counter, no node class
                node = node.setdefault(ch, {})
                # count at every depth so the full word is counted for its own prefixes
                node["#"] = node.get("#", 0) + 1
        hits = []
        # second pass: a word's answer is the sum of counters along its path
        for word in words:
            node = root
            total = 0
            for ch in word:
                node = node[ch]
                # this node's counter is exactly the hit count of the prefix so far
                total += node["#"]
            hits.append(total)
        return hits
