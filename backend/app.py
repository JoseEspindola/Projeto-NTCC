import utils
from auth.routes import auth_bp

app = utils.criar_app()
app.secret_key = "chave-secreta"

# Registrar Blueprints
app.register_blueprint(auth_bp, url_prefix="/auth")

if __name__ == "__main__":
    app.run(debug=True)
