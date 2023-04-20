import sqlite3 as ism
con=ism.connect("jrd_bank.db")
con.execute("create table if not exists bank_detail (ac int not null unique,name varchar(50) not null unique,password varchar(50) not null,ph int not null unique,bal int)")
def signup():
    name=input("Enter your name:")
    while True:
        password=input("create your  password (your password should contain atleast 8 character in min 1uppercase and 1symbol and 1number):")
        c=0
        s1=0
        s2=0
        s3=0
        s4=0
        for i in password:
            c=c+1
            if i.islower():
                s1=2
            elif i.isupper():
                 s2=2
            elif i.isnumeric():
                s3=2
            else:
                s4=2
        if s1==2 and s2==2  and s3==2 and s4==2 and c>=8:
            while True:
                re=input("Retype your password:")
                if password!= re:
                   print("Password doesnt match")
                else:
                    break
            break
                    
        else:
            print("Please create valid password ")     
        
          
    while True:
        ph=(input("Enter your mobile number:"))
        c=0
        for i in ph:
            c=c+1
        if c==10:  
            ac=ph[6:]
            ac="22"+"I"+ac
            ac=ac.zfill(10)
            break
        else:
            print("Invalid mobile number ")
    con.execute("insert into bank_detail values(?,?,?,?,?)",(ac,name,password,ph,500))
    con.commit()
    print("Account created successfully")
    main()
def signin():
    ph=int(input("Enter your phone number: "))
    password=input("Enter your password: ")
    detail=[]
    while True:       
        detail=list(con.execute("select * from bank_detail where(ph=? and password=?)",(ph,password)))
        if detail ==[]:
             print("No user found")
             ph=int(input("Enter your Phone number: "))
             password=input("Enter your Password: ")
               
        else:
        
            detail=list(detail[0])
            print("1.Balance")
            print("2.Withdraw")
            print("3.Deposit")
            print("4.Exit to main menu")
            option=int(input())
            if option == 1:
                print(detail[4])
            elif option ==2:
                print("Withdraw")
                withdraw=float(input("Enter the amount:"))
                if withdraw<detail[4]:
                    detail[4]=detail[4]-withdraw
                    print(detail[4])
                    con.execute("update bank_detail set bal=? where ph=?",(detail[4],ph))
                    con.commit()
                    
                else:
                    print("Insufficient balance")             
                        
            elif option==3:
                print("Deposit")
                deposite=float(input("Enter the amount:"))
                detail[4]=deposite+detail[4]
                print(detail[4])
                con.execute("update bank_detail set bal=? where ph=?",(detail[4],ph))
                con.commit()
            elif option==4:
                print("ok")
                main()
            
            else:
              print("invalid option ")
              main()
            

                    
def main():           
   print("Hi this is JRD bank")
   print("1.sign in ")
   print("2.signup")
   print("3.exit")
   option=int(input("Enter the option:"))
   if option==1:
       signin()   
   elif option==2:
       signup()
   elif option == 3:
       print("Thank you")
   else:
      print("Invalid option try again")
      main()
main()

    
