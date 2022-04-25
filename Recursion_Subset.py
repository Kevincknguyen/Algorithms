class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        n, result = len(nums), []
        def powerSet(nums, i, subSet): 
            print(nums, i, subSet)
            if i==n:
                result.append(subSet)
                print('result', result)
                return
            
            powerSet(nums, i+1, subSet) 
            
            powerSet(nums, i+1, subSet + [nums[i]])
            
        powerSet(nums, 0, [])
        return result 
        
        
        
#         # Iteratively
#         res = [[]]
#         for num in sorted(nums):
            
#             res += [item+[num] for item in res ]
           
#         return res