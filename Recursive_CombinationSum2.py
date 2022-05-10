class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        
        results=[]
        def backtrack(uniqueComb,sum,i,counter,results):
            if sum ==target:
                results.append(list(uniqueComb))
                return
            elif sum>target:
                return
    
            for x in range(i,len(counter)):
                candidate,freq=counter[x]
                
                if freq <=0:
                    continue
                    
                uniqueComb.append(candidate)
                counter[x]=(candidate,freq-1)
                
                backtrack(uniqueComb,sum+candidate,x,counter,results)
                
                uniqueComb.pop()
                counter[x]=(candidate,freq)
                
        
        counter=Counter(candidates)
        # print(counter)
        counter = [(c, counter[c]) for c in counter]
        # print(counter)
        backtrack(uniqueComb=[],sum=0,i=0,counter=counter,results=results)
        return results