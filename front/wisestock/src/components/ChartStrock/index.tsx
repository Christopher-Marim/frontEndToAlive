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

export function ChartStrock() {
  const theme = color;

  const data = [
    { name: "01/2022", uv: 123, pv: 540, amt: 2400 },
    { name: "02/2022", uv: 456, pv: 542, amt: 2400 },
    { name: "03/2022", uv: 421, pv: 200, amt: 2400 },
    { name: "04/2022", uv: 45, pv: 800, amt: 2400 },
    { name: "05/2022", uv: 550, pv: 200, amt: 2400 },
    { name: "06/2022", uv: 400, pv: 1000, amt: 2400 },
    { name: "07/2022", uv: 200, pv: 200, amt: 2400 },
    { name: "08/2022", uv: 350, pv: 50, amt: 2400 },
    { name: "09/2022", uv: 600, pv: 900, amt: 2400 },
    { name: "10/2022", uv: 550, pv: 800, amt: 2400 },
  ];

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
          dataKey="uv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
  </ResponsiveContainer> 
    </Container>
  );
}
