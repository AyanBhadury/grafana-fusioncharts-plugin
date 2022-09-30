# Grafana Panel Plugin Template

[![Build](https://github.com/grafana/grafana-starter-panel/workflows/CI/badge.svg)](https://github.com/grafana/grafana-starter-panel/actions?query=workflow%3A%22CI%22)

This plugin visualizes fusioncharts inside grafana panel

## Features -

* All charts that falls under FusionCharts suite are supported
* Dynamic chart type change
* Update data at the run time
* Passing license configuration 

## Upcoming Features -
* Support for FusionTime & FusionGrid
* Rendering charts using various timeseries datasources

## Getting started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Build plugin in development mode or run in watch mode

   ```bash
   yarn dev
   ```

   or

   ```bash
   yarn watch
   ```

3. Build plugin in production mode

   ```bash
   yarn build
   ```

## Learn more

- [Grafana documentation](https://grafana.com/docs/)
- [FusionCharts] (https://www.fusioncharts.com/dev/chart-guide/list-of-charts) -  List of all supported chart types
