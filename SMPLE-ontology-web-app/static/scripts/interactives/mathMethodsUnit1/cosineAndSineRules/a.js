JXG.Options.text.fontSize = '10px';
JXG.Options.text.cssDefaultStyle = 'font-family: Times New Roman';
JXG.Options.text.HighlightCssDefaultStyle = 'font-family: Times New Roman';
JXG.Options.grid.strokeColor = "#ccc";
JXG.Options.segment.HighlightStrokeColor = "#000";
JXG.Options.segment.HighlightStrokeWidth = 0.5;
JXG.Options.point.strokeColor = "#2caaca";
JXG.Options.circle.strokeColor = "#2caaca";
JXG.Options.circle.strokeWidth = 2.5;
JXG.Options.circle.highlightStrokeColor = "#2caaca";
JXG.Options.circle.highlightStrokeWidth = 2.5;
JXG.Options.angle.strokeColor = "#2caaca";
JXG.Options.angle.fillColor = "#2caaca";
JXG.Options.angle.label.Color = "#000";
JXG.Options.angle.highlightStrokeColor = "#2caaca";
JXG.Options.angle.highlightFillColor = "#2caaca";
JXG.Options.point.fillColor = "#2caaca";
JXG.Options.point.highlightFillColor = "#2caaca";
JXG.Options.point.highlightStrokeColor = "#2caaca";
JXG.Options.grid.strokeWidth = 0.4;
JXG.Options.slider.precision = 0;
JXG.Options.slider.baseline.strokeWidth = 2.5;
JXG.Options.slider.baseline.strokeColor = '#2caaca';
JXG.Options.slider.baseline.highlightStrokeColor = '#2caaca';
JXG.Options.slider.highline.strokeWidth = 2.5;
JXG.Options.slider.highline.strokeColor = '#2caaca';
JXG.Options.slider.highline.highlightStrokeColor = '#2caaca';
JXG.Options.slider.highlightStrokeColor = '#2caaca';
JXG.Options.slider.StrokeColor = '#2caaca';
JXG.Options.slider.highlightfillColor = '#2caaca';
JXG.Options.slider.ticks.strokeColor = '#2caaca';
JXG.Options.slider.ticks.strokeWidth = 2;
JXG.Options.slider.ticks.highlightstrokeColor = '#2caaca';
JXG.Options.slider.ticks.highlightstrokeWidth = 2;

a = JXG.JSXGraph.initBoard('boxa', {
  grid: false,
  showCopyright: false,
  showNavigation: false,
  axis: false,
  boundingbox: [-1.3, 1.5, 5.91, -1.5]
});
a.suspendUpdate();

var p1, p2, p3,p4, c, a3, s3, a2;

p1 = a.create('point', [0, 0], {
  fixed: true,
  name: ''
});
p2 = a.create('point', [1, 0], {
  fixed: true,
  name: ''
});
p3 = a.create('point', [0, 1], {
  name: ''
});

c1 = a.create('circle', [p1, p2]);

a3 = a.create('angle', [p2, p1, p3], {
  radius: 0.3,
  orthoType: 'sector',
  name: '\\(\\theta^{\\circ}\\)'
});

s3 = a.create('slider', [
  [-0.6, -0.5],
  [0.4, -0.5],
  [0, 57.6, 360]
]);

a3.setAngle(function() {
  return s3.Value() * Math.PI / 180;
});

a.create('segment', [
  [function() {
    return Math.cos(s3.Value() * Math.PI / 180)
  }, function() {
    return Math.sin(s3.Value() * Math.PI / 180)
  }],
  [function() {
    return (s3.Value() * 3.78 / 360 + 1.41)
  }, function() {
    return Math.sin(s3.Value() * Math.PI / 180)
  }]
], {
  strokeColor: '#000',
  strokeWidth: 0.5,
  dash: '1',
});

a.create('segment', [
  [function() {
    return Math.cos(s3.Value() * Math.PI / 180)
  }, 0],
  [function() {
    return Math.cos(s3.Value() * Math.PI / 180)
  }, function() {
    return Math.sin(s3.Value() * Math.PI / 180)
  }]
], {
  strokeColor: 'red',
  strokeWidth: 2,
  dash: '1',
});

a.create('segment', [
  [function() {
    return (s3.Value() * 3.78 / 360) + 1.41
  }, 0],
  [function() {
    return (s3.Value() * 3.78 / 360) + 1.41
  }, function() {
    return Math.sin(s3.Value() * Math.PI / 180)
  }]
], {
  strokeColor: 'red',
  strokeWidth: 2,
  dash: '1',
});

a.create('segment', [
  [1.41, 0],
  [5.41, 0]
], {
  strokeColor: '#000',
  strokeWidth: 0.5,
  fixed: true
});

a.create('segment', [
  [1.41, 1.2],
  [1.41, -1.2]
], {
  strokeColor: '#000',
  strokeWidth: 0.5,
  fixed: true
});

a.create('functiongraph', [function(x) {
  return 1 * Math.sin(1.658 * x - 2.33)
}, 1.41, function() {
  return (s3.Value() * 3.78 / 360) + 1.41
}], {
  strokeColor: '#2caaca',
  strokeWidth: 2.5,
  highlightStrokeColor: '#2caaca',
  highlightStrokeOpacity: 0.5
});

p4 = a.create('point', [1.41, 1.2], {
  name: '\\(y\\)',
  face: 'a',
  fixed: true,
  fillColor: '#000',
  strokeColor: '#000',
  highlightStrokeColor: '#000',
  highlightFillColor: '#000',
});

a.create('point', [1.41, -1.2], {
  name: '',
  face: 'v',
  fixed: true,
  fillColor: '#000',
  strokeColor: '#000',
  highlightStrokeColor: '#000',
  highlightFillColor: '#000',
});

a.create('point', [5.41, 0], {
  name: '\\(\\theta^{\\circ}\\)',
  face: '>',
  fixed: true,
  fillColor: '#000',
  strokeColor: '#000',
  highlightStrokeColor: '#000',
  highlightFillColor: '#000',
});

a.create('segment', [
  [1.37, 1],
  [1.45, 1]
], {
  strokeColor: '#000',
  strokeWidth: 0.5,
  fixed: true
});

a.create('segment', [
  [1.37, -1],
  [1.45, -1]
], {
  strokeColor: '#000',
  strokeWidth: 0.5,
  fixed: true
});

a.create('text', [1.28, 1, '1'], {
  strokeColor: '#000',
  fontSize: '16px',
  fixed: true
});

a.create('text', [1.22, -1, '-1'], {
  strokeColor: '#000',
  fontSize: '16px',
  fixed: true
});

a.create('segment', [
  [1.41+(3.78/4), 0.04],
  [1.41+(3.78/4), -0.055]
], {
  strokeColor: '#000',
  strokeWidth: 0.5,
  fixed: true
});

a.create('segment', [
  [1.41+(3.78/2), 0.04],
  [1.41+(3.78/2), -0.055]
], {
  strokeColor: '#000',
  strokeWidth: 0.5,
  fixed: true
});

a.create('segment', [
  [1.41+(3*3.78/4), 0.04],
  [1.41+(3*3.78/4), -0.055]
], {
  strokeColor: '#000',
  strokeWidth: 0.5,
  fixed: true
});

a.create('segment', [
  [1.41+3.78, 0.04],
  [1.41+3.78, -0.055]
], {
  strokeColor: '#000',
  strokeWidth: 0.5,
  fixed: true
});

a.create('text', [1.34+(3.78/4), -0.15, '90'], {
  strokeColor: '#000',
  fontSize: '16px',
  fixed: true
});

a.create('text', [1.28+(3.78/2), -0.15, '180'], {
  strokeColor: '#000',
  fontSize: '16px',
  fixed: true
});

a.create('text', [1.28+(3*3.78/4), -0.15, '270'], {
  strokeColor: '#000',
  fontSize: '16px',
  fixed: true
});

a.create('text', [1.28+3.78, -0.15, '360'], {
  strokeColor: '#000',
  fontSize: '16px',
  fixed: true
});

a.update();

a.unsuspendUpdate();

renderMathInElement(document.getElementById('boxa'))
