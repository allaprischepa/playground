const chartOptions = {
  chart: {
    type: 'solidgauge',
    events: {
      render: 'renderIcons',
    },
    contextMenu: false,
  },
  title: {
    text: 'Chart with the tooltip',
    style: {
      fontSize: '24px',
    }
  },
  tooltip: {
    shadow: false,
    style: {
      fontSize: '16px',
    },
    valueSuffix: '%',
    pointFormat: `{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>`,
    positioner: function (labelWidth, labelHeight) {
      const chart = this.chart;
      const centerX = chart.plotWidth / 2;
      const centerY = chart.plotHeight / 2;
      const labelX = centerX - labelWidth / 2;
      const labelY = centerY + labelHeight / 4;
      return { x: labelX, y: labelY };
    }
  },
  pane: {
    startAngle: 0,
    endAngle: 360,
    background: [
      {
        outerRadius: '110%',
        innerRadius: '90%',
        backgroundColor: "rgba(3, 137,	156, 0.3)",
        borderWidth: 0
      }
    ]
  },
  yAxis: {
    min: 0,
    max: 100,
    lineWidth: 0,
    tickPositions: []
  },
  plotOptions: {
    solidgauge: {
      dataLabels: {
        enabled: false
      },
      linecap: 'round',
      stickyTracking: false,
      rounded: true
    }
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: 'Result',
      data: [
        {
          color: "rgba(3, 137,	156, 1)",
          radius: '110%',
          innerRadius: '90%',
          y: 78
        }
      ]
    }
  ]
}

Highcharts.chart('container', chartOptions);
