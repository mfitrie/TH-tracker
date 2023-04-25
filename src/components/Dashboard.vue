<template>
    <div class="flex justify-center items-center gap-20" style="height: 90vh;">
        <apexchart class="" width="580" type="donut" :options="donutChartData.options" :series="donutChartData.series"></apexchart>
        <apexchart type="bar" width="480" height="480" :options="barChartData.chartOptions" :series="barChartData.series"></apexchart>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import apexchart from 'vue3-apexcharts'

const donutChartData = ref({
    options: {},
    series: [44, 55, 41, 17, 15]
});

const barChartData = ref({
    series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'bar',
              events: {
                click: function(chart, w, e) {
                  // console.log(chart, w, e)
                }
              }
            },
            // colors: colors,
            plotOptions: {
              bar: {
                columnWidth: '45%',
                distributed: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            },
            xaxis: {
              categories: [
                ['John', 'Doe'],
                ['Joe', 'Smith'],
                ['Jake', 'Williams'],
                'Amber',
                ['Peter', 'Brown'],
                ['Mary', 'Evans'],
                ['David', 'Wilson'],
                ['Lily', 'Roberts'], 
              ],
              labels: {
                style: {
                //   colors: colors,
                  fontSize: '12px'
                }
              }
            }
          },
})

</script>