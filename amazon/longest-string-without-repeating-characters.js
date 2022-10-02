var lengthOfLongestSubstring = function (s) {
    // Array of length of substrings without repeating characters
    var lenghts = [];
    // Array of substrings without repeating characters for debugging
    var results = [];
    if (s.length === 0) return 0;

    for (var i = 0; i < s.length; i++) {
        // Start with a string of length=1
        lenghts[i] = 1;

        for (var j = i + 1; j < s.length; j++) {
            // Select substring from i,j
            var subStr = s.slice(i, j);
            // If substring includes next char
            var nextChar = s[j];
            if (!subStr.includes(nextChar)) {
                lenghts[i]++;
            }
            else {
                results.push(subStr);
                break;
            }
        }
    }
    var maxLen = Math.max(...lenghts); 
    return maxLen;
};


var s = "abcabcbb";
var result = lengthOfLongestSubstring(s);
console.log(s + " result:"+result);

var s = "bbbbb";
var result = lengthOfLongestSubstring(s);
console.log(s + " result:"+result);

var s = "pwwkew";
var result = lengthOfLongestSubstring(s);
console.log(s + " result:"+result);
