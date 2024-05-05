"use client"
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import jsonData from './temprature.json';

function GraphTemperature() {
  const svgRef = useRef();
  const tooltipRef = useRef(null);
  const xLineRef = useRef(null);
  const yLineRef = useRef(null);
  const monthCardRef = useRef(null);

  useEffect(() => {
    const data = jsonData.map(d => ({
        date: new Date(d.Year, 0),
        Tem: +d['�C']
    }));

    const svg = d3.select(svgRef.current);

    function drawChart(options) {
      svg.selectAll("*").remove();

      const { xAxisColor, yAxisColor, labelXColor, labelYColor, lineColor, dotColor } = options;

      const margin = { top: 20, right: 20, bottom: 50, left: 60 };
      const width = svgRef.current.clientWidth - margin.left - margin.right;
      const height = svgRef.current.clientHeight - margin.top - margin.bottom;

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Tem)])
        .nice()
        .range([height, 0]);

      const xScale = d3.scaleTime()
        .domain(d3.extent(data, d => d.date))
        .range([0, width]);

      const line = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.Tem));

      const chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const path = chartGroup.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', lineColor)
        .attr('stroke-width', 2)
        .attr('d', line);

        //if you all wants to change speed of graph building, change duration below
      path.transition()
        .duration(8000)
        .attrTween('d', function(d) {
          const interpolate = d3.interpolate(0, d.length);
          return function(t) {
            const slicedData = d.slice(0, interpolate(t));
            return line(slicedData);
          };
        });

      const xLine = chartGroup.append('line')
        .attr('class', 'x-line')
        .attr('stroke', 'white')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '4')
        .attr('x1', 0)
        .attr('x2', 0)
        .attr('y1', 0)
        .attr('y2', height)
        .style('opacity', 0);

      const yLine = chartGroup.append('line')
        .attr('class', 'y-line')
        .attr('stroke', 'white')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '4')
        .attr('x1', 0)
        .attr('x2', width)
        .attr('y1', 0)
        .attr('y2', 0)
        .style('opacity', 0);

      const tooltip = d3.select(tooltipRef.current);

      svg.on('mousemove', function(event) {
        const mouseX = d3.pointer(event)[0];
        const mouseY = d3.pointer(event)[1];
        const dateAtMouseX = xScale.invert(mouseX);
        const TemAtMouseY = yScale.invert(mouseY);
        const bisectDate = d3.bisector(d => d.date).left;
        const idx = bisectDate(data, dateAtMouseX, 1);
        const d = data[idx];

        if (d) {
          chartGroup.selectAll('.dot').remove();
          chartGroup.append('circle')
            .attr('class', 'dot')
            .attr('cx', xScale(d.date))
            .attr('cy', yScale(d.Tem))
            .attr('r', 4)
            .attr('fill', dotColor);
        
          xLine.attr('x1', xScale(d.date))
            .attr('x2', xScale(d.date))
            .style('opacity', 1);
        
          yLine.attr('y1', yScale(d.Tem))
            .attr('y2', yScale(d.Tem))
            .style('opacity', 1);
        
          const tooltipWidth = tooltipRef.current.offsetWidth;
          const tooltipHeight = tooltipRef.current.offsetHeight;
        
          tooltip.html(`<strong style="color: black;">Date:</strong> <span style="color: black;">${d.date.toLocaleString('default', { month: 'short' })} ${d.date.getFullYear()}</span><br><strong style="color: black;">°C:</strong> <span style="color: black;">${d.Tem}</span>`)
            .style('left', `${xScale(d.date) + margin.left}px`) // Position to the right of the data point
            .style('top', `${yScale(d.Tem) + margin.top + 50}px`) // Position further below the data point
            .style('opacity', 1);
        } else {
          chartGroup.selectAll('.dot').remove();
          xLine.style('opacity', 0);
          yLine.style('opacity', 0);
          tooltip.style('opacity', 0);
        }
      });

      svg.on('mouseleave', function() {
        chartGroup.selectAll('.dot').remove();
        xLine.style('opacity', 0);
        yLine.style('opacity', 0);
        tooltip.style('opacity', 0);
      });

      const xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat('%Y')).tickSizeOuter(0).tickPadding(10);
      const yAxis = d3.axisLeft(yScale).tickSizeOuter(0).tickPadding(10);

      chartGroup.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`)
        .call(xAxis)
        .selectAll("text")
          .attr("fill", labelXColor);

      chartGroup.append('g')
        .attr('class', 'y-axis')
        .call(yAxis)
        .selectAll("text")
          .attr("fill", labelYColor);

      svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.top + 40)
        .style("text-anchor", "middle")
        .text("Year")
        .style("fill", labelXColor);

      svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("ppm")
        .style("fill", labelYColor)
        .attr("dy", -margin.left / 2);

      svg.append("text")
        .attr("x", -(height / 2))
        .attr("y", margin.left / 4)
        .attr("transform", "rotate(-90)")
        .style("text-anchor", "middle")
        .text("°C")
        .style("fill", labelYColor);
    }
// see if both of you want to change colour of graphs components, you can do from code just below
    const defaultOptions = {
      xAxisColor: 'red',
      yAxisColor: 'blue',
      labelXColor: 'orange',
      labelYColor: 'orange',
      lineColor: 'orange',
      dotColor: 'yellow'
    };

    drawChart(defaultOptions);

    function handleResize() {
      drawChart(defaultOptions);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <h2 className="text-xl font-bold text-white-800 px-4 py-2 border-b border-white-200">Yearly Rise in Global Temperatures</h2>
        <svg ref={svgRef} style={{ width: '100%', height: '400px' }}></svg>
        <div ref={tooltipRef} id="tooltip" style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', backgroundColor: 'white', padding: '5px', border: '1px solid black', borderRadius: '5px' }}></div>
      </div>
    </div>
  );
}

export default GraphTemperature;