from flask import Flask, jsonify, request
from flask_bcrypt import Bcrypt
import json
from classes import getAllClasses, getClassInfo
from admin import newClass, delClass, updateClass
############################################################################
#                           FLASK + DATABASE                               #
############################################################################

app = Flask(__name__)
bcrypt = Bcrypt(app)

db_file = 'database.json'

# API Routes

# stub code
@app.route("/test")
def test():
    f = open(db_file)
    data = json.load(f)
    return data

############################################################################
#                           FLASK + DATABASE                               #
############################################################################

# get classes
@app.route("/getclasses", methods=['GET'])
def getClasses():
    return getAllClasses()

@app.route("/getclass", methods=["GET"])
def getClassDetails(): 
    id = request.args.get('classid')
    data = getClassInfo(id)
    return data

############################################################################
#                           FLASK + DATABASE                               #
############################################################################

@app.route("/admin/newclass", methods=['POST'])
def newClassPost():
    """
        Parametres:
        {
            "classtitle": str,
            "instructor": str,
            "date": date,
            "time": time,
            "slots": int,
            "price": int,
            "desc": str,
            "img1": img_url,
            "img2": img_url,
            "instructor_img": img_url,
        }
        returns:
            - listing_id
    """
    data = request.get_json()
    classtitle = data['classtitle']
    instructor = data['instructor']
    date = data['date']
    time = data['time']
    desc = data['desc']
    slots = data['slots']
    price = data['price']
    img1 = data['img1']
    img2 = data['img2']
    instructor_img = data['instimg']
    classid = newClass(classtitle, instructor, date, time, desc, slots, price, img1, img2, instructor_img)
    return str(classid)

@app.route("/admin/deleteclass", methods=["DELETE"])
def deleteClass():
    data = request.get_json()
    classid = data['classid']
    res = delClass(classid)
    return res

@app.route("/admin/updateclass", methods=["POST"])
def upClass():
    data = request.get_json()
    classObj =  {
        'classtitle': data['title'],
        'instructor': data['inst'],
        'date': data['date'],
        'time': data['time'],
        'desc': data['desc'],
        'slots': data['slots'],
        'price': data['price'],
        'img1': data['img1'],
        'img2': data['img2'],
        'instructorImg': data['instImg']
    }
    res = updateClass(data['id'], classObj)

    return res
 
############################################################################
#                           FLASK + DATABASE                               #
############################################################################

@app.route("/admin/login", methods=["POST"])
def adminlogin(): 
    username = request.args.get('usernname')
    password = request.args.get('password')
    token = adminLogin(username, password)
    return token

if __name__ == "__main__":
    app.run(debug=True)

