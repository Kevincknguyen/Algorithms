class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result=[]
        def recurse(current,sum,index):
            
            if index>=len(candidates):
                return
            if sum==target:
                result.append(current[::])
                return
            elif sum<target:
                sum += candidates[index]
                current.append(candidates[index])
                recurse(current,sum,index)
                sum -= current.pop()
            recurse(current,sum,index+1)
        recurse([],0,0)
        return result



        # https://leetcode.com/problems/combination-sum/submissions/