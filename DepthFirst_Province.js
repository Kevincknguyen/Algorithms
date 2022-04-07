// 547. Number of Provinces
// https://leetcode.com/problems/number-of-provinces/

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var numberOfProvinces= function(isConnected, i, n){
    isConnected[i][i]="x"
    for(let k=0;k<n; k++){            
        if(isConnected[i][k]==1){
            isConnected[i][k]="x"
            isConnected[k][i]="x"
            numberOfProvinces(isConnected, k, n)
        }
    }    
}

var findCircleNum = function(isConnected) {    
let n = isConnected.length
let numOfProvinces = 0
for(let i=0; i<n; i++){
    if(isConnected[i][i]==1){
        numOfProvinces+=1
        numberOfProvinces(isConnected, i, n)   
    }
                       
}
return numOfProvinces            
};