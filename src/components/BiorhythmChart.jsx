import * as React from 'react';
import dayjs from 'dayjs';
import {
    CartesianGrid,
    Line,
    LineChart,
    ReferenceLine,
    ResponsiveContainer,
    XAxis
} from 'recharts';
import { calculateBioRhythmSeries } from '../calculations';
import './BiorhythmChart.css';

function formDate(isoString) {
    return dayjs(isoString).format('D MMM');
}

function Biorhythmchart({ birthDate, targetDate }) {
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBioRhythmSeries(birthDate, startDate, 31).map((item) => ({...item, date: formDate(item.date)}));

    return (
        <ResponsiveContainer width="100%" height={200} className="biorhythm-chart">
            <LineChart data={data}>
                <XAxis dataKey="date" ticks={[data[1].date, data[15].date, data[29].date]} />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <ReferenceLine x={data[15].date} />
                <Line dot={false} type="natural" dataKey="physical" className="physical" />
                <Line dot={false} type="natural" dataKey="emotional" className="emotional" />
                <Line dot={false} type="natural" dataKey="intellectual" className="intellectual" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Biorhythmchart;
