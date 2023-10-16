# Sliding Window Algorithm
#
# This algorithm is used to solve problems that involve finding a subset of contiguous elements in an array or string that
# satisfy a certain condition. The idea is to maintain a window of elements that satisfy the condition and slide the window
# over the array or string to find the optimal solution.
#
# Points to note:
# - The window size is not fixed and can be adjusted based on the problem requirements.
# - The window can either slide by one element at a time or by a fixed number of elements.
# - The algorithm can be optimized by using two pointers to maintain the window instead of creating a new window for each
#   iteration.
#
# Here are 5 LeetCode questions that can be solved using the sliding window algorithm:
#
# Easy:
# 1. Maximum Subarray - Given an integer array nums, find the contiguous subarray (containing at least one number) which
#    has the largest sum and return its sum.
# 2. Minimum Size Subarray Sum - Given an array of n positive integers and a positive integer s, find the minimal length
#    of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
#
# Medium:
# 1. Longest Substring Without Repeating Characters - Given a string s, find the length of the longest substring without
#    repeating characters.
# 2. Longest Repeating Character Replacement - Given a string s that consists of only uppercase English letters, you can
#    perform at most k operations on that string. In one operation, you can choose any character of the string and change
#    it to any other uppercase English character. Find the length of the longest sub-string containing all repeating
#    letters you can get after performing the above operations.
# 3. Fruit Into Baskets - In a row of trees, the i-th tree produces fruit with type tree[i]. You start at any tree of
#    your choice, then repeatedly perform the following steps:
#    - Add one piece of fruit from this tree to your baskets. If you cannot, stop.
#    - Move to the next tree to the right of the current tree. If there is no tree to the right, stop.
#    Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2,
#    then back to step 1, then step 2, and so on until you stop.
#    You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type
#    of fruit each. What is the total amount of fruit you can collect with this procedure?
