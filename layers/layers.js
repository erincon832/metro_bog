var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_bogota_LT5_97_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/metro_bogota/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "bogota_LT5_97",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "bogota_LT5_97",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_bogota_LT5_97_1, 0]);

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2da_linea_metro_3 = new ol.format.GeoJSON();
var features_2da_linea_metro_3 = format_2da_linea_metro_3.readFeatures(json_2da_linea_metro_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2da_linea_metro_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2da_linea_metro_3.addFeatures(features_2da_linea_metro_3);
var lyr_2da_linea_metro_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2da_linea_metro_3, 
                style: style_2da_linea_metro_3,
                popuplayertitle: "2da_linea_metro",
                interactive: true,
                title: '<img src="styles/legend/2da_linea_metro_3.png" /> 2da_linea_metro'
            });
var format_Cuenca_Alta_Rio_Bogota_4 = new ol.format.GeoJSON();
var features_Cuenca_Alta_Rio_Bogota_4 = format_Cuenca_Alta_Rio_Bogota_4.readFeatures(json_Cuenca_Alta_Rio_Bogota_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuenca_Alta_Rio_Bogota_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuenca_Alta_Rio_Bogota_4.addFeatures(features_Cuenca_Alta_Rio_Bogota_4);
var lyr_Cuenca_Alta_Rio_Bogota_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuenca_Alta_Rio_Bogota_4, 
                style: style_Cuenca_Alta_Rio_Bogota_4,
                popuplayertitle: "Cuenca_Alta_Rio_Bogota",
                interactive: true,
    title: 'Cuenca_Alta_Rio_Bogota<br />\
    <img src="styles/legend/Cuenca_Alta_Rio_Bogota_4_0.png" /> 0 - 0,0042<br />\
    <img src="styles/legend/Cuenca_Alta_Rio_Bogota_4_1.png" /> 0,0042 - 0,0084<br />\
    <img src="styles/legend/Cuenca_Alta_Rio_Bogota_4_2.png" /> 0,0084 - 0,0126<br />\
    <img src="styles/legend/Cuenca_Alta_Rio_Bogota_4_3.png" /> 0,0126 - 0,0168<br />\
    <img src="styles/legend/Cuenca_Alta_Rio_Bogota_4_4.png" /> 0,0168 - 0,0209<br />'
        });
var format_limite_intervencion_1ra_linea_metro_5 = new ol.format.GeoJSON();
var features_limite_intervencion_1ra_linea_metro_5 = format_limite_intervencion_1ra_linea_metro_5.readFeatures(json_limite_intervencion_1ra_linea_metro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_intervencion_1ra_linea_metro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_intervencion_1ra_linea_metro_5.addFeatures(features_limite_intervencion_1ra_linea_metro_5);
var lyr_limite_intervencion_1ra_linea_metro_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_intervencion_1ra_linea_metro_5, 
                style: style_limite_intervencion_1ra_linea_metro_5,
                popuplayertitle: "limite_intervencion_1ra_linea_metro",
                interactive: true,
                title: '<img src="styles/legend/limite_intervencion_1ra_linea_metro_5.png" /> limite_intervencion_1ra_linea_metro'
            });
var format_Adaptacion_Cambio_Climatico_6 = new ol.format.GeoJSON();
var features_Adaptacion_Cambio_Climatico_6 = format_Adaptacion_Cambio_Climatico_6.readFeatures(json_Adaptacion_Cambio_Climatico_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adaptacion_Cambio_Climatico_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adaptacion_Cambio_Climatico_6.addFeatures(features_Adaptacion_Cambio_Climatico_6);
var lyr_Adaptacion_Cambio_Climatico_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adaptacion_Cambio_Climatico_6, 
                style: style_Adaptacion_Cambio_Climatico_6,
                popuplayertitle: "Adaptacion_Cambio_Climatico",
                interactive: true,
                title: '<img src="styles/legend/Adaptacion_Cambio_Climatico_6.png" /> Adaptacion_Cambio_Climatico'
            });
var format_Viaducto_1ra_linea_metro_7 = new ol.format.GeoJSON();
var features_Viaducto_1ra_linea_metro_7 = format_Viaducto_1ra_linea_metro_7.readFeatures(json_Viaducto_1ra_linea_metro_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viaducto_1ra_linea_metro_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viaducto_1ra_linea_metro_7.addFeatures(features_Viaducto_1ra_linea_metro_7);
var lyr_Viaducto_1ra_linea_metro_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Viaducto_1ra_linea_metro_7, 
                style: style_Viaducto_1ra_linea_metro_7,
                popuplayertitle: "Viaducto_1ra_linea_metro",
                interactive: true,
                title: '<img src="styles/legend/Viaducto_1ra_linea_metro_7.png" /> Viaducto_1ra_linea_metro'
            });
var format_1ra_linea_metro_8 = new ol.format.GeoJSON();
var features_1ra_linea_metro_8 = format_1ra_linea_metro_8.readFeatures(json_1ra_linea_metro_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ra_linea_metro_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ra_linea_metro_8.addFeatures(features_1ra_linea_metro_8);
var lyr_1ra_linea_metro_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ra_linea_metro_8, 
                style: style_1ra_linea_metro_8,
                popuplayertitle: "1ra_linea_metro",
                interactive: true,
                title: '<img src="styles/legend/1ra_linea_metro_8.png" /> 1ra_linea_metro'
            });
var format_Estaciones_1ra_linea_metro_9 = new ol.format.GeoJSON();
var features_Estaciones_1ra_linea_metro_9 = format_Estaciones_1ra_linea_metro_9.readFeatures(json_Estaciones_1ra_linea_metro_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaciones_1ra_linea_metro_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_1ra_linea_metro_9.addFeatures(features_Estaciones_1ra_linea_metro_9);
var lyr_Estaciones_1ra_linea_metro_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciones_1ra_linea_metro_9, 
                style: style_Estaciones_1ra_linea_metro_9,
                popuplayertitle: "Estaciones_1ra_linea_metro",
                interactive: true,
                title: '<img src="styles/legend/Estaciones_1ra_linea_metro_9.png" /> Estaciones_1ra_linea_metro'
            });
var format_Estaciones_2da_linea_metro_10 = new ol.format.GeoJSON();
var features_Estaciones_2da_linea_metro_10 = format_Estaciones_2da_linea_metro_10.readFeatures(json_Estaciones_2da_linea_metro_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaciones_2da_linea_metro_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_2da_linea_metro_10.addFeatures(features_Estaciones_2da_linea_metro_10);
var lyr_Estaciones_2da_linea_metro_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciones_2da_linea_metro_10, 
                style: style_Estaciones_2da_linea_metro_10,
                popuplayertitle: "Estaciones_2da_linea_metro",
                interactive: true,
                title: '<img src="styles/legend/Estaciones_2da_linea_metro_10.png" /> Estaciones_2da_linea_metro'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_bogota_LT5_97_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_2da_linea_metro_3.setVisible(true);lyr_Cuenca_Alta_Rio_Bogota_4.setVisible(true);lyr_limite_intervencion_1ra_linea_metro_5.setVisible(true);lyr_Adaptacion_Cambio_Climatico_6.setVisible(true);lyr_Viaducto_1ra_linea_metro_7.setVisible(true);lyr_1ra_linea_metro_8.setVisible(true);lyr_Estaciones_1ra_linea_metro_9.setVisible(true);lyr_Estaciones_2da_linea_metro_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_bogota_LT5_97_1,lyr_OpenStreetMap_2,lyr_2da_linea_metro_3,lyr_Cuenca_Alta_Rio_Bogota_4,lyr_limite_intervencion_1ra_linea_metro_5,lyr_Adaptacion_Cambio_Climatico_6,lyr_Viaducto_1ra_linea_metro_7,lyr_1ra_linea_metro_8,lyr_Estaciones_1ra_linea_metro_9,lyr_Estaciones_2da_linea_metro_10];
lyr_2da_linea_metro_3.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'nombre': 'nombre', });
lyr_Cuenca_Alta_Rio_Bogota_4.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'area_ha': 'area_ha', 'tipo': 'tipo', 'nombre': 'nombre', 'acto_admin': 'acto_admin', 'orig_fid': 'orig_fid', 'categoria': 'categoria', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_limite_intervencion_1ra_linea_metro_5.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'nombre': 'nombre', 'shape.area': 'shape.area', 'shape.len': 'shape.len', });
lyr_Adaptacion_Cambio_Climatico_6.set('fieldAliases', {'qc_id': 'qc_id', 'bnfc': 'bnfc', 'fase': 'fase', 'item': 'item', 'localidad': 'localidad', 'medida': 'medida', });
lyr_Viaducto_1ra_linea_metro_7.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'nombre': 'nombre', });
lyr_1ra_linea_metro_8.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'nombre': 'nombre', });
lyr_Estaciones_1ra_linea_metro_9.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'nombre_com': 'nombre_com', 'número': 'número', 'nombre': 'nombre', 'tipo': 'tipo', });
lyr_Estaciones_2da_linea_metro_10.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'numero': 'numero', 'nombre': 'nombre', 'tipo': 'tipo', });
lyr_2da_linea_metro_3.set('fieldImages', {'qc_id': '', 'objectid': 'TextEdit', 'nombre': '', });
lyr_Cuenca_Alta_Rio_Bogota_4.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'TextEdit', 'area_ha': 'TextEdit', 'tipo': 'TextEdit', 'nombre': 'TextEdit', 'acto_admin': 'TextEdit', 'orig_fid': 'TextEdit', 'categoria': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_limite_intervencion_1ra_linea_metro_5.set('fieldImages', {'qc_id': '', 'objectid': '', 'nombre': '', 'shape.area': '', 'shape.len': '', });
lyr_Adaptacion_Cambio_Climatico_6.set('fieldImages', {'qc_id': '', 'bnfc': '', 'fase': '', 'item': '', 'localidad': '', 'medida': '', });
lyr_Viaducto_1ra_linea_metro_7.set('fieldImages', {'qc_id': '', 'objectid': '', 'nombre': '', });
lyr_1ra_linea_metro_8.set('fieldImages', {'qc_id': '', 'objectid': '', 'nombre': '', });
lyr_Estaciones_1ra_linea_metro_9.set('fieldImages', {'qc_id': '', 'objectid': '', 'nombre_com': '', 'número': '', 'nombre': '', 'tipo': '', });
lyr_Estaciones_2da_linea_metro_10.set('fieldImages', {'qc_id': '', 'objectid': '', 'numero': '', 'nombre': '', 'tipo': '', });
lyr_2da_linea_metro_3.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'nombre': 'no label', });
lyr_Cuenca_Alta_Rio_Bogota_4.set('fieldLabels', {'qc_id': 'inline label - visible with data', 'objectid': 'inline label - always visible', 'area_ha': 'inline label - always visible', 'tipo': 'no label', 'nombre': 'no label', 'acto_admin': 'no label', 'orig_fid': 'no label', 'categoria': 'no label', 'shape_leng': 'no label', 'shape_area': 'inline label - always visible', });
lyr_limite_intervencion_1ra_linea_metro_5.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'nombre': 'no label', 'shape.area': 'no label', 'shape.len': 'no label', });
lyr_Adaptacion_Cambio_Climatico_6.set('fieldLabels', {'qc_id': 'no label', 'bnfc': 'no label', 'fase': 'no label', 'item': 'no label', 'localidad': 'no label', 'medida': 'no label', });
lyr_Viaducto_1ra_linea_metro_7.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'nombre': 'no label', });
lyr_1ra_linea_metro_8.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'nombre': 'no label', });
lyr_Estaciones_1ra_linea_metro_9.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'inline label - always visible', 'nombre_com': 'no label', 'número': 'no label', 'nombre': 'no label', 'tipo': 'no label', });
lyr_Estaciones_2da_linea_metro_10.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'numero': 'no label', 'nombre': 'no label', 'tipo': 'no label', });
lyr_Estaciones_2da_linea_metro_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});