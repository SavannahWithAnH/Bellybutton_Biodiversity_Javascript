function buildGauge(wfreq) {
    
    var level = parseFloat(wfreq) * 20;
  
    
    var degrees = 180 - level;
    var radius = 0.5;
    var radians = (degrees * Math.PI) / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);
  
    
    var mainPath = 'M -.0 -0.05 L .0 0.05 L ';
    var pathX = String(x);
    var space = ' ';
    var pathY = String(y);
    var pathEnd = ' Z';
    var path = mainPath.concat(pathX, space, pathY, pathEnd);
  
    var data = [
      {
        type: 'scatter',
        x: [0],
        y: [0],
        marker: { size: 12, color: 'rgba(13, 13, 13, 0.93)' },
        showlegend: false,
        name: 'Frequancy',
        text: '',
        hoverinfo: 'text+name'
      },
      {
        values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
        rotation: 90,
        text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
        textinfo: 'text',
        textposition: 'inside',
        marker: {
          colors: [
            'rgba(11, 224, 188, 0.99)',
            'rgba(11, 224, 188, 0.88)',
            'rgba(11, 224, 188, 0.77)',
            'rgba(11, 224, 188, 0.66)',
            'rgba(11, 224, 188, 0.55)',
            'rgba(11, 224, 188, 0.44)',
            'rgba(11, 224, 188, 0.33)',
            'rgba(11, 224, 188, 0.22)',
            'rgba(11, 224, 188, 0.11)',
            'rgba(0, 0, 0, 0)'
          ]
        },
        labels: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
        hoverinfo: 'label',
        hole: 0.5,
        type: 'pie',
        showlegend: false
      }
    ];
  
    var layout = {
      shapes: [
        {
          type: 'path',
          path: path,
          fillcolor: 'rgba(13, 13, 13, 0.93)',
          line: {
            color: 'rgba(13, 13, 13, 0.93)'
          }
        }
      ],
      title: '<b>Belly Button Washing Frequency</b> <br> Scrubs per Week',
      height: 500,
      width: 500,
      xaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [-1, 1]
      },
      yaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [-1, 1]
      }
    };
  
    var GAUGE = document.getElementById('gauge');
    Plotly.newPlot(GAUGE, data, layout);
  }