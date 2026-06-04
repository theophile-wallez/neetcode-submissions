class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const unique = new Set(nums);
        return nums.length !== unique.size;
    }
}
