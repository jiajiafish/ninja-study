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
];



// data = jsonData.filter(item=>item.sg_dep_id && item.sg_job_code)

// const stratify = d3.stratify()
// .id(d=>d.sg_job_code)
// .parentId(d=>d.sg_upper_level)

// const map = {}
// data.forEach(e => (map[e.sg_job_code] = map[e.sg_job_code]||[]).push(e));
// down_stream = Object.values(map)
// result = Object.keys(map).map((item,i)=>({"sg_job_code":item,"sg_upper_level":down_stream[i][0]['sg_upper_level'],'down_stream':down_stream[i],"count":down_stream[i].length}))
width = window.innerWidth
height = window.innerWidth
const svg = d3.select('.canvas').select("svg")
    .attr('width', width)
    .attr('height', height)
    .attr('style', "background:#f1f1f1")

const graph = svg.append('g')

transform = d3.zoomIdentity;
const stratify = d3.stratify()
    .id(d => d.name)
    .parentId(d => d.upper)

const tree = d3.tree()
    .size([width, height]);

const rootNode = stratify(data)
    .sum(d => d.amount)
const treeData = tree(rootNode).descendants();

console.log(treeData)



console.log(tree(rootNode))
const link = graph.selectAll('circle')
    .data(treeData.links())
    .enter()

console.log(link)



