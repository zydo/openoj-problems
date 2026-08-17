from typing import List, Optional


class Twitter:
    def __init__(self) -> None:
        raise NotImplementedError("TODO")

    def postTweet(self, userId: int, tweetId: int) -> None:
        raise NotImplementedError("TODO")

    def getNewsFeed(self, userId: int) -> List[int]:
        raise NotImplementedError("TODO")

    def follow(self, followerId: int, followeeId: int) -> None:
        raise NotImplementedError("TODO")

    def unfollow(self, followerId: int, followeeId: int) -> None:
        raise NotImplementedError("TODO")
