const data = [
    { width: 200, height: 100, fill: '#1abc9c' },
    { width: 150, height: 70, fill: '#3498db' },
    { width: 100, height: 50, fill: '#e67e22' },
]

const svg = d3.select('svg')
// 这里是用function的写法
// const rect = svg.select('rect')
// .data(data)
// .attr('width',function(d,i,n){
//     console.log('d',d)
//     console.log('i',i)
//     console.log('ni',n[i])
//     console.log('normalthis',this) 
//     return d.width})
// .attr('height',function (d) {
//     console.log('arrowthis',this)
//     return d.height
// })
// .attr('fill',function(d){
// return d.fill
// }) 

// 这里是用function的写法
// 对已有的rect增加属性
const rects = svg.selectAll('rect')
    .data(data)

rects.attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .attr('fill', (d) => d.fill)
console.log(rects)

// 对未有的rect增加属性
rects.enter()
    .append('rect')
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .attr('fill', (d) => d.fill) 