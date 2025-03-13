from flask import Blueprint, jsonify, request
from models.contact import ContactMessage
from database import db

bp = Blueprint('contact', __name__, url_prefix='/api/contact')

@bp.route('/', methods=['POST'])
def create_contact_message():
    data = request.get_json()
    
    new_message = ContactMessage(
        name=data['name'],
        email=data['email'],
        message=data['message']
    )
    
    db.session.add(new_message)
    db.session.commit()
    
    return jsonify({
        'message': 'Message sent successfully',
        'id': new_message.id
    }), 201 