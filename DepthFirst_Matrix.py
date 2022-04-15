class Solution(object):
    def shortestPathBinaryMatrix(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        path=[]
        for x in range(len(grid)):
            path.append([])
        if(grid[0][0] == 0):
            output = self.isPath(0, 0, grid, 0,path)
        if(output == 7777):
            return -1
        else: return output
        
    def isPath(self, row, column, grid, output,path):
        print path
        print(row,column)
        if(row > len(grid)-1 or column > len(grid)-1 or row < 0 or column < 0 or grid[row][column] != 0 or column in path[row]):
            print("no path")
            path=[]
            return 7777
            
            
        if(grid[row][column] == 0 and column not in path[row]):
            output += 1
            path[row].append(column)
            print("path")
            if(row == len(grid) -1  and column == len(grid) -1):
                print("End point")
                path=[]
                for x in range(len(grid)):
                    path.append([])
                path[0].append(0)
                return output
            answer=min(
                self.isPath(row-1, column-1, grid, output,path),
                self.isPath(row-1, column, grid, output,path), 
                self.isPath(row-1, column+1, grid, output,path),
                self.isPath(row, column+1, grid, output,path), 
                self.isPath(row+1, column+1, grid, output,path), 
                self.isPath(row+1, column, grid, output,path), 
                self.isPath(row+1, column-1, grid, output,path),
                self.isPath(row, column-1, grid, output,path),

                )
            return answer