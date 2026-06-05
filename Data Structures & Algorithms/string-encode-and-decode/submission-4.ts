
const SEPARATOR = '___'
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded: string = '';
        strs.forEach(el => {
            encoded += `${el}${SEPARATOR}`;
        })
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decoded = str.split(SEPARATOR);
        decoded.pop();
        return decoded;
    }
}
