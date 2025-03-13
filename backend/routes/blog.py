from flask import Blueprint, jsonify
from models.blog import BlogPost
from database import db

bp = Blueprint('blog', __name__, url_prefix='/api/blog')

@bp.route('/', methods=['GET'])
def get_blog_posts():
    posts = BlogPost.query.all()
    return jsonify([{
        'id': post.id,
        'title': post.title,
        'content': post.content,
        'category': post.category,
        'created_at': post.created_at.isoformat(),
        'image_url': post.image_url
    } for post in posts])

@bp.route('/<int:post_id>', methods=['GET'])
def get_blog_post(post_id):
    post = BlogPost.query.get_or_404(post_id)
    return jsonify({
        'id': post.id,
        'title': post.title,
        'content': post.content,
        'category': post.category,
        'created_at': post.created_at.isoformat(),
        'image_url': post.image_url
    }) 