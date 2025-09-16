import "../../../styles/index.css";

import { Label, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "../../ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../ui/chart";

const chartData = [
  { browser: "React", visitors: 80, fill: "#61DAFB" },
  { browser: "NotCompleted", visitors: 25, fill: "transparent" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  React: {
    label: "React",
    color: "#61DAFB",
  },
  NotCompleted: {
    label: "NotCompleted",
    color: "transparent",
  },
} satisfies ChartConfig;

export function PieChartSkillsReact() {
  return (
    <div>
      <Card>
        <ResponsiveContainer width={'100%'} height={'100%'} minWidth={200}>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[225px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-muted text-[22px] font-bold"
                            >
                              React
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              1 ano
                            </tspan>  
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
