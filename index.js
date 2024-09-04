// Laden der Express-Bibliothek, um einen Webserver zu erstellen
const express = require('express');

// Initialisieren der App-Instanz
const app = express();

// Definieren der Haupt-Route ("/"), die eine Nachricht zurückgibt
// Dies ist die Seite, die aufgerufen wird, wenn jemand die Root-URL besucht
app.get('/', (req, res) => {
  // Senden einer einfachen Textantwort an den Browser
  res.send('API läuft!');
});

// Definieren eines Ports, auf dem der Server lauscht (Port 3000)
const PORT = 3000;

// Starten des Servers und Ausgabe einer Nachricht, dass er läuft
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

// Hinweis: Diese API hat nur eine einfache Route. Weitere Funktionen wie
// Datenbankanbindung und Spendenlogik können später hinzugefügt werden.
