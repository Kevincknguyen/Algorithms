
# 4. Median of Two Sorted Arrays

# Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

# The overall run time complexity should be O(log (m+n)).

import math

def findMedianSortedArrays(nums1,nums2):
    print ("8,posiiton 7")

    
    currentCount=math.floor(len(nums1)/2+len(nums2)/2)
    print(currentCount)
    print(math.floor(len(nums1)/2))
    print(math.floor(len(nums2)/2))



array1=[1,3,5,7,9]
array2=[2,4,6,8,10,12,14,15]
findMedianSortedArrays(array1,array2)