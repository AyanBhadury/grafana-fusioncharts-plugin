import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  // const singleMaintenance:any = false
  return builder
    .addRadio({
      path: 'product_type',
      name: 'Select the visualisation',
      defaultValue: 'ft',
      settings: {
        options: [
          {
            value: 'fc',
            label: 'FusionCharts',
          },
          {
            value: 'ft',
            label: 'FusionTime',
          }
        ],
      }
    })
    .addTextInput({
      path: 'chart_type',
      name: 'chart type',
      description: '',
      defaultValue: "timeseries",
    })
    .addTextInput({
      path: 'chart_ds',
      name: 'Datasource',
      description: 'Pass datasource of the chart in json format',
      defaultValue: "",
      settings: {
        useTextarea: true,
        rows: 5,
      },
      showIf: c => true
    })
    .addTextInput({
      path: 'license_key',
      name: 'License Key',
      description: 'Pass the license key',
      defaultValue: "",
      settings: {
        useTextarea: true,
        rows: 2,
      }
    });
});
