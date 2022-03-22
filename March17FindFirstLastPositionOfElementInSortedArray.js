// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let result=[-1,-1]
    for (let i=0;i<nums.length;i++){
        if (nums[i]===target && nums[i-1]!==target){
            result[0]=i
        }
        if (nums[i] ===target && nums[i+1]!==target){
            result[1]=i
        }
    }
    return result
};

let nums1=[5,7,7,8,8,10]
let target1=8
let nums2=[5,7,7,8,8,10]
let target2=6
let nums3=[]
let target3=0

console.log(searchRange(nums1,target1))
console.log(searchRange(nums2,target2))
console.log(searchRange(nums3,target3))



// 35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let i=0
    for (i;i<nums.length;i++){
        if (nums[i]===target){
            return i
        }
        if (nums[i]>target){
            return i
        }
    }
    return i
};




// 33. Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    if(nums.length===0){
        return -1
    }
   let start = 0
   let end = nums.length-1
   while(start<=end){
    let mid = Math.floor((end+start)/2)
    if(nums[mid]==target){
        return mid
    }
    else if(nums[mid]>=nums[start]){
        if(nums[start]<=target && target<nums[mid]){
            end=mid-1
        }
        else{
            start = mid+1
        }}
    else if (nums[mid]<nums[start]){
        if(nums[mid]<target && target<=nums[end]){
            start= mid+1
        }else{
            end= mid-1
        }
        
    }
}return -1
};