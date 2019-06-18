const data = [
    { name: '岗位A', upper: '' },
    { name: '岗位B', upper: '岗位A' },
    { name: '岗位C', upper: '岗位A' },
    { name: '岗位D', upper: '岗位A' },
    { name: '岗位1', upper: '岗位B', amount: 7 },
    { name: '岗位2', upper: '岗位B', amount: 5 },
    { name: '岗位3', upper: '岗位B', amount: 4 },
    { name: '岗位4', upper: '岗位B', amount: 6 },
    { name: '岗位5', upper: '岗位B', amount: 3 },
    { name: '岗位6', upper: '岗位B', amount: 3 },
    { name: '岗位7', upper: '岗位C', amount: 6 },
    { name: '岗位8', upper: '岗位C', amount: 3 },
    { name: '岗位9', upper: '岗位C', amount: 5 },
    { name: '岗位z', upper: '岗位C', amount: 6 },
    { name: '岗位x', upper: '岗位C', amount: 1 },
    { name: '岗位c', upper: '岗位D', amount: 3 },
    { name: '岗位v', upper: '岗位D', amount: 2 },
    { name: '岗位b', upper: '岗位D', amount: 5 },
    { name: '岗位n', upper: '岗位D', amount: 2 },
    { name: '岗位m', upper: '岗位D', amount: 3 },
    { name: '岗位l', upper: '岗位D', amount: 5 },
    { name: '岗位lm', upper: '岗位l', amount: 5 },
    { name: '岗位ln', upper: '岗位l', amount: 5 },
    { name: '岗位lb', upper: '岗位l', amount: 5 },
    { name: '岗位mm', upper: '岗位m', amount: 5 },
    { name: '岗位mn', upper: '岗位m', amount: 5 },
    { name: '岗位mk', upper: '岗位m', amount: 5 },
];



// data = jsonData.filter(item=>item.sg_dep_id && item.sg_job_code)

// const stratify = d3.stratify()
// .id(d=>d.sg_job_code)
// .parentId(d=>d.sg_upper_level)

// const map = {}
// data.forEach(e => (map[e.sg_job_code] = map[e.sg_job_code]||[]).push(e));
// down_stream = Object.values(map)
// result = Object.keys(map).map((item,i)=>({"sg_job_code":item,"sg_upper_level":down_stream[i][0]['sg_upper_level'],'down_stream':down_stream[i],"count":down_stream[i].length}))
width = 2000
height = window.innerHeight
console.log(data.length)
const svg = d3.select('.canvas')
    .append("svg")
    .attr('width', width + 100)
    .attr('height', height + 100)
    .attr('style', "background:#f1f1f1")

const graph = svg.append('g')

transform = d3.zoomIdentity;
const stratify = d3.stratify()
    .id(d => d.name)
    .parentId(d => d.upper)

const tree = d3.tree()
    .size([data.length * 250, height * 2]);

const rootNode = stratify(data)
    .sum(d => d.amount)
const treeData = tree(rootNode).descendants();
const linkData = tree(rootNode).links();
console.log(linkData)



const nodes = graph.selectAll('.node')
    .data(treeData)

const link = graph.selectAll('.link')
    .data(linkData)

svg.call(d3.zoom()
    .scaleExtent([1 / 4, 8])
    .on("zoom", zoomed));

function zoomed() {
    graph.attr("transform", d3.event.transform);
}

console.log(link)

const colour = d3.scaleOrdinal(['#e8e8e8', '#5588a3', '#145374', '#00334e']);

link.enter()
    .append('path')
    .transition().duration(300)
    .attr('class', 'link')
    .attr('fill', 'none')
    .attr('stroke', '#aaa')
    .attr('stroke-width', 2)
    .attr('d', line2);


var line2 = d3.line()
    .x(function (d) {
        return d.source;
    })
    .y(function (d) {
        return d.target;
    })
    .curve(d3.curveStep);



const enterNodes = nodes.enter()
    .append('g')
    .attr('class', 'node')
    .attr('transform', d => `translate(${d.x}, ${d.y})`);



enterNodes.append('rect')
    .attr('fill', d => colour(d.data.upper))
    .attr('stroke', '#555')
    .attr('stroke-width', 1)
    .attr('width', d => d.data.name.length * 60)
    .attr('height', 100)
    .attr('rx', 5)
    .attr('ry', 5)
    .attr('transform', (d, i, n) => {
        let x = (d.data.name.length * 30);
        return `translate(${-x}, -25)`
    });

enterNodes
    .append('div')
    .style("position", 'absolute')
    .style('left', 300)
    .style('top', 200)
    .style("width", 300)
    .style('height', 200)
    .style("background", "black")



enterNodes.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', 5)
    .attr('fill', 'white')
    .text(d => d.data.name + (d.data.amount ? "__" + d.data.amount : ""))

// 直线生成器

lineGenerator = d3.line()
    .x(function (d) {
        return d[0]
    })
    .y(function (d) {
        return d[1];
    });

    