# Importieren des Flask-Frameworks
from flask import Flask

# Initialisieren der App-Instanz
app = Flask(__name__)

# Definieren der Haupt-Route ("/"), die eine Nachricht zurückgibt
# Dies ist die Seite, die aufgerufen wird, wenn jemand die Root-URL besucht
@app.route('/')
def home():
    # Rückgabe einer einfachen Textantwort
    return "API läuft!"

# Definieren des Haupt-Entrypoints, um die App auf Port 5000 zu starten
if __name__ == "__main__":
    # Flask startet standardmäßig auf Port 5000 und hört auf alle IPs
    app.run(host='0.0.0.0', port=5000)

# Hinweis: Diese App kann später um weitere Routen und Funktionen erweitert werden.
# Weitere Optionen wären z.B. eine Spendenübersicht oder eine API für Affiliate-Links.
