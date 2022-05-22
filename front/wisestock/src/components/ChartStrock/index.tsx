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

export interface DataChart {
  name:string;
  priceClosing:number;
  priceClosingStrock2?:number
}

interface props {
  data:DataChart[]
}

export function ChartStrock({data}:props) {
  const theme = color;


  return (
    <Container theme={theme}>
      <WrapperTitle>
        <h1>Histórico</h1>
      </WrapperTitle>

<ResponsiveContainer width='100%' aspect={4}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color.verdeClaro} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color.verde} stopOpacity={0} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color.azulEscuro} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color.azulEscuro} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis  />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="priceClosing"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="priceClosingStrock2"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
  </ResponsiveContainer> 
    </Container>
  );
}
