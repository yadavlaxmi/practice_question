
# name = ['Snowball', 'Chewy', 'Bubbles', 'Gruff']
# animal = ['Cat', 'Dog', 'Fish', 'Goat']
# age = [1, 2, 2, 6]
# z = zip(name, animal, age)
#  #=> <zip at 0x111081e48>
# for name,animal,age in z:
#     print("%s the %s is %s" % (name, animal, age))
    
#=> Snowball the Cat is 1
#=> Chewy the Dog is 2
#=> Bubbles the Fish is 2
#=> Gruff the Goat is 6
a=[1,3,4]
b=[6,7,8]
z=zip(a,b)
for a,b in z:
    print(a,b)
