var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_highway_2 = new ol.format.GeoJSON();
var features_highway_2 = format_highway_2.readFeatures(json_highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2.addFeatures(features_highway_2);
var lyr_highway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_2, 
                style: style_highway_2,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_2.png" /> highway'
            });
var format_highway_3 = new ol.format.GeoJSON();
var features_highway_3 = format_highway_3.readFeatures(json_highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_3.addFeatures(features_highway_3);
var lyr_highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_3, 
                style: style_highway_3,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_3.png" /> highway'
            });
var format_highway_4 = new ol.format.GeoJSON();
var features_highway_4 = format_highway_4.readFeatures(json_highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_4.addFeatures(features_highway_4);
var lyr_highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_4, 
                style: style_highway_4,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_4.png" /> highway'
            });
var format_billdinghousebuilding_house_5 = new ol.format.GeoJSON();
var features_billdinghousebuilding_house_5 = format_billdinghousebuilding_house_5.readFeatures(json_billdinghousebuilding_house_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_billdinghousebuilding_house_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_billdinghousebuilding_house_5.addFeatures(features_billdinghousebuilding_house_5);
var lyr_billdinghousebuilding_house_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_billdinghousebuilding_house_5, 
                style: style_billdinghousebuilding_house_5,
                popuplayertitle: 'billding house — building_house',
                interactive: true,
                title: '<img src="styles/legend/billdinghousebuilding_house_5.png" /> billding house — building_house'
            });
var format_billdingbuilding_6 = new ol.format.GeoJSON();
var features_billdingbuilding_6 = format_billdingbuilding_6.readFeatures(json_billdingbuilding_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_billdingbuilding_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_billdingbuilding_6.addFeatures(features_billdingbuilding_6);
var lyr_billdingbuilding_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_billdingbuilding_6, 
                style: style_billdingbuilding_6,
                popuplayertitle: 'billding — building',
                interactive: true,
                title: '<img src="styles/legend/billdingbuilding_6.png" /> billding — building'
            });
var format_housebuilding_7 = new ol.format.GeoJSON();
var features_housebuilding_7 = format_housebuilding_7.readFeatures(json_housebuilding_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_housebuilding_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_housebuilding_7.addFeatures(features_housebuilding_7);
var lyr_housebuilding_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_housebuilding_7, 
                style: style_housebuilding_7,
                popuplayertitle: 'house — building',
                interactive: true,
                title: '<img src="styles/legend/housebuilding_7.png" /> house — building'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_highway_2.setVisible(true);lyr_highway_3.setVisible(true);lyr_highway_4.setVisible(true);lyr_billdinghousebuilding_house_5.setVisible(true);lyr_billdingbuilding_6.setVisible(true);lyr_housebuilding_7.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_highway_2,lyr_highway_3,lyr_highway_4,lyr_billdinghousebuilding_house_5,lyr_billdingbuilding_6,lyr_housebuilding_7];
lyr_highway_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ford': 'ford', 'horse': 'horse', 'motor_vehicle': 'motor_vehicle', 'locked': 'locked', 'noexit': 'noexit', 'capacity': 'capacity', 'traffic_signals:direction': 'traffic_signals:direction', 'material': 'material', 'kerb': 'kerb', 'vehicle': 'vehicle', 'lift_gate:type': 'lift_gate:type', 'maxspeed': 'maxspeed', 'network': 'network', 'crossing:markings': 'crossing:markings', 'access': 'access', 'button_operated': 'button_operated', 'crossing:signals': 'crossing:signals', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'name:zh': 'name:zh', 'historic': 'historic', 'name:en': 'name:en', 'ferry': 'ferry', 'amenity': 'amenity', 'tactile_paving': 'tactile_paving', 'lit': 'lit', 'bin': 'bin', 'bench': 'bench', 'traffic_sign': 'traffic_sign', 'maxheight': 'maxheight', 'crossing:island': 'crossing:island', 'entrance': 'entrance', 'shelter': 'shelter', 'public_transport': 'public_transport', 'name': 'name', 'bus': 'bus', 'alt_name': 'alt_name', 'traffic_signals:sound': 'traffic_signals:sound', 'crossing': 'crossing', 'traffic_signals': 'traffic_signals', });
lyr_highway_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'step_count': 'step_count', 'priority_road:forward': 'priority_road:forward', 'priority_road:backward': 'priority_road:backward', 'turn:lanes': 'turn:lanes', 'parking:lane:both': 'parking:lane:both', 'parking:lane:right': 'parking:lane:right', 'parking:lane:left': 'parking:lane:left', 'barrier': 'barrier', 'covered': 'covered', 'crossing:markings': 'crossing:markings', 'tunnel': 'tunnel', 'ice_road': 'ice_road', 'description': 'description', 'placement:backward': 'placement:backward', 'turn:lanes:forward': 'turn:lanes:forward', 'crossing': 'crossing', 'maxspeed:backward': 'maxspeed:backward', 'maxspeed:forward': 'maxspeed:forward', 'placement': 'placement', 'parking:right:orientation': 'parking:right:orientation', 'parking:right': 'parking:right', 'motor_vehicle': 'motor_vehicle', 'horse': 'horse', 'bicycle': 'bicycle', 'vehicle': 'vehicle', 'service': 'service', 'level': 'level', 'incline': 'incline', 'foot': 'foot', 'access': 'access', 'noname': 'noname', 'footway': 'footway', 'layer': 'layer', 'bridge': 'bridge', 'junction': 'junction', 'addr:postcode': 'addr:postcode', 'living_street': 'living_street', 'ref': 'ref', 'smoothness': 'smoothness', 'oneway': 'oneway', 'priority_road': 'priority_road', 'name:etymology:wikidata': 'name:etymology:wikidata', 'maxspeed': 'maxspeed', 'name:ru': 'name:ru', 'turn:lanes:backward': 'turn:lanes:backward', 'surface': 'surface', 'postal_code': 'postal_code', 'placement:forward': 'placement:forward', 'name:en': 'name:en', 'name': 'name', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'lanes': 'lanes', 'alt_name': 'alt_name', });
lyr_highway_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'oneway': 'oneway', 'motor_vehicle': 'motor_vehicle', 'lit': 'lit', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'access': 'access', 'amenity': 'amenity', 'building': 'building', 'landuse': 'landuse', 'name:ru': 'name:ru', 'layer': 'layer', 'surface': 'surface', 'type': 'type', 'place': 'place', 'name:pl': 'name:pl', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:en': 'name:en', 'name': 'name', });
lyr_billdinghousebuilding_house_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'source:addr': 'source:addr', 'start_date': 'start_date', 'height': 'height', 'building:levels': 'building:levels', 'addr:country': 'addr:country', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_billdingbuilding_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:parts': 'building:parts', 'sport': 'sport', 'unisex': 'unisex', 'toilets:handwashing': 'toilets:handwashing', 'toilets:disposal': 'toilets:disposal', 'access': 'access', 'building:part': 'building:part', 'preschool': 'preschool', 'content': 'content', 'payment:debit_cards': 'payment:debit_cards', 'payment:credit_cards': 'payment:credit_cards', 'payment:cash': 'payment:cash', 'tower:type': 'tower:type', 'bridge:structure': 'bridge:structure', 'voltage': 'voltage', 'substation': 'substation', 'location': 'location', 'historic': 'historic', 'landuse': 'landuse', 'brand:en': 'brand:en', 'opening_hours:signed': 'opening_hours:signed', 'addr:housename': 'addr:housename', 'fee': 'fee', 'takeaway': 'takeaway', 'drive_through': 'drive_through', 'atm': 'atm', 'addr:suburb': 'addr:suburb', 'addr:unit': 'addr:unit', 'parking': 'parking', 'loc_name': 'loc_name', 'fuel:octane_98': 'fuel:octane_98', 'fuel:octane_95': 'fuel:octane_95', 'fuel:octane_92': 'fuel:octane_92', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'contact:email': 'contact:email', 'construction': 'construction', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'noname': 'noname', 'intermittent': 'intermittent', 'roof:colour': 'roof:colour', 'roof:levels': 'roof:levels', 'generator:type': 'generator:type', 'generator:source': 'generator:source', 'generator:output:steam': 'generator:output:steam', 'generator:output:hot_water': 'generator:output:hot_water', 'generator:output:hot_air': 'generator:output:hot_air', 'generator:output:electricity': 'generator:output:electricity', 'generator:method': 'generator:method', 'frequency': 'frequency', 'harbour': 'harbour', 'ferry': 'ferry', 'name:sah': 'name:sah', 'man_made': 'man_made', 'building_1': 'building_1', 'administrative': 'administrative', 'architect': 'architect', 'smoking': 'smoking', 'cuisine': 'cuisine', 'public_transport': 'public_transport', 'bus': 'bus', 'contact:youtube': 'contact:youtube', 'contact:twitter': 'contact:twitter', 'contact:ok': 'contact:ok', 'contact:facebook': 'contact:facebook', 'addr2:street': 'addr2:street', 'addr2:housenumber': 'addr2:housenumber', 'power': 'power', 'disused:building': 'disused:building', 'residential': 'residential', 'alt_name': 'alt_name', 'short_name': 'short_name', 'religion': 'religion', 'denomination': 'denomination', 'description': 'description', 'name:zh': 'name:zh', 'wheelchair': 'wheelchair', 'ref:mkrf_theaters': 'ref:mkrf_theaters', 'operator': 'operator', 'opening_hours': 'opening_hours', 'shop': 'shop', 'name:de': 'name:de', 'theatre:type': 'theatre:type', 'official_name': 'official_name', 'contact:instagram': 'contact:instagram', 'healthcare': 'healthcare', 'website:booking': 'website:booking', 'website': 'website', 'phone': 'phone', 'name:et': 'name:et', 'email': 'email', 'contact:vk': 'contact:vk', 'contact:telegram': 'contact:telegram', 'government': 'government', 'theatre:genre': 'theatre:genre', 'addr:country': 'addr:country', 'name:ru': 'name:ru', 'amenity': 'amenity', 'source:addr': 'source:addr', 'education': 'education', 'energy_class': 'energy_class', 'roof:shape': 'roof:shape', 'start_date': 'start_date', 'building:flats': 'building:flats', 'tourism': 'tourism', 'office': 'office', 'name:en': 'name:en', 'leisure': 'leisure', 'addr:place': 'addr:place', 'name': 'name', 'layer': 'layer', 'height': 'height', 'type': 'type', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_housebuilding_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wheelchair': 'wheelchair', 'capacity': 'capacity', 'amenity': 'amenity', 'shelter': 'shelter', 'public_transport': 'public_transport', 'name': 'name', 'bus': 'bus', 'addr:flats': 'addr:flats', 'emergency:exit': 'emergency:exit', 'highway': 'highway', 'ref': 'ref', 'access': 'access', 'entrance': 'entrance', });
lyr_highway_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'ford': '', 'horse': '', 'motor_vehicle': '', 'locked': '', 'noexit': '', 'capacity': '', 'traffic_signals:direction': '', 'material': '', 'kerb': '', 'vehicle': '', 'lift_gate:type': '', 'maxspeed': '', 'network': '', 'crossing:markings': '', 'access': '', 'button_operated': '', 'crossing:signals': '', 'foot': '', 'bicycle': '', 'barrier': '', 'name:zh': '', 'historic': '', 'name:en': '', 'ferry': '', 'amenity': '', 'tactile_paving': '', 'lit': '', 'bin': '', 'bench': '', 'traffic_sign': '', 'maxheight': '', 'crossing:island': '', 'entrance': '', 'shelter': '', 'public_transport': '', 'name': '', 'bus': '', 'alt_name': '', 'traffic_signals:sound': '', 'crossing': '', 'traffic_signals': '', });
lyr_highway_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'step_count': '', 'priority_road:forward': '', 'priority_road:backward': '', 'turn:lanes': '', 'parking:lane:both': '', 'parking:lane:right': '', 'parking:lane:left': '', 'barrier': '', 'covered': '', 'crossing:markings': '', 'tunnel': '', 'ice_road': '', 'description': '', 'placement:backward': '', 'turn:lanes:forward': '', 'crossing': '', 'maxspeed:backward': '', 'maxspeed:forward': '', 'placement': '', 'parking:right:orientation': '', 'parking:right': '', 'motor_vehicle': '', 'horse': '', 'bicycle': '', 'vehicle': '', 'service': '', 'level': '', 'incline': '', 'foot': '', 'access': '', 'noname': '', 'footway': '', 'layer': '', 'bridge': '', 'junction': '', 'addr:postcode': '', 'living_street': '', 'ref': '', 'smoothness': '', 'oneway': '', 'priority_road': '', 'name:etymology:wikidata': '', 'maxspeed': '', 'name:ru': '', 'turn:lanes:backward': '', 'surface': '', 'postal_code': '', 'placement:forward': '', 'name:en': '', 'name': '', 'lanes:forward': '', 'lanes:backward': '', 'lanes': '', 'alt_name': '', });
lyr_highway_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'oneway': '', 'motor_vehicle': '', 'lit': '', 'horse': '', 'foot': '', 'bicycle': '', 'access': '', 'amenity': '', 'building': '', 'landuse': '', 'name:ru': '', 'layer': '', 'surface': '', 'type': '', 'place': '', 'name:pl': '', 'name:etymology:wikidata': '', 'name:en': '', 'name': '', });
lyr_billdinghousebuilding_house_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'source:addr': '', 'start_date': '', 'height': '', 'building:levels': '', 'addr:country': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_billdingbuilding_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building:parts': '', 'sport': '', 'unisex': '', 'toilets:handwashing': '', 'toilets:disposal': '', 'access': '', 'building:part': '', 'preschool': '', 'content': '', 'payment:debit_cards': '', 'payment:credit_cards': '', 'payment:cash': '', 'tower:type': '', 'bridge:structure': '', 'voltage': '', 'substation': '', 'location': '', 'historic': '', 'landuse': '', 'brand:en': '', 'opening_hours:signed': '', 'addr:housename': '', 'fee': '', 'takeaway': '', 'drive_through': '', 'atm': '', 'addr:suburb': '', 'addr:unit': '', 'parking': '', 'loc_name': '', 'fuel:octane_98': '', 'fuel:octane_95': '', 'fuel:octane_92': '', 'contact:website': '', 'contact:phone': '', 'contact:email': '', 'construction': '', 'internet_access:fee': '', 'internet_access': '', 'brand:wikidata': '', 'brand': '', 'noname': '', 'intermittent': '', 'roof:colour': '', 'roof:levels': '', 'generator:type': '', 'generator:source': '', 'generator:output:steam': '', 'generator:output:hot_water': '', 'generator:output:hot_air': '', 'generator:output:electricity': '', 'generator:method': '', 'frequency': '', 'harbour': '', 'ferry': '', 'name:sah': '', 'man_made': '', 'building_1': '', 'administrative': '', 'architect': '', 'smoking': '', 'cuisine': '', 'public_transport': '', 'bus': '', 'contact:youtube': '', 'contact:twitter': '', 'contact:ok': '', 'contact:facebook': '', 'addr2:street': '', 'addr2:housenumber': '', 'power': '', 'disused:building': '', 'residential': '', 'alt_name': '', 'short_name': '', 'religion': '', 'denomination': '', 'description': '', 'name:zh': '', 'wheelchair': '', 'ref:mkrf_theaters': '', 'operator': '', 'opening_hours': '', 'shop': '', 'name:de': '', 'theatre:type': '', 'official_name': '', 'contact:instagram': '', 'healthcare': '', 'website:booking': '', 'website': '', 'phone': '', 'name:et': '', 'email': '', 'contact:vk': '', 'contact:telegram': '', 'government': '', 'theatre:genre': '', 'addr:country': '', 'name:ru': '', 'amenity': '', 'source:addr': '', 'education': '', 'energy_class': '', 'roof:shape': '', 'start_date': '', 'building:flats': '', 'tourism': '', 'office': '', 'name:en': '', 'leisure': '', 'addr:place': '', 'name': '', 'layer': '', 'height': '', 'type': '', 'building:levels': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'address': '', });
lyr_housebuilding_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'wheelchair': '', 'capacity': '', 'amenity': '', 'shelter': '', 'public_transport': '', 'name': '', 'bus': '', 'addr:flats': '', 'emergency:exit': '', 'highway': '', 'ref': '', 'access': '', 'entrance': '', });
lyr_highway_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'ford': 'no label', 'horse': 'no label', 'motor_vehicle': 'no label', 'locked': 'no label', 'noexit': 'no label', 'capacity': 'no label', 'traffic_signals:direction': 'no label', 'material': 'no label', 'kerb': 'no label', 'vehicle': 'no label', 'lift_gate:type': 'no label', 'maxspeed': 'no label', 'network': 'no label', 'crossing:markings': 'no label', 'access': 'no label', 'button_operated': 'no label', 'crossing:signals': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'name:zh': 'no label', 'historic': 'no label', 'name:en': 'no label', 'ferry': 'no label', 'amenity': 'no label', 'tactile_paving': 'no label', 'lit': 'no label', 'bin': 'no label', 'bench': 'no label', 'traffic_sign': 'no label', 'maxheight': 'no label', 'crossing:island': 'no label', 'entrance': 'no label', 'shelter': 'no label', 'public_transport': 'no label', 'name': 'no label', 'bus': 'no label', 'alt_name': 'no label', 'traffic_signals:sound': 'no label', 'crossing': 'no label', 'traffic_signals': 'no label', });
lyr_highway_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'step_count': 'no label', 'priority_road:forward': 'no label', 'priority_road:backward': 'no label', 'turn:lanes': 'no label', 'parking:lane:both': 'no label', 'parking:lane:right': 'no label', 'parking:lane:left': 'no label', 'barrier': 'no label', 'covered': 'no label', 'crossing:markings': 'no label', 'tunnel': 'no label', 'ice_road': 'no label', 'description': 'no label', 'placement:backward': 'no label', 'turn:lanes:forward': 'no label', 'crossing': 'no label', 'maxspeed:backward': 'no label', 'maxspeed:forward': 'no label', 'placement': 'no label', 'parking:right:orientation': 'no label', 'parking:right': 'no label', 'motor_vehicle': 'no label', 'horse': 'no label', 'bicycle': 'no label', 'vehicle': 'no label', 'service': 'no label', 'level': 'no label', 'incline': 'no label', 'foot': 'no label', 'access': 'no label', 'noname': 'no label', 'footway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'junction': 'no label', 'addr:postcode': 'no label', 'living_street': 'no label', 'ref': 'no label', 'smoothness': 'no label', 'oneway': 'no label', 'priority_road': 'no label', 'name:etymology:wikidata': 'no label', 'maxspeed': 'no label', 'name:ru': 'no label', 'turn:lanes:backward': 'no label', 'surface': 'no label', 'postal_code': 'no label', 'placement:forward': 'no label', 'name:en': 'no label', 'name': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'lanes': 'no label', 'alt_name': 'no label', });
lyr_highway_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'oneway': 'no label', 'motor_vehicle': 'no label', 'lit': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'access': 'no label', 'amenity': 'no label', 'building': 'no label', 'landuse': 'no label', 'name:ru': 'no label', 'layer': 'no label', 'surface': 'no label', 'type': 'no label', 'place': 'no label', 'name:pl': 'no label', 'name:etymology:wikidata': 'no label', 'name:en': 'no label', 'name': 'no label', });
lyr_billdinghousebuilding_house_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'source:addr': 'no label', 'start_date': 'no label', 'height': 'no label', 'building:levels': 'no label', 'addr:country': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_billdingbuilding_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building:parts': 'no label', 'sport': 'no label', 'unisex': 'no label', 'toilets:handwashing': 'no label', 'toilets:disposal': 'no label', 'access': 'no label', 'building:part': 'no label', 'preschool': 'no label', 'content': 'no label', 'payment:debit_cards': 'no label', 'payment:credit_cards': 'no label', 'payment:cash': 'no label', 'tower:type': 'no label', 'bridge:structure': 'no label', 'voltage': 'no label', 'substation': 'no label', 'location': 'no label', 'historic': 'no label', 'landuse': 'no label', 'brand:en': 'no label', 'opening_hours:signed': 'no label', 'addr:housename': 'no label', 'fee': 'no label', 'takeaway': 'no label', 'drive_through': 'no label', 'atm': 'no label', 'addr:suburb': 'no label', 'addr:unit': 'no label', 'parking': 'no label', 'loc_name': 'no label', 'fuel:octane_98': 'no label', 'fuel:octane_95': 'no label', 'fuel:octane_92': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'contact:email': 'no label', 'construction': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'noname': 'no label', 'intermittent': 'no label', 'roof:colour': 'no label', 'roof:levels': 'no label', 'generator:type': 'no label', 'generator:source': 'no label', 'generator:output:steam': 'no label', 'generator:output:hot_water': 'no label', 'generator:output:hot_air': 'no label', 'generator:output:electricity': 'no label', 'generator:method': 'no label', 'frequency': 'no label', 'harbour': 'no label', 'ferry': 'no label', 'name:sah': 'no label', 'man_made': 'no label', 'building_1': 'no label', 'administrative': 'no label', 'architect': 'no label', 'smoking': 'no label', 'cuisine': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'contact:youtube': 'no label', 'contact:twitter': 'no label', 'contact:ok': 'no label', 'contact:facebook': 'no label', 'addr2:street': 'no label', 'addr2:housenumber': 'no label', 'power': 'no label', 'disused:building': 'no label', 'residential': 'no label', 'alt_name': 'no label', 'short_name': 'no label', 'religion': 'no label', 'denomination': 'no label', 'description': 'no label', 'name:zh': 'no label', 'wheelchair': 'no label', 'ref:mkrf_theaters': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'shop': 'no label', 'name:de': 'no label', 'theatre:type': 'no label', 'official_name': 'no label', 'contact:instagram': 'no label', 'healthcare': 'no label', 'website:booking': 'no label', 'website': 'no label', 'phone': 'no label', 'name:et': 'no label', 'email': 'no label', 'contact:vk': 'no label', 'contact:telegram': 'no label', 'government': 'no label', 'theatre:genre': 'no label', 'addr:country': 'no label', 'name:ru': 'no label', 'amenity': 'no label', 'source:addr': 'no label', 'education': 'no label', 'energy_class': 'no label', 'roof:shape': 'no label', 'start_date': 'no label', 'building:flats': 'no label', 'tourism': 'no label', 'office': 'no label', 'name:en': 'no label', 'leisure': 'no label', 'addr:place': 'no label', 'name': 'no label', 'layer': 'no label', 'height': 'no label', 'type': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_housebuilding_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wheelchair': 'no label', 'capacity': 'no label', 'amenity': 'no label', 'shelter': 'no label', 'public_transport': 'no label', 'name': 'no label', 'bus': 'no label', 'addr:flats': 'no label', 'emergency:exit': 'no label', 'highway': 'no label', 'ref': 'no label', 'access': 'no label', 'entrance': 'no label', });
lyr_housebuilding_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});