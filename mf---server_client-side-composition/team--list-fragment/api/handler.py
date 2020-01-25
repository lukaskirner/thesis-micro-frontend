import os
from requests import get
from flask import Flask, request, make_response, render_template
app = Flask(__name__, template_folder=f'{os.path.dirname(os.path.abspath(__file__))}/templates')

BACKEND_URL = 'https://mf-backend-service.lukaskirner.now.sh'

@app.route('/', methods=['GET'])
def default():
	items = fetchProductData("")
	return generate_template(items)

@app.route('/men', methods=['GET'])
def men():
	items = fetchProductData("men")
	return generate_template(items)

@app.route('/woman', methods=['GET'])
def woman():
	items = fetchProductData("woman")
	return generate_template(items)

def generate_template(items):
	t = render_template('index.html', basket_count=0, items=items)
	r = make_response(t)
	r.headers.set('Link', f'<{request.host_url}static/css/styles.css>; rel="stylesheet"')
	return r

def fetchProductData(path):
	resp = get(f'{BACKEND_URL}/{path}')
	if resp.ok:
		return resp.json()
	else:
		return []
