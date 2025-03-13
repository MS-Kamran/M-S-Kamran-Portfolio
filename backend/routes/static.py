from flask import Blueprint, send_from_directory
import os

bp = Blueprint('static', __name__)

@bp.route('/')
def serve():
    return send_from_directory('static', 'index.html')

@bp.route('/<path:path>')
def static_proxy(path):
    return send_from_directory('static', path) 