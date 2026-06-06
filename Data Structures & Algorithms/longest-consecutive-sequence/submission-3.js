class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        nums.forEach((num, index) => {
            if (set.has(num - 1)) return;
            let cursor = 1;
            while (set.has(num + cursor)) {
                cursor += 1;
            }
            longest = Math.max(longest, cursor);
        });

        return longest;
    }
}
