from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///portfolio.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'your-secret-key')

# Initialize extensions
from database import db
db.init_app(app)
jwt = JWTManager(app)

# Import routes after app initialization to avoid circular imports
from routes import projects_bp, blog_bp, contact_bp, static_bp

# Register blueprints
app.register_blueprint(static_bp)
app.register_blueprint(projects_bp, url_prefix='/api/projects')
app.register_blueprint(blog_bp, url_prefix='/api/blog')
app.register_blueprint(contact_bp, url_prefix='/api/contact')

@app.route('/api/health')
def health_check():
    return jsonify({"status": "healthy"})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5001) 