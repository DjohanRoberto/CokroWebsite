#######################################################
#                                                     #
#                   Classes Backend                   #
#                                                     #
#######################################################

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

import json

db_file = "database.json"

# returns info about a class for display
def getClassInfo(classid):
    f = open(db_file)
    data = json.load(f)
    return data['classes'][classid]

# returns class ids and basic info for all active classes
def getAllClasses():
    f = open(db_file)
    data = json.load(f)
    return data['classes']


