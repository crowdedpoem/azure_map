import Map from 'ol/Map';
import View from 'ol/View';

import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Icon, Style} from 'ol/style';

const raster = new TileLayer({
  source: new OSM(),
});

const iconFeature = new Feature({
  geometry: new Point([0, 0]),
  name: 'Null Island',
  population: 4000,
  rainfall: 500,
});

var wash = new Feature({
  geometry: new Point([-13592087.458075, 6052476.074551]),
});

var home = new Feature({
  geometry: new Point([-13567279.368940, 4531725.156410]),
});

var pune = new Feature({
  geometry: new Point([8264713.038841, 2113368.598040]),
});

pune.setStyle(
  new Style({
    image: new Icon({
      crossOrigin: 'anonymous',
      src: 'data/india.svg',
      scale: 0.025,
    }),
  })
);


home.setStyle(
  new Style({
    image: new Icon({
      crossOrigin: 'anonymous',
      src: 'data/california.svg',
      scale: 0.03,
    }),
  })
);

wash.setStyle(
  new Style({
    image: new Icon({
      crossOrigin: 'anonymous',
      src: 'data/washington.svg',
      scale: 0.03,
    }),
  })
);

const iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'data/icon.png',
  }),
});


const vectorSource = new VectorSource({
  features: [pune, wash , home],
});

const vector = new VectorLayer({
  // source: new VectorSource(),
  source: vectorSource,
  style: {
    'fill-color': 'rgba(255, 255, 255, 0.2)',
    'stroke-color': '#ffcc33',
    'stroke-width': 2,
    'circle-radius': 7,
    'circle-fill-color': '#ffcc33',
  },
});


const map = new Map({
  layers: [raster, vector],
  target: 'map',
  view: new View({
    center: [-13431882.463470, 4204826.404880],
    zoom: 6,
  }),
});
