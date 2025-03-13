from flask import Blueprint, jsonify, request
from models.project import Project
from database import db

bp = Blueprint('projects', __name__, url_prefix='/api/projects')

@bp.route('/', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([{
        'id': project.id,
        'title': project.title,
        'description': project.description,
        'technologies': project.technologies,
        'image_url': project.image_url,
        'github_url': project.github_url,
        'demo_url': project.demo_url
    } for project in projects])

@bp.route('/<int:project_id>', methods=['GET'])
def get_project(project_id):
    project = Project.query.get_or_404(project_id)
    return jsonify({
        'id': project.id,
        'title': project.title,
        'description': project.description,
        'technologies': project.technologies,
        'image_url': project.image_url,
        'github_url': project.github_url,
        'demo_url': project.demo_url
    }) 