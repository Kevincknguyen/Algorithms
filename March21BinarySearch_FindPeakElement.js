// 162. Find Peak Element

// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞.

// You must write an algorithm that runs in O(log n) time.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length === 0) {
        return -1
    }
    let start = 0
    let end = nums.length - 1
    let mid
    while (start < end) {
        mid = Math.floor((end + start) / 2)

        if (nums[mid] < nums[mid + 1]) {
            start = mid + 1
        }

        else {
            end = mid
        }

    } return start
};

nums1=[1,2,3,1]
nums2=[1,2,1,3,5,6,4]
nums3=[1]
console.log(findPeakElement(nums1))
console.log(findPeakElement(nums2))
console.log(findPeakElement(nums3))