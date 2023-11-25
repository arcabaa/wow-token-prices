'use client'
import React from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const PriceChart: React.FC = () => {
    const data = [
        { date: "11/01/2023", price: '315200' },
        { date: "11/02/2023", price: '323100' },
        { date: "11/03/2023", price: '317200' },
        { date: "11/04/2023", price: '298800' },
        { date: "11/05/2023", price: '309200' },
        { date: "11/06/2023", price: '300000' },
    ]

    return (
        <div>
            <LineChart width={600} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
        </div>
    )
}

export default PriceChart