import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: null,
  width: "100%",
  height: "100%",
  dataFormat: 'json',
  dataEmptyMessage: 'The data format that you are passing is incorrect or unavailable',
  containerBackgroundOpacity: "0",
  dataSource: null,
  events: null
};

interface Props extends PanelProps<SimpleOptions> { }

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {

  const styles = getStyles();

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}>
      {
        options.chart_type.length === 0 ? (
          "Please provide the data & the chart type"
        ) : Object.keys(options.chart_ds).length === 0 ? (
          "Please provide the data to render the chart"
        ) :
          <ReactFC {...chartConfigs}
            type={options.chart_type}
            dataSource={JSON.stringify(options.chart_ds)}
            events={{
              "beforeRender": (e: any) => {
                e.sender.setChartAttribute('bgAlpha', "0")
                e.sender.setChartAttribute('canvasBgAlpha', "0")
              }
            }} />
      }
    </div>

  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
