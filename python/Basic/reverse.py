a =int(input("Enter your number"))
rem=0
rev=0 
    
while a>0 :
     rem = a%10
     rev = rev * 10 + rem
     a = a//10
print(f"reverse is {rev}")


