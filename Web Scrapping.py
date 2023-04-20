#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import sqlite3 as s 
from collections import Counter
import datetime
import random
import urllib.request as u
import bs4
con=s.connect("project.db")
def createtable():
    con.execute("create table registration(userno varchar(100),username varchar(100),password varchar(100),email varchar(100),gender varchar(100),age int)")
    con.execute("create table login(loginid int,username varchar(100),password varchar(100),cudate datetime)")
def user():
    a=con.execute("select count(*) from registration").fetchall()
    return 0+(a[0][0]+1)
def createpassword():
    a=[x for x in range(0,9)]
    b=[chr(x) for x in range(ord('A'),ord('Z')+1)]
    c=[chr(x) for x in range(ord('a'),ord('z')+1)]
    d=list("+-*/!@")
    x=""
    for n in range(2):
        nu=random.choice(a)
        a.remove(nu)
        x+=str(nu)
        nu=random.choice(b)
        b.remove(nu)
        x+=nu
        nu=random.choice(c)
        c.remove(nu)
        x+=nu
        nu=random.choice(d)
        d.remove(nu)
        x+=nu
    x=list(x)
    random.shuffle(x)
    s="".join(x)
    return s
def createuser():
    number=user()
    username=input("enter the name")
    password=createpassword()
    email=input("enter the email")
    gender=input("enter the gender")
    age=int(input("enter the age"))
    con.execute("insert into registration(userno,username,password,email,gender,age)values(?,?,?,?,?,?)",(number,username,password,email,gender,age))
    con.commit()
    a=con.execute("select * from registration").fetchall()
    print(a)
def login():
    name=input("Enter your username")
    password=input("Enter your password")
    b=con.execute("select * from registration where username=? and password=?",(name,password)).fetchall()
    if len(b)==1:
        print("login successful")
        web()
    else:
        print("login failed")
def web():
    link="https://blog.hubspot.com/sales/famous-quotes"
    c=u.urlopen(link)
    t=bs4.BeautifulSoup(c,"html.parser")
    allwords=[]
    for each_text in t.findAll('div', {'class': 'hsg-featured-snippet__wrapper--content'}):
        htmltext = each_text.text
        words = htmltext.lower().split()
        for each_word in words:
            allwords.append(each_word)
    finalwords =[]
    for word in allwords:
        allsymbols = "!@#$%^&*()_-+={[}]|\;:\"<>?/., "
        for r in range(len(allsymbols)):
            nonsymbols = word.replace(allsymbols[r], '')
            if len(word) >6:
                finalwords.append(word)
    word_count = {}
    for word in finalwords:
        if word in word_count:
            word_count[word] += 1
        else:
            word_count[word] = 1
    countedwords = Counter(word_count)
    topwords = countedwords.most_common(5)
    tc={}
    for k in topwords:
        tc[k[0]]=k[1] 
    print(tc)
    excel(tc)
def excel(tc):
    import xlsxwriter as xl
    import os
    wb=xl.Workbook("project.xlsx")
    ws=wb.add_worksheet("webscrap")
    ws.write(0,0,"topwords")
    ws.write(0,1,"count")
    row=1
    col=0                                     
    for rc in tc.keys():
        ws.write(row,col,rc)
        ws.write(row,col+1,tc[rc])
        row+=1
    chart=wb.add_chart({"type":"pie"})
    chart.add_series({"categories":"=webscrap!A2:A6","values":"=webscrap!B2:B6"})
    ws.insert_chart("D5", chart)
    ws1=wb.add_worksheet("webscrap1")
    ws1.write(0,0,"topwords")
    ws1.write(0,1,"count")
    row=1
    col=0                                     
    for rc in tc.keys():
        ws1.write(row,col,rc)
        ws1.write(row,col+1,tc[rc])
        row+=1
    chart=wb.add_chart({"type":"column"})
    chart.add_series({"categories":"=webscrap1!A2:A6","values":"=webscrap1!B2:B6"})
    ws1.insert_chart("D5", chart)
    
    wb.close()
    os.system("start project.xlsx")

while 1:
    a=input("1.create 2.login")
    if a=="1" or a=="create":
        createuser()
    elif a=="2" or a=="login":  
        login()
    else:
        break       


# In[ ]:




