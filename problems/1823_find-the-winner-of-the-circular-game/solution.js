/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    const friends = [];
    for (let i = 1; i <= n; i++) friends.push(i);
    let idx = 0;
    while (friends.length > 1) {
        idx = (idx + k - 1) % friends.length;
        friends.splice(idx, 1);
    }
    return friends[0];
};
