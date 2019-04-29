$(function () {

    function initSparkline1() {
        $('#sparkline1').sparkline(generateRandomArr(5), {
            width: '100%',
            fillColor: Sing.palette['brand-warning-light'],
            height: '100px',
            lineColor: 'transparent',
            spotColor: '#c0d0f0',
            minSpotColor: null,
            maxSpotColor: null,
            highlightSpotColor: '#ddd',
            highlightLineColor: '#ddd'
        }).sparkline(generateRandomArr(7), {
            composite: true,
            lineColor: 'transparent',
            spotColor: '#c0d0f0',
            fillColor: Sing.palette['brand-success-pale'],
            minSpotColor: null,
            maxSpotColor: null,
            highlightSpotColor: '#ddd',
            highlightLineColor: '#ddd'
        })

    }

    function initSparkline2() {
        $('#sparkline2').sparkline(generateRandomArr(4, 4, 15), {
            type: 'pie',
            width: '200px',
            height: '200px',
            sliceColors: Object.values(Sing.palette).slice(5),
            highlightLighten: 1.05
        });
    }

    function initSparkline3() {
        $('#sparkline3').sparkline(generateRandomArr(10, 10, 30), {
            type: 'line',
            width: '100%',
            height: '200px',
            lineColor: Sing.palette['brand-primary-light'],
            fillColor: Sing.palette['brand-primary-pale'],
            lineWidth: 2,
            spotColor: Sing.palette['brand-primary-pale'],
            minSpotColor: Sing.palette['brand-warning-light'],
            maxSpotColor: Sing.colors['brand-warning'],
            highlightSpotColor: Sing.palette['brand-primary-pale'],
            highlightLineColor: Sing.colors['white'],
            spotRadius: 1,
            chartRangeMin: 5,
            chartRangeMax: 7,
            normalRangeColor: Sing.colors['brand-primary'],
            drawNormalOnTop: true
        });
    }

    function initSparkline4() {
        let $chartContainer = $('#sparkline4');

        $chartContainer.sparkline(generateRandomArr(80, -150), {
            type: 'bar',
            height: '140px',
            width: '100%',
            barWidth: 6,
            barSpacing: 3,
            barColor: Sing.palette['brand-warning-light'],
            negBarColor: Sing.palette['brand-danger-light']
        });

        // Chrome and Safari fix for to set correct width to chart
        $chartContainer.find('canvas').css({width: $chartContainer.width()});
    }

    function initSparkline5() {
        let $chartContainer = $('#sparkline5');

        $chartContainer.sparkline(generateRandomArr(102, -1, 1), {
            type: 'tristate',
            height: '100px',
            width: '100%',
            posBarColor: Sing.palette['brand-warning-light'],
            negBarColor: Sing.palette['brand-info-light'],
            zeroBarColor: Sing.colors['gray-300'],
            barWidth: 5,
            barSpacing: 7,
            zeroAxis: true
        });

        // Chrome and Safari fix for to set correct width to chart
        $chartContainer.find('canvas').css({width: $chartContainer.width()});

    }

    function initSparkline6() {
        $('#sparkline6').sparkline(generateRandomArr(15, 10, 100, true), {
                width: '100%',
                height: '200px',
                lineColor: Sing.colors['brand-primary'],
                fillColor: false
            });
    }

    function initSparkline7() {
        $('#sparkline7').sparkline(generateRandomArr(2, 8, 15), {
            type: 'pie',
            width: '100px',
            height: '100px',
            sliceColors: [Sing.palette['brand-danger-light'], Sing.palette['brand-danger-pale']],
            highlightLighten: 1.1
        });
    }

    function pageLoad() {
        $('.widget').widgster();

        initSparkline1();
        initSparkline2();
        initSparkline3();
        initSparkline4();
        initSparkline5();
        initSparkline6();
        initSparkline7();
    }

    pageLoad();
    SingApp.onPageLoad(pageLoad);
    SingApp.onResize(pageLoad);
});

function generateRandomArr(length, min, max, isFloat) {
    let result = [];
    let maxDefault = 100;
    let minDefault = -100;
    let rand = 0;

    min = min === 0 ? 0 : (min || minDefault);
    max = max === 0 ? 0 : (max || maxDefault);

    for (let i = 0; i < length; i++) {
        rand = Math.random() * (Math.abs(result[i-1] / 10) || 1) * [min, max][i % 2];
        rand = rand < min ? min : rand;
        result.push(isFloat ? rand : Math.round(rand));
    }

    return result;
}