sub1 = int(input("Enter mark of 1st subject"))
sub2 = int(input("Enter mark of 2nd subject"))
sub3 = int(input("Enter mark of 3rd subject"))
sub4 = int(input("Enter mark of 4th subject"))
sub5 = int(input("Enter mark of 5th subject"))
avg = (sub1+sub2+sub3+sub4+sub5)/5
if(avg>=90):
    print("grade of student is: O")
elif(avg>=80 and avg<90):
    print("grade of student is: E")
elif(avg>=70 and avg<80):
    print("grade of student is: A")
elif(avg>=60 and avg<70):
    print("grade of student is: B")
elif(avg>=50 and avg<60):
    print("grade of student is: C")
else:
    print("grade of student is: F")
    



