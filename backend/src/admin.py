import json

db_file = 'database.json'

#login

#master account -> access to make new accounts for ppl

#make new account

#delete account

# create new class
# creates new posting for a class (with full information)
def newClass(classtitle, instructor, date, time, desc, img1, img2, instructorImg):

    f = open(db_file, 'r+')
    data = json.load(f)

    data['classid'] += 1
    id = data['classid']

    newClass = {
        'classtitle': classtitle + str(data['classid']),
        'instructor': instructor,
        'date': date,
        'time': time,
        'desc': desc,
        'img1': img1,
        'img2': img2,
        'instructorImg': instructorImg
    }

    data['classes'][id] = newClass
    f.seek(0)
    json.dump(data, f, indent=4)
    return data['classid']

# get class info
# returns info about a class given  class id
# {classid, classtitle, instructor, date, time, desc, img1, img2, instructor2 }
def getClass(classid):

    f = open(db_file, 'r+')
    data = json.load(f)
    return

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

    
    





