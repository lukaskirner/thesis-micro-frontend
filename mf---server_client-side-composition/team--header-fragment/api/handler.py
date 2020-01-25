import os
from flask import Flask, request, make_response, render_template
app = Flask(__name__, template_folder=f'{os.path.dirname(os.path.abspath(__file__))}/templates')


@app.route('/', methods=['GET'])
def default():
	return render_nav_template()

@app.route('/men', methods=['GET'])
def men():
	return render_nav_template(men_active='active')

@app.route('/woman', methods=['GET'])
def woman():
	return render_nav_template(woman_active='active')

def render_nav_template(**context):
	t = render_template('index.html', basket_count=0, **context)
	r = make_response(t)
	css = f'<{request.host_url}static/css/styles.css>; rel="stylesheet"'
	js = f'<{request.host_url}static/js/script.js>; rel="fragment-script"'
	r.headers.set('Link', f'{css}, {js}')
	return r
