import json
from datetime import datetime

db_file = 'database.json'

# login
def adminLogin(username, password): 
    f = open(db_file, 'r+')
    data = json.load(f)

    if username in data['accounts']:
        if password == data['accounts'][username]['password']:
            return 'true'
    return 'false'

# master account -> access to make new accounts for ppl

def checkMaster(username):
    f = open(db_file, 'r+')
    data = json.load(f)

    if username in data.accounts:
        if data.accounts[username].master == True:
            return True
        else :
            return False
    else: 
        return False
    
# make new account
def newAdminAcc(username, password, master):
    f = open(db_file, 'r+')
    data = json.load(f)

    if username not in data.accounts:
        data.accounts[username] = {
            "password": password,
            "master": master
        }

# delete account
def delAdminAcc(username):
    f = open(db_file, 'r+')
    data = json.load(f)

    if username in data.accounts:
        del data.accounts[username]


# create new class
# creates new posting for a class (with full information)
def newClass(classtitle, instructor, date, time, desc, slots, price, img1, img2, instructorImg):

    f = open(db_file, 'r+')
    data = json.load(f)

    id = datetime.now().strftime("%d%m%Y%H%M%S")
    print(id)

    newClass = {
        'classtitle': classtitle,
        'instructor': instructor,
        'date': date,
        'time': time,
        'desc': desc,
        'slots': slots,
        'price': price,
        'img1': img1,
        'img2': img2,
        'instructorImg': instructorImg
    }

    data['classes'][id] = newClass
    with open(db_file, 'w') as file:
        json.dump(data, file, indent=4)
    return data['classid']


# deletes a class by its id
# returns if it succeeded or not 0 for fail, 1 for success
def delClass(classid):

    with open(db_file, 'r') as file:
        data = json.load(file)

    before = len(data['classes'])

    del data['classes'][classid]

    after = len(data['classes'])

    with open(db_file, 'w') as file:
        json.dump(data, file, indent=4)

    return str(before - after)

# updates changes to an existing class
# takes in classObj
def updateClass(classid, classObj): 

    with open(db_file, 'r') as file:
        data = json.load(file)

    data['classes'][classid] = classObj

    with open(db_file, 'w') as file: 
        json.dump(data, file, indent=4)
        
    return classid
    





