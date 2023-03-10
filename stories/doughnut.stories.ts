import 'chart.js/auto'
import { Doughnut } from '../src/index.js'
import * as doughnutChartConfig from '../sandboxes/doughnut/src/chartConfig.js'

export default {
  title: 'DoughnutChart',
  component: Doughnut,
  parameters: {
    layout: 'centered'
  }
}

export function Default(args) {
  return {
    components: { Doughnut },
    template: '<Doughnut v-bind="args" />',
    setup() {
      return { args }
    }
  }
}

Default.args = {
  id: 'doughnut-chart',
  width: 400,
  height: 400,
  ...doughnutChartConfig
}
