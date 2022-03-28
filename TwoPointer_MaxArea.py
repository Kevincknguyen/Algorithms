
# 11. Container With Most Water
# https://leetcode.com/problems/container-with-most-water/

class Solution(object):
    def maxArea(self, height):
        max = 0
        total = 0
        i=0
        j=len(height)-1
        
        while(i<j):
            lower = min(height[i], height[j])
            total = lower*(j-i)
            if total > max:
                max = total
                
            if  height[j] < height[i]:
                j -= 1
            else:
                i += 1
        return max