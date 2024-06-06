from flask import Flask, jsonify, request
import json
from classes import getAllClasses
from admin import newClass, delClass
############################################################################
#                           FLASK + DATABASE
############################################################################

app = Flask(__name__)

db_file = 'database.json'

# API Routes

# stub code
@app.route("/test")
def test():
    f = open(db_file)
    data = json.load(f)
    return data

# get classes
@app.route("/getclasses")
def getClasses():
    return getAllClasses()

@app.route("/admin/newclass", methods=['POST'])
def newClassPost():
    """
        Parametres:
        {
            "classtitle": str,
            "instructor": str,
            "date": date,
            "time": time,
            "desc": str,
            "img1": img_url,
            "img2": img_url,
            "instructor_img": img_url,
        }
        returns:
            - listing_id
    """
    data = request.get_json()
    print(data)
    classtitle = data['classtitle']
    instructor = data['instructor']
    date = data['date']
    time = data['time']
    desc = data['desc']
    img1 = data['img1']
    img2 = data['img2']
    instructor_img = data['instimg']
    classid = newClass(classtitle, instructor, date, time, desc, img1, img2, instructor_img)
    return classid

@app.route("/admin/deleteclass", methods=["DELETE"])
def deleteClass():
    data = request.get_json()
    classid = data['classid']
    res = delClass(classid)
    return res

if __name__ == "__main__":
    app.run(debug=True)

