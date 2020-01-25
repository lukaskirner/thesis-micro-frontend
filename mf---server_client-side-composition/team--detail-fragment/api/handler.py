import os
from requests import get
from flask import Flask, request, make_response, render_template
app = Flask(__name__, template_folder=f'{os.path.dirname(os.path.abspath(__file__))}/templates')

@app.route('/', methods=['GET'])
def default():
	x_path = request.headers.get('x-request-uri')
	if x_path:
		id = x_path.rsplit('/', 1)[-1]
		return detail(id)
	else:
		return '404 not found'

@app.route('/detail/<id>', methods=['GET'])
def detail(id):
	product = fetchData(f'products/{id}', {})
	discover_items = fetchData(f'discover/{id}', [])
	t = render_template('index.html', product=product, discover_items=discover_items)
	r = make_response(t)
	css = f'<{request.host_url}static/css/styles.css>; rel="stylesheet"'
	js = f'<{request.host_url}static/js/script.js>; rel="fragment-script"'
	r.headers.set('Link', f'{css}, {js}')
	return r
	

def fetchData(path, default):
	resp = get(f'{os.environ["BACKEND_URL"]}/{path}')
	if resp.ok:
		return resp.json()
	else:
		return default
