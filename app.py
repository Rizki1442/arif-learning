from flask import Flask, render_template

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/pelajaran_mi')
def pelajaran_mi():
    return render_template('pelajaran_mi.html')

@app.route('/pelajaran_sd')
def pelajaran_sd():
    return render_template('pelajaran_sd.html')

@app.route('/erd')
def erd():
    return render_template('erd.html')

if __name__ == '__main__':
    app.run(debug=True)
