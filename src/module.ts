import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
  .addTextInput({
    path: 'chart_type',
    name: 'chart type',
    description: '',
    defaultValue: "",
  })
  .addTextInput({
    path: 'chart_ds',
    name: 'Datasource',
    description: 'Pass datasource of the chart in json format',
    defaultValue: "",
  });
});
