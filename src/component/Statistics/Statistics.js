import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, Legend, ResponsiveContainer, YAxis } from 'recharts';
import './Statistics.css'
const Statistics = () => {
    const datas = useLoaderData();
    const statistic = datas.data;
    return (
        <div className='center'>
            <BarChart width={500} height={500} data={statistic}>
                <Bar dataKey="total" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>
        </div>
    );
};

export default Statistics;