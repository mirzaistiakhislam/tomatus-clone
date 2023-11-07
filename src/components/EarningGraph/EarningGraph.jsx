
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';

const data = [
    { name: '2011', income: 1000, expenses: 1400 },
    { name: '2012', income: 2000, expenses: 2500 },
    { name: '2013', income: 3000, expenses: 3500 },
    { name: '2014', income: 4780, expenses: 5598 },
    { name: '2015', income: 5890, expenses: 6800 },
    { name: '2016', income: 6390, expenses: 7800 },
    { name: '2017', income: 7490, expenses: 8300 },
];

const EarningGraph = () => {
    return (
        <div className='bg-base-100 col-span-5 pt-10 px-6 pb-6 mr-6 relative text-white'>
            <div className='absolute text-sm font-bold top-6'>Earning Graph</div>
            <AreaChart
                width={480}
                height={180}
                data={data}
                margin={{
                    top: 5,
                    right: 20,
                    left: 20,
                    bottom: 5,
                }}

            >
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false}>
                    <Label value="Value" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} offset={-6} />
                </YAxis>
                <Tooltip />
                <Legend layout="horizontal" verticalAlign="top" align="right" iconType="circle" fontSize={6} />
                <Area type="monotone" dataKey="income" stroke="#A8752F" fill="#A8752F" />
                <Area type="monotone" dataKey="expenses" stroke="#DF5352" fill="#DF5352" />
            </AreaChart>
        </div>
    );
};

export default EarningGraph;
