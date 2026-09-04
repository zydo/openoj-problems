#include <string>
#include <unordered_map>

class FrequencyExtremes {
  private:
    struct Bucket;

    // One key entry, living in the node list of its count bucket.
    struct Node {
        std::string key;
        Node *prev = nullptr;
        Node *next = nullptr;
        Bucket *bucket = nullptr;
    };

    // One count value: the keys currently at that count, threaded on a
    // doubly linked list of buckets in increasing count order.
    struct Bucket {
        int count;
        Node head; // sentinel before the first key
        Node tail; // sentinel after the last key
        Bucket *prev = nullptr;
        Bucket *next = nullptr;

        explicit Bucket(int count) : count(count) {
            head.next = &tail;
            tail.prev = &head;
        }
    };

  public:
    FrequencyExtremes() {
        first.next = &last;
        last.prev = &first;
    }

    ~FrequencyExtremes() {
        Bucket *bucket = first.next;
        while (bucket != &last) {
            Bucket *nextBucket = bucket->next;
            for (Node *node = bucket->head.next; node != &bucket->tail;) {
                Node *nextNode = node->next;
                delete node;
                node = nextNode;
            }
            delete bucket;
            bucket = nextBucket;
        }
    }

    FrequencyExtremes(const FrequencyExtremes &) = delete;
    FrequencyExtremes &operator=(const FrequencyExtremes &) = delete;

    void increase(std::string key) {
        auto found = nodes.find(key);
        if (found == nodes.end()) {
            Node *node = new Node();
            node->key = std::move(key);
            nodes.emplace(node->key, node);
            Bucket *target = first.next->count == 1 ? first.next : insertBucketAfter(&first, 1);
            pushNode(target, node);
            return;
        }
        move(found->second, found->second->bucket->count + 1, true);
    }

    void decrease(std::string key) {
        Node *node = nodes.at(key);
        if (node->bucket->count == 1) {
            Bucket *bucket = node->bucket;
            unlinkNode(node);
            if (bucket->head.next == &bucket->tail) {
                unlinkBucket(bucket);
                delete bucket;
            }
            nodes.erase(key);
            delete node;
            return;
        }
        move(node, node->bucket->count - 1, false);
    }

    std::string highestKey() {
        Bucket *bucket = last.prev;
        return bucket == &first ? std::string() : bucket->head.next->key;
    }

    std::string lowestKey() {
        Bucket *bucket = first.next;
        return bucket == &last ? std::string() : bucket->head.next->key;
    }

  private:
    void unlinkNode(Node *node) {
        node->prev->next = node->next;
        node->next->prev = node->prev;
    }

    void pushNode(Bucket *bucket, Node *node) {
        Node *tail = bucket->tail.prev;
        node->prev = tail;
        node->next = &bucket->tail;
        tail->next = node;
        bucket->tail.prev = node;
        node->bucket = bucket;
    }

    void unlinkBucket(Bucket *bucket) {
        bucket->prev->next = bucket->next;
        bucket->next->prev = bucket->prev;
    }

    Bucket *insertBucketAfter(Bucket *anchor, int count) {
        Bucket *bucket = new Bucket(count);
        Bucket *following = anchor->next;
        bucket->prev = anchor;
        bucket->next = following;
        anchor->next = bucket;
        following->prev = bucket;
        return bucket;
    }

    // Counts change by one, so the target bucket is always the neighbour on
    // that side — or a new bucket created exactly there.
    void move(Node *node, int target, bool up) {
        Bucket *old = node->bucket;
        unlinkNode(node);
        Bucket *neighbour = up ? old->next : old->prev;
        Bucket *bucket = neighbour->count == target ? neighbour : insertBucketAfter(up ? old : neighbour, target);
        pushNode(bucket, node);
        if (old->head.next == &old->tail) {
            unlinkBucket(old);
            delete old;
        }
    }

    std::unordered_map<std::string, Node *> nodes;
    Bucket first{0}; // sentinel before the lowest count
    Bucket last{0};  // sentinel after the highest count
};
