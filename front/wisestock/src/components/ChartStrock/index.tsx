import { color } from "../../global/styles";
import { Container, WrapperTitle } from "./styles";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export interface DataChart {
  name: string;
  priceClosing: number;
  priceClosingStrock2?: number;
}

interface props {
  data: DataChart[];
  strock1: string;
  strock2?: string;
}

export function ChartStrock({ data, strock1, strock2 }: props) {
  const theme = color;

  return (
    <Container theme={theme}>
      <WrapperTitle>
        <h1>Histórico</h1>
      </WrapperTitle>

      {data ? (
        <ResponsiveContainer width="100%" aspect={window.innerWidth<1200? 4/2.5 :4}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={color.verdeClaro}
                  stopOpacity={0.8}
                />
                <stop offset="95%" stopColor={color.verde} stopOpacity={0} />
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={color.azulEscuro}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={color.azulEscuro}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="priceClosing"
              name={`Preço de ${strock1}`}
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="priceClosingStrock2"
              name={`Preço de ${strock2}`}
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <SkeletonTheme
          baseColor="rgb(255,255,255,0.05)"
          highlightColor="rgb(255,255,255,0.10)"
        >
          <Skeleton
            height={300}
            width={window.innerWidth-100}
            style={{ marginTop: 10 }}
          ></Skeleton>
        </SkeletonTheme>
      )}
    </Container>
  );
}
