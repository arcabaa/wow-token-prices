import { FC, useEffect, useState } from 'react'
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

type Prices = {
    date: String,
    price: Number
}

const generateData = (): Array<Prices> => {
    let res: Array<Prices> = []

    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * (300000 - 100000) + 100000)
        if (i % 2) {
            res.push({ date: "12:00 AM", price: num })
        } else {
            res.push({ date: "6:00 PM", price: num })
        }
    }

    return res
}

export const useIsServerSide = () => {
    const [isServerSide, setIsServerSide] = useState(true)

    useEffect(() => {
        setIsServerSide(false)
    }, [setIsServerSide])

    return isServerSide
}

const PriceChart: FC = () => {
    const isServerSide = useIsServerSide()
    const data = generateData()
    if (isServerSide) return null

    return (
        <div>
            <LineChart width={600} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="date" />
                <YAxis domain={[ 100000, 300000 ]} />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
        </div>
    )
}

export default PriceChart