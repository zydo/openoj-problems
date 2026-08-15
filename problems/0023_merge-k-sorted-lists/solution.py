from typing import List, Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        lists = [x for x in lists if x is not None]
        if not lists:
            return None

        def merge2(a, b):
            dummy = ListNode(0)
            tail = dummy
            while a and b:
                if a.val <= b.val:
                    tail.next = a
                    a = a.next
                else:
                    tail.next = b
                    b = b.next
                tail = tail.next
            tail.next = a if a else b
            return dummy.next

        while len(lists) > 1:
            merged = []
            for i in range(0, len(lists) - 1, 2):
                merged.append(merge2(lists[i], lists[i + 1]))
            if len(lists) % 2 == 1:
                merged.append(lists[-1])
            lists = merged
        return lists[0]
