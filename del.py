# a = ['w', 'x', 'y', 'z']
# # a #=> ['w', 'x', 'y', 'z']
# del a[1]
# print(a)


# a #=> ['w', 'y', 'z']
# a=[1,3,4,5]
# del a[0]
# print(a)

# a=[2,4,5,6,4,5,4,3,3]
# b=a.remove(3)
# print(a)

# a=[5,6,7,9]
# b=a.pop(2)
# print(b)

# a=[5,6,7,9]
# a.pop(2)
# print(a)

# list=[1,3,4,1,1]
# li=set(list)
# print(li)



# list=[1,3,4,1,1]
# b=list.index(1)
# print(b)

# list=[1,2,3,4,5]
# list.clear()
# print(list)

# fruit = ['pear', 'orange', 'apple']
# print( fruit )  
# print( id(fruit) )

# fruit = ['pear', 'orange', 'apple']
# print( fruit ) 
# print( (fruit[0]))


# fruit = ['pear', 'orange', 'apple']
# print( fruit )     #=> ['pear', 'orange', 'apple']
# print( id(fruit) ) #=> 4581166792
# del fruit[:]
# print( fruit )     #=> []
# print( id(fruit) ) 

# one = ['a', 'b', 'c']
# two = [1, 2, 3]
# print(one==two)

# a=[4,6,7,9]
# b= [i+1  for i in a]
# print(b)

# a=[1,4,5,6,1,1]
# b=a.count(1)
# print(b)
# round1 = ['chuck norris', 'bruce lee', 'sonny chiba']
# round2 = round1.copy()
# round2.extend(['laxmi'])
# print(round2)

# round1 = [
#     ['Arnold', 'Sylvester', 'Jean Claude'],
#     ['Buttercup', 'Bubbles', 'Blossom']
# ]
# import copy
# round2 = copy.deepcopy(round1)
# round2[0][0] = "laxmi","yadav"
# print(round1)
# round1=[
#     [""]
# ]
# import copy
# round2=copy.deepcopy(round1)
# round2[0][0]="laxmi","yadav"
# print(round1)
def multiply_5(val):
    return val * 5
a = [10,20,30,40,50]
[val for val in map(multiply_5, a)] 
#=> [50, 100, 150, 200, 250]