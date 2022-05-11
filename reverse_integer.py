# Input: x = 123
# Output: 321

x=123
rev=0
while x>0:
    y=x%10
    rev=rev*10+y
    x=x//10
print(rev)