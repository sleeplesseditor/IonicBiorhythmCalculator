import dayjs from 'dayjs';

export function calculateBioRhythm(birthDate, targetDate, cycle) {
    const birthDay = dayjs(birthDate).startOf('day');
    const targetDay = dayjs(targetDate).startOf('day');
    const diff = targetDay.diff(birthDay, 'days');

    return Math.sin(2 * Math.PI * diff / cycle);
}

export function calculateBioRhythms(birthDate, targetDate) {
    return {
        date: targetDate,
        physical: calculateBioRhythm(birthDate, targetDate, 23),
        emotional: calculateBioRhythm(birthDate, targetDate, 28),
        intellectual: calculateBioRhythm(birthDate, targetDate, 33)
    }
}

export function calculateBioRhythmSeries(birthDate, startDate, size) {
    const series = [];
    const startDay = dayjs(startDate).startOf('day');
    for(let i = 0; i < size; i++) {
        const targetDate =  startDay.add(i, 'days').toISOString();
        series.push(calculateBioRhythms(birthDate, targetDate));
    }

    return series;
}