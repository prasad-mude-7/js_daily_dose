function subarraySum(nums: number[], k: number): number {
        let output = 0 
       for(let i=0; i<nums.length; i++){
           if(nums[i] == k){
               output+=1
           }
           let sum = nums[i]
        for (let j=i+1;j<nums.length;j++){
            sum += nums[j]
               if(sum  == k){
                   output+=1
               }
              
           }
       } 

       return output
};

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
