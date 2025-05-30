let nums = [1, 5, 2,4, 3];
 let target = 7;
  // resposta esperada é [1, 2];
const twoSum = function(nums, target) {
 for (let i = 0; i < nums.length; i++) {
    for (let x = 0; x < nums.length; x++) {
       if(nums[i] + nums[x] == target){
        return [i, x];
       }
    }
 }
};

console.log(twoSum(nums, target));
