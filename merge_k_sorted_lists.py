# Input: lists = [[1,4,5],[1,3,4],[2,6]]
# Output: [1,1,2,3,4,4,5,6]
# Explanation: The linked-lists are:
# [
#   1->4->5,
#   1->3->4,
#   2->6
# ]
# merging them into one sorted list:
# 1->1->2->3->4->4->5->6


lists = [[1,4,5],[1,3,4],[2,6]]
i=0
b=[]
while i<len(lists):
    if type (lists[i])==list:
        j=0
        while j<len(lists[i]):
            if type (lists[i][j])==list:
                k=0
                while k<len(lists[i][j]):
                    b.append(lists[i][j][k])
                    k+=1
            else:
                b.append(lists[i][j])
            j+=1
    else:
        b.append(lists[i])
    i+=1
print(sorted(b))