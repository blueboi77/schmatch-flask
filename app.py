import os
import json
from flask import Flask, render_template, request, redirect, url_for, flash, session
import markdown
from markupsafe import Markup

app = Flask(__name__)
app.secret_key = 'hmm'

SCHEME_REPO_PATH = './static/scheme-repo'

#routes
@app.route('/')
def fefault():
    return redirect(url_for('home'))

@app.route('/home')
def home():
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

@app.route("/scheme")
def scheme():
    query = request.args.get("search", "").lower()
    schemes = []
    if not os.path.exists(SCHEME_REPO_PATH):
        return schemes
    for filename in os.listdir(SCHEME_REPO_PATH):
        if filename.endswith(".json"):
            filepath = os.path.join(SCHEME_REPO_PATH, filename)
            with open(filepath, "r", encoding="utf-8") as file:
                try:
                    data = json.load(file)
                    scheme_data = data.get("pageProps", {}).get("schemeData", {}).get("en", {}).get("basicDetails", {})
                    name = scheme_data.get("schemeName") or scheme_data.get("schemeShortTitle") or "Unnamed Scheme"
                    description = data.get("pageProps", {}).get("schemeData", {}).get("en", {}).get("schemeContent", {}).get("briefDescription", "No description available.")
                    tags = scheme_data.get("tags", [])
                    schemes.append({
                        "name": name,
                        "description": description,
                        "tags": tags,
                        "filename": filename  # Store filename instead of full path
                    })
                except json.JSONDecodeError:
                    continue
    return render_template("scheme.html", schemes=schemes)

@app.route("/scheme/<filename>")
def scheme_detail(filename):
    filepath = os.path.join(SCHEME_REPO_PATH, filename)
    print(f"Requested: {filename}, Full Path: {filepath}")  # Debugging output
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as file:
            try:
                data = json.load(file)
                if "pageProps" in data and "schemeData" in data["pageProps"] and "en" in data["pageProps"]["schemeData"] and "schemeContent" in data["pageProps"]["schemeData"]["en"]:
                    markdown_content = data["pageProps"]["schemeData"]["en"]["schemeContent"].get("detailedDescription_md", "")
                    data["pageProps"]["schemeData"]["en"]["schemeContent"]["detailedDescription_md"] = Markup(markdown.markdown(markdown_content))  # Convert to HTML
                return render_template("scheme-detail.html", scheme=data)
            except json.JSONDecodeError:
                pass
    return "Scheme not found", 404

if __name__ == '__main__':
    app.run(debug=True)
