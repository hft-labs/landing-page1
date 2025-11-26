"use client";

import React, { useMemo } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart";

export interface TVLDataPoint {
  tvl: number;
  date: string;
}

export interface ChartDataPoint {
  date: string;
  tvl: number;
}

// Helper function to format numbers with dynamic units
function formatValue(value: number): { formatted: string; unit: string } {
  const absValue = Math.abs(value);
  
  if (absValue >= 1_000_000_000) {
    return {
      formatted: (value / 1_000_000_000).toFixed(1),
      unit: "B",
    };
  } else if (absValue >= 1_000_000) {
    return {
      formatted: (value / 1_000_000).toFixed(1),
      unit: "M",
    };
  } else if (absValue >= 1_000) {
    return {
      formatted: (value / 1_000).toFixed(1),
      unit: "k",
    };
  } else {
    return {
      formatted: value.toFixed(1),
      unit: "",
    };
  }
}

const chartConfig = {
  tvl: {
    label: "TVL",
    color: "#4B9CD3",
  },
} satisfies ChartConfig;

interface TVLChartProps {
  data: ChartDataPoint[];
  error?: string | null;
}

export function TVLChart({ data: tvlData, error }: TVLChartProps) {
  const { currentTVL, currentTVLUnit } = useMemo(() => {
    if (tvlData.length === 0) {
      return { currentTVL: "0", currentTVLUnit: "" };
    }
    const latestValue = tvlData[tvlData.length - 1]?.tvl || 0;
    const { formatted, unit } = formatValue(latestValue);
    return { currentTVL: formatted, currentTVLUnit: unit };
  }, [tvlData]);

  if (error) {
    return (
      <div className="w-full max-w-xl px-2">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.6em] text-white/40">
              Platform TVL
            </p>
            <h2 className="mt-3 text-5xl font-semibold text-white">Error</h2>
            <p className="text-sm text-red-400">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (tvlData.length === 0) {
    return (
      <div className="w-full max-w-xl px-2">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.6em] text-white/40">
              Platform TVL
            </p>
            <h2 className="mt-3 text-5xl font-semibold text-white">No Data</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl px-2">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-[0.75rem] uppercase tracking-[0.6em] text-white/40">
            Platform TVL
          </p>
          <h2 className="mt-3 text-5xl font-semibold text-white">
            ${currentTVL}{currentTVLUnit}
          </h2>
        </div>
      </div>

      <div className="mt-8">
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <AreaChart data={tvlData}>
            <defs>
              <linearGradient id="fillTvl" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#4B9CD3"
                  stopOpacity={0.38}
                />
                <stop
                  offset="60%"
                  stopColor="#B3DFFF"
                  stopOpacity={0.15}
                />
                <stop
                  offset="95%"
                  stopColor="rgba(255,255,255,0)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="4 6" 
              stroke="rgba(255,255,255,0.08)" 
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                });
              }}
              style={{
                fill: "rgba(255,255,255,0.5)",
                fontSize: "10px",
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const { formatted, unit } = formatValue(value);
                return `${formatted}${unit}`;
              }}
              style={{
                fill: "rgba(255,255,255,0.45)",
                fontSize: "10px",
              }}
            />
            <Area
              dataKey="tvl"
              type="natural"
              fill="url(#fillTvl)"
              stroke="#4B9CD3"
              strokeWidth={4}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
}
