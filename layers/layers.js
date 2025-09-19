var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Associations_1 = new ol.format.GeoJSON();
var features_Associations_1 = format_Associations_1.readFeatures(json_Associations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Associations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Associations_1.addFeatures(features_Associations_1);
cluster_Associations_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Associations_1
});
var lyr_Associations_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Associations_1, 
                style: style_Associations_1,
                popuplayertitle: 'Associations',
                interactive: true,
                title: '<img src="styles/legend/Associations_1.png" /> Associations'
            });
var format_CentreCommunaldActionSociale_2 = new ol.format.GeoJSON();
var features_CentreCommunaldActionSociale_2 = format_CentreCommunaldActionSociale_2.readFeatures(json_CentreCommunaldActionSociale_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentreCommunaldActionSociale_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentreCommunaldActionSociale_2.addFeatures(features_CentreCommunaldActionSociale_2);
cluster_CentreCommunaldActionSociale_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CentreCommunaldActionSociale_2
});
var lyr_CentreCommunaldActionSociale_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CentreCommunaldActionSociale_2, 
                style: style_CentreCommunaldActionSociale_2,
                popuplayertitle: 'Centre Communal d\'Action Sociale',
                interactive: true,
                title: '<img src="styles/legend/CentreCommunaldActionSociale_2.png" /> Centre Communal d\'Action Sociale'
            });
var format_MaisonsNordSolidarits_3 = new ol.format.GeoJSON();
var features_MaisonsNordSolidarits_3 = format_MaisonsNordSolidarits_3.readFeatures(json_MaisonsNordSolidarits_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaisonsNordSolidarits_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaisonsNordSolidarits_3.addFeatures(features_MaisonsNordSolidarits_3);
cluster_MaisonsNordSolidarits_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MaisonsNordSolidarits_3
});
var lyr_MaisonsNordSolidarits_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MaisonsNordSolidarits_3, 
                style: style_MaisonsNordSolidarits_3,
                popuplayertitle: 'Maisons Nord Solidarités',
                interactive: true,
                title: '<img src="styles/legend/MaisonsNordSolidarits_3.png" /> Maisons Nord Solidarités'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Associations_1.setVisible(true);lyr_CentreCommunaldActionSociale_2.setVisible(true);lyr_MaisonsNordSolidarits_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Associations_1,lyr_CentreCommunaldActionSociale_2,lyr_MaisonsNordSolidarits_3];
lyr_Associations_1.set('fieldAliases', {'Dispositif': 'Dispositif', 'Y': 'Y', 'X': 'X', 'Adresse': 'Adresse', 'Type': 'Type', });
lyr_CentreCommunaldActionSociale_2.set('fieldAliases', {'Centre Communal d\'Action Sociale': 'Centre Communal d\'Action Sociale', 'Y': 'Y', 'X': 'X', 'Adresse': 'Adresse', });
lyr_MaisonsNordSolidarits_3.set('fieldAliases', {'Maisons Nord Solidarités': 'Maisons Nord Solidarités', 'Y': 'Y', 'X': 'X', 'Adresse': 'Adresse', });
lyr_Associations_1.set('fieldImages', {'Dispositif': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Adresse': 'TextEdit', 'Type': 'TextEdit', });
lyr_CentreCommunaldActionSociale_2.set('fieldImages', {'Centre Communal d\'Action Sociale': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Adresse': 'TextEdit', });
lyr_MaisonsNordSolidarits_3.set('fieldImages', {'Maisons Nord Solidarités': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Adresse': 'TextEdit', });
lyr_Associations_1.set('fieldLabels', {'Dispositif': 'no label', 'Y': 'hidden field', 'X': 'hidden field', 'Adresse': 'no label', 'Type': 'no label', });
lyr_CentreCommunaldActionSociale_2.set('fieldLabels', {'Centre Communal d\'Action Sociale': 'no label', 'Y': 'hidden field', 'X': 'hidden field', 'Adresse': 'no label', });
lyr_MaisonsNordSolidarits_3.set('fieldLabels', {'Maisons Nord Solidarités': 'no label', 'Y': 'hidden field', 'X': 'hidden field', 'Adresse': 'no label', });
lyr_MaisonsNordSolidarits_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});