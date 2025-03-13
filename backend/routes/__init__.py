# This file makes the routes directory a Python package 

from .projects import bp as projects_bp
from .blog import bp as blog_bp
from .contact import bp as contact_bp
from .static import bp as static_bp

__all__ = ['projects_bp', 'blog_bp', 'contact_bp', 'static_bp'] 