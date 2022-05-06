class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        print(candidates)
        print(target)
        result=[]
        def recurse(start,current):
            for position in range(start,len(candidates)):
                print(position)
                current.append(candidates[position])
                if sum(current)==target:
                    print("VALID SOLUTION PROBABLY APPEND AND ALSO POP THEN REPEAT LOOP")
                elif sum(current)>target:
                    print("REMOVE LOGIC MAYBE JUST POP AND REPEAT LOOP")
                print("THIS IS WHERE YOU DO IT MAYBE LIKE UPDATE START OUTSIDE OF THE FOR LOOP")
                print("THEN OUTSIDE THIS TOO YOU ADD AN EXTRA RECURSE")
            print(current)
        recurse(0,[])
        return result