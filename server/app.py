from flask import Flask, request
from flask_cors import CORS
from service.service import service 

app = Flask(__name__)
app.register_blueprint(service)
CORS(app)


@app.route('/')
def home():
    return 'Server is up! wellcome'


if(__name__ == "__main__"):
    app.run(debug=True)


# terminar as outras perguntas - OK
# alterar para query params