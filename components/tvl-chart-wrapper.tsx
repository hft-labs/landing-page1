import { TVLChart } from "./tvl-chart";
import type { TVLDataPoint, ChartDataPoint } from "./tvl-chart";

const BASE_API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

async function fetchTVLData(): Promise<{ data: ChartDataPoint[]; error: string | null }> {
  try {
    const url = `https://www.hft.studio/platform/api/tvl`;
    const response = await fetch(url, {
      // Add cache control to ensure fresh data
      cache: "no-store",
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch TVL data: ${response.statusText}`);
    }
    
    const data: TVLDataPoint[] = await response.json();
    
    // Transform API data to chart format
    const transformedData: ChartDataPoint[] = data
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map((point) => ({
        date: point.date,
        tvl: point.tvl,
      }));
    
    return { data: transformedData, error: null };
  } catch (err) {
    console.error("Error fetching TVL data:", err);
    return {
      data: [],
      error: err instanceof Error ? err.message : "Failed to fetch TVL data",
    };
  }
}

export async function TVLChartWrapper() {
  const { data, error } = await fetchTVLData();

  return <TVLChart data={data} error={error} />;
}

