import os
import json
from flask import Flask, render_template, request, redirect, url_for, flash, session

app = Flask(__name__)
app.secret_key = 'hmm'

SCHEME_REPO_PATH = os.path.join(os.getcwd(), 'scheme-repo')

#routes
@app.route('/')
def fefault():
    return redirect(url_for('home'))

@app.route('/home')
def home():
    if 'name' in session:
        return render_template('home.html', name=session['name'])
    else:
        return render_template('home.html')

@app.route('/eligibility')
def eligibility():
    return render_template('eligibility.html')

@app.route('/search')
def search():
    schemes = []
    try:
        for filename in os.listdir(SCHEME_REPO_PATH):
            if filename.endswith('.json'):
                filepath = os.path.join(SCHEME_REPO_PATH, filename)
                with open(filepath, 'r') as file:
                    data = json.load(file)
                    schemes.append(data)
    except Exception as e:
        flash(f"Error loading schemes: {str(e)}")
    
    return render_template('search-display.htm', schemes=schemes)

if __name__ == '__main__':
    app.run(debug=True)
