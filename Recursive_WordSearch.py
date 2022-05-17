class Solution(object):
    def exist(self, board, word):
        """
        :type board: List[List[str]]
        :type word: str
        :rtype: bool
        """
        #total number of is less than the word
        if len(board) * len(board[0]) < len(word):
            return False
    

            
        def backtrack(column, row, used, i):
            # print('i is', i)
            #Base case: if we ever get past the last index of the word we can return true
            if i >= len(word):
                return True
            
            #otherwise we need to make sure we are not using the same letter more than once and that our check is in range
            if not ((column, row)) in used: 
                if row >= 0 and column >= 0 and column < len(board) and row < len(board[0]): 
                    # print("col = ", column,"row = ", row)
                    #if we find the letter we are looking for we incriment i and check all adjacent cells 
                    if word[i] == board[column][row]:
                        # print(word[i])
                        used.append((column, row))
                        # print("used", used)
                        i += 1  
                        a = backtrack(column + 1, row, used, i) or backtrack(column - 1, row, used, i) or backtrack(column, row + 1, used, i) or  backtrack(column, row - 1, used, i)
                        used.pop()
                        return a
            return False
        
        
        for x in range(0, len(board)):
            for y in range (0, len(board[0])):
                if board[x][y] == word[0]:
                    w = backtrack(x, y, [], 0)
                    if w == True:
                        return True
        return False



    https://leetcode.com/problems/word-search/