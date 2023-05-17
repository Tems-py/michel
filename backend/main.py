from flask import Flask, jsonify
from flask_restful import Resource, Api
from flaskext.mysql import MySQL

app = Flask(__name__)
api = Api(app)

app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'michel'

mysql = MySQL()
mysql.init_app(app)


class Course(Resource):
    def get(self):
        cursor = mysql.get_db().cursor()
        cursor.execute("SELECT id, category, subcategory FROM course")
        l = []
        for x in cursor.fetchall():
            l.append({'id': x[0], 'category': x[1], 'subcategory': x[2]})

        return jsonify(l)


class Pages(Resource):
    def get(self, id_page):
        cursor = mysql.get_db().cursor()
        cursor.execute("SELECT id, category, subcategory, content FROM course WHERE id = %s", (id_page,))
        x = cursor.fetchone()
        if not x:
            return jsonify(error="Page not found")
        l = {'id': x[0], 'category': x[1], 'subcategory': x[2]}

        return jsonify(l)


api.add_resource(Course, '/course')
api.add_resource(Pages, '/course/<int:id_page>')


if __name__ == "__main__":
    app.run()
