import { FC, useEffect, useState } from 'react'
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import '../app/globals.css'

type PriceData = {
    date: String,
    price: Number
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const dateAndTimeSplit = label.split(' ')
        const date = dateAndTimeSplit[0]
        const time = `${dateAndTimeSplit[1]} ${dateAndTimeSplit[2]}`

        return (
        <div className="custom-tooltip">
            <p>{`Date: ${date}`}</p>
            <p>{`Time: ${time}`}</p>
            <p className="label">{`Price: ${payload[0].value}g`}</p>
        </div>
        );
    }
  
    return null;
  };

const generateData = (): Array<PriceData> => {
    let res: Array<PriceData> = []

    let num: Number = Math.floor(Math.random() * (300000 - 100000) + 100000)
    res.push({ date: "12/30/23 12:00 PM", price: num })
    let num2: Number = Math.floor(Math.random() * (300000 - 100000) + 100000)
    res.push({ date: "12/30/23 3:00 PM", price: num2 })
    let num3: Number = Math.floor(Math.random() * (300000 - 100000) + 100000)
    res.push({ date: "12/30/23 6:00 PM", price: num3 })
    let num4: Number = Math.floor(Math.random() * (300000 - 100000) + 100000)
    res.push({ date: "12/30/23 9:00 PM", price: num4 })
    let num5: Number = Math.floor(Math.random() * (300000 - 100000) + 100000)
    res.push({ date: "12/31/23 12:00 PM",price: num5 })
    let num6: Number = Math.floor(Math.random() * (300000 - 100000) + 100000)
    res.push({ date: "12/31/23 3:00 PM", price: num6 })
    let num7: Number = Math.floor(Math.random() * (300000 - 100000) + 100000)
    res.push({ date: "12/31/23 6:00 PM", price: num7 })
    let num8: Number = Math.floor(Math.random() * (300000 - 100000) + 100000)
    res.push({ date: "12/31/23 9:00 PM", price: num8 })
    let num9: Number = Math.floor(Math.random() * (300000 - 100000) + 100000)
    res.push({ date: "01/01/24 12:00 PM", price: num9 })
    let num10: Number = Math.floor(Math.random() * (300000 - 100000) + 100000)
    res.push({ date: "01/01/24 3:00 PM", price: num10 })
    return res
}

export const useIsServerSide = (): boolean => {
    const [isServerSide, setIsServerSide] = useState(true)

    useEffect(() => {
        setIsServerSide(false)
    }, [setIsServerSide])

    return isServerSide
}

const PriceChart: FC = () => {
    const [screenWidth, setScreenWidth] = useState(0)

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    }, [])

    const isServerSide = useIsServerSide()
    const data = generateData()

    if (isServerSide) return null
    return (
        <div className="mt-20">
            <LineChart width={screenWidth - 400} height={400} data={data}>
                <XAxis dataKey="date" stroke="#b1aa9e" />
                <YAxis stroke='#b1aa9e' />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey='price' stroke="#b1aa9e" dot={false} />
            </LineChart>
        </div>
    )
}

export default PriceChart