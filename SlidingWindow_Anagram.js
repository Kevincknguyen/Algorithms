/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    
    let output=[]
    let hashP={}
    for (let h=0; h< p.length; h++){
        if (hashP.hasOwnProperty(p[h])){
            hashP[p[h]]+=1
        }
        else{
            hashP[p[h]]=1
        }
    }
    
    for (let i=0;i<p.length-1;i++){
        if (hashP.hasOwnProperty(s[i])){
             hashP[s[i]] -=1
        }
    }
    
    for (let i=0;i<s.length-p.length+1;i++){
        if (hashP.hasOwnProperty(s[i+p.length-1])){
            hashP[s[i+p.length-1]]-=1
        }
        let boolean = true 
        Object.values(hashP).forEach(val =>{
            if (val!=0){
              boolean = false 
          }})
        if(boolean === true){
          output.push(i)          
      }
      if (hashP.hasOwnProperty(s[i])){
          hashP[s[i]]+=1
      }
    }
   
    
    return output
};