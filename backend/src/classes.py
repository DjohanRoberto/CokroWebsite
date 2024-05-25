#######################################################
#                                                     #
#                   Classes Backend                   #
#                                                     #
#######################################################

import json

file = "database.json"

# Class Object:
# - classid (int)
# - classname (str)
# - instructor (str)
# - date (date)
# - time (time)
# - description (str)
# - img1 (img)
# - img2 (img)
# - instructorImg (img)

# creates new posting for a class (with full information)
def newClass(classtitle, instructor, date, time, desc, img1, img2, instructorImg):

    classid = 1 #TODO make id 
    data = {
        'classid': classid, 
        'classtitle': classtitle,
        'instructor': instructor,
        'date': date,
        'time': time,
        'desc': desc,
        'img1': img1,
        'img2': img2,
        'instructorImg': instructorImg
    }

    

    return

# returns info about class for display
def getClassInfo():
    return
    
# deletes an active class post
def deleteClass(classid): 
    return

# changes the info of an active class post
def editClass(classid):
    return

