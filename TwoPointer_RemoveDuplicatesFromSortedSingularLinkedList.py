# 82. Remove Duplicates from Sorted List II

# Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

# Input: head = [1,2,3,3,4,4,5]
# Output: [1,2,5]



# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def deleteDuplicates(self, head):
        previous = head
        runner = head
        while runner:
            if runner.next == None:
                return head
            # ----IF A DUPLICATE IS FOUND RUN THIS ELIF----
            elif runner.val == runner.next.val:
                while runner:
                    # -----FIRST CONDITION PREVENTS ERROR IF DUPLICATES END THE LIST, SECOND CONDITION IS CHECKING FOR DUPLICATES-----
                    if runner.next and runner.val == runner.next.val:
                        runner = runner.next
                    else:
                        # ---STANDARD SITUATION---
                        if previous.val != runner.val:
                            previous.next=runner.next
                            runner=runner.next
                        # -----SITUATIONS WHERE THE DUPLICATES STARTED THE LINKED LIST-reassign head to first digit after duplicates and reinitializes previous and head-----
                        else:
                            head=runner.next
                            previous=head
                            runner=head
                        break
            # -----IF DUPLICATE IS NOT FOUND-----
            else:
                previous = runner
                runner = runner.next
        return head