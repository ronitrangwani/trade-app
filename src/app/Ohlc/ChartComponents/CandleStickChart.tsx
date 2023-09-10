import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { CandleStickChartProps } from "@/app/Utils/Types/constants.type";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const CandleStickChart = ({ series, tooltipValues }: CandleStickChartProps) => {
  const options: ApexOptions = {
    chart: {
      foreColor: "#ccc",
      events: {
        mouseMove: tooltipValues,
      },
    },
    grid: {
      borderColor: "#90A4AE",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    plotOptions: {
      candlestick: {
        wick: {
          useFillColor: true,
        },
        colors: {
          upward: "#46a781",
          downward: "#e44b44",
        },
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      opposite: true,
    },
  };

  return (
    <div id="chart">
      {series.length > 0 ? (
        <ReactApexChart
          options={options}
          series={[{ data: series }]}
          type="candlestick"
          height={"100%"}
          width={"100%"}
        />
      ) : (
        <div>Loading chart data...</div>
      )}
    </div>
  );
};

export default CandleStickChart;
