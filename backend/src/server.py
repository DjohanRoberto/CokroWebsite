from flask import Flask

app = Flask(__name__)

# API Routes

# stub code
@app.route("/home")
def home():
    return

if __name__ == "__main__":
    app.run(debug=True)
