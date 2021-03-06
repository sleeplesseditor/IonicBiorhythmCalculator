import dayjs from 'dayjs';

export function calculateBioRhythm(birthDate, targetDate, cycle) {
    const birthDay = dayjs(birthDate).startOf('day');
    const targetDay = dayjs(targetDate).startOf('day');
    const diff = targetDay.diff(birthDay, 'days');

    return Math.sin(2 * Math.PI * diff / cycle);
}

export function calculateBioRhythms(birthDate, targetDate) {
    return {
        physical: calculateBioRhythm(birthDate, targetDate, 23),
        emotional: calculateBioRhythm(birthDate, targetDate, 28),
        intellectual: calculateBioRhythm(birthDate, targetDate, 33)
    }
}