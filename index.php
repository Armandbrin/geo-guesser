<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossorigin="" />
    <title>geo-trouver</title>
</head>

<body>
    <div id="map"></div>
    <div id="map2" style="border: 1px solid black;"></div>
    <div id="result">
        <button id="button">Valider</button>
        <p id="resultat"></p>
        <p id="resultat3"></p>
        <p id="resultat2"></p>
        <a id="a" style="border: 1px solid black; padding: 15px; text-decoration:none; color: black; margin-top: 15px;" href="index.php">Reset</a>
    </div>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""></script>
    <script src="map.js"></script>
</body>

</html>