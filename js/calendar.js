var myChart = echarts.init(document.getElementById('calender'));

var hours = ['英语', '体育', '思修', '马克思', '毛泽东概论', '近代史', '空间信息导论', '高等数学', '计算机导论', '离散数学', '高级语言程序设计', '空间信息与数字技术基础', '多媒体处理与课件制作', '世界旅游风情', '地图制图学', '大学语文', '线性代数', '自然地理学', '电子商务基础', '数学建模', '空间数据库', '概率论与数理统计', '四大名著鉴赏', 'Photoshop图像处理', '地图代数', '虚拟地理环境', 'GPS测量原理与应用', '遥感原理与方法', 'GIS设计与开发', '专业外语', '空间决策与支持', '地理信息系统原理与方法', '空间信息移动服务', 'GIS空间分析', 'WebGIS技术'];
var days = ['公共课', '专业课', '选修课'];

var data = [
     [0, 0, 85], [1, 0, 97], [2, 0, 87], [3, 0, 85], [4, 0, 84], [5, 0, 86], [6, 1, 96], [7, 1, 72], [8, 1, 87], [9, 1, 74], [10, 1, 87], [11, 1, 77], [12, 2, 96], [13, 2, 87], [14, 1, 86], [15, 0, 79], [16, 1, 99], [17, 1, 74], [18, 1, 89], [19, 1, 85], [20, 1, 87], [21, 1, 79], [22, 2, 100], [23, 2, 87], [24, 1, 92], [25, 1, 97], [26, 1, 83], [27, 1, 74], [28, 1, 91], [29, 1, 94], [30, 1, 73], [31, 1, 88], [32, 1, 95], [33, 1, 86], [34, 1, 100]
];



data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    tooltip: {
        position: 'top'
    },
    title: {
        text: '成绩分布日历图',
        left: 'center',
    },
    animation: false,
    grid: {
        x: '15%',
        //        top:'1',
        //        bottom:'20',
        //        y: '1%',
        //        height:'50%'
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 70,
        max: 100,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '-10'
    },
    series: [{
        name: '分数',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

myChart.setOption(option);
window.onresize = function () {
    myChart.resize();
}
