class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        
        results=[]
        hashMap=Counter(nums)
        
        def backtrack(permutation):
            if len(permutation) ==len(nums):
                results.append(permutation[::])
                return
            for key in hashMap:
                if hashMap[key]>0:
                    permutation.append(key)
                    hashMap[key] -=1
            
                    backtrack(permutation)
                    permutation.pop()
                    hashMap[key] +=1
                    
        backtrack([])
        return results