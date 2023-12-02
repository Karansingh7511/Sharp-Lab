import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    // Clear previous chart
    d3.select(chartContainer.current).selectAll('*').remove();

    // D3 code for creating a pie chart
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(chartContainer.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal()
      .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b']);

    const arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    const pie = d3.pie()
      .sort(null)
      .value(d => d);

    const g = svg.selectAll('.arc')
      .data(pie(data))
      .enter().append('g')
      .attr('class', 'arc');

    g.append('path')
      .attr('d', arc)
      .style('fill', (d, i) => color(i));

    g.append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .text(d => d.data);
  }, [data]);

  return <div ref={chartContainer} />;
};

export default PieChart;
