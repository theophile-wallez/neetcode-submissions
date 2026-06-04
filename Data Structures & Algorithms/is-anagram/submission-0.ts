class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sortedA = s.split('').sort().join('');
        const sortedB = t.split('').sort().join('');

        return sortedA === sortedB;
    }
}
