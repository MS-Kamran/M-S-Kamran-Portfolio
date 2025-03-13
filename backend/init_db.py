from app import app
from database import db
from models.project import Project
from models.blog import BlogPost
from datetime import datetime

def init_db():
    with app.app_context():
        # Create all tables
        db.create_all()
        
        # Add sample projects
        projects = [
            Project(
                title="ML Pipeline Automation",
                description="Automated ML pipeline using Apache Airflow and Docker",
                technologies=["Python", "Airflow", "Docker", "TensorFlow"],
                image_url="https://example.com/project1.jpg",
                github_url="https://github.com/example/project1",
                demo_url="https://demo.example.com/project1"
            ),
            Project(
                title="Real-time Data Processing",
                description="Real-time data processing system using Apache Kafka",
                technologies=["Kafka", "Spark", "Python", "Docker"],
                image_url="https://example.com/project2.jpg",
                github_url="https://github.com/example/project2",
                demo_url="https://demo.example.com/project2"
            ),
        ]
        
        # Add sample blog posts
        blog_posts = [
            BlogPost(
                title="The Future of Machine Learning",
                content="Machine learning is rapidly evolving...",
                category="Machine Learning",
                image_url="https://example.com/blog1.jpg"
            ),
            BlogPost(
                title="Building Scalable Data Pipelines",
                content="Data engineering is crucial for modern applications...",
                category="Data Engineering",
                image_url="https://example.com/blog2.jpg"
            ),
        ]
        
        # Add to database
        for project in projects:
            db.session.add(project)
        
        for post in blog_posts:
            db.session.add(post)
        
        # Commit changes
        db.session.commit()
        print("Database initialized with sample data!")

if __name__ == "__main__":
    init_db() 