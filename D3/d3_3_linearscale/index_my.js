// 选择svg
const svg = d3.select('.canvas')
    .append('svg')
    .attr("height", 600)
    .attr('width', 600)
const margin = {
    top: 20,
    right: 20,
    bottom: 100,
    left: 100
}
const graphWidth = 600 - margin.left - margin.rig
ht

const graphHeight = 600 - margin.top - margin.bottom

const graph = svg.append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left},${margin.top})`)

// scale
const y = d3.scaleLinear()

    .range([graphHeight, 0])

const x = d3.scaleBand()
    .range([0, 500])
    .paddingInner(0.1)
    .paddingOuter(0.1)


// updatefunction

const update = (data) => {
    // updating scale
    x.domain(data.map(item => item.name))
    y.domain([100, d3.max(data, d => d.orders)])
    const rects = graph.selectAll('rect')
        .data(data)

    // remove exit selection
    rects.exit().remove()
    rects.enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', d => graphHeight - y(d.orders))
        .attr('fill', 'orange')
        .attr('x', (d, i) => x(d.name))
        .attr('y', (d, i) => y(d.orders))
}

db.collection('dishes').get()
    // d3.json('menu.json')
    .then(

        res => {
            var data = []

            res.docs.forEach(
                item => {
                    data.push(item.data())
                }
            )
            const y = d3.scaleLinear()
                .domain([100, d3.max(data, d => d.orders)])
                .range([graphHeight, 0])



            const x = d3.scaleBand()
                .domain(data.map(item => item.name))
                .range([0, 500])
                .paddingInner(0.1)
                .paddingOuter(0.1)
            console.log(x('5555'))
            console.log(x.bandwidth())

            console.log(y(400))
            console.log(y(0))
            console.log(y(1200))




            rects.enter()
                .append('rect')
                .attr('width', x.bandwidth)
                .attr('height', d => graphHeight - y(d.orders))
                .attr('fill', 'orange')
                .attr('x', (d, i) => x(d.name))
                .attr('y', (d, i) => y(d.orders))

            const xAxisGroup = graph.append("g")
                .attr('transform', `translate(0,${graphHeight})`)
            const yAxisGroup = graph.append("g")
            const xAxis = d3.axisBottom(x)
            const yAxis = d3.axisLeft(y)
                .ticks(3)
                .tickFormat(d => d + ' orders')

            xAxisGroup.call(xAxis)
            yAxisGroup.call(yAxis)
            xAxisGroup.selectAll('text')
                .attr('transform', 'rotate(-40)')
                .attr('text-anchor', 'end')
                .attr('fill', 'red')
        }
    )

// 62922480
// 重庆市人才交流服务中心
// 办事大厅