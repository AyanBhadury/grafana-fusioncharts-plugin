import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ZoomScatter from 'fusioncharts/fusioncharts.zoomscatter';
import ZoomLine from 'fusioncharts/fusioncharts.zoomline';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import FusionMaps from 'fusioncharts/fusioncharts.maps';
import USA from 'fusioncharts/maps/fusioncharts.usa';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Charts, Widgets, PowerCharts,ZoomScatter,ZoomLine,FusionMaps, USA,FusionTheme);

//@ts-ignore
FusionCharts.options['license']({
  key: 'vtA3dB-11wF2A2H2C7D6B5A3F4G4G1D2G1udnE6E1cgkF-7lB7B5F-11izE3E3G2A11C8D6B5B1F4E3F2I3C7B1E4B1mllA33A8B14ROKLJKYHROLDXDRI1f1YYGRe1BF1C2F1oreC7E2B4cetB8A7A5gyF-10D3G2F2A11D2A6F2C5B2C1C1G-7vvC1E5ED1fbqB11D7E6f1dB3E4C3maC5E7E4veB2H1J2saD3F3B1jxA3J1A5A1eevA4G1A26B7A5C3D2E6A1G2H5H1B1A5l==',
  creditLabel: false,
});

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
