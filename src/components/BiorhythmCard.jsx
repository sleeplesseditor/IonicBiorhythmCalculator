import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  } from '@ionic/react';
import dayjs from 'dayjs';
import React from 'react';
import { calculateBioRhythms } from '../calculations';
import BioRhythmChart from './BiorhythmChart';

function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY');
}

const BiorhythmCard = ({ birthDate, targetDate }) => {
  const { physical, emotional, intellectual } = calculateBioRhythms(birthDate, targetDate)

    return (
        <IonCard className="biorhythm-card ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <BioRhythmChart birthDate={birthDate} targetDate={targetDate} />
            <p className="physical"> Physical: {physical.toFixed(4)}</p>
            <p className="emotional">Emotional: {emotional.toFixed(4)}</p>
            <p className="intellectual">Intellectual: {intellectual.toFixed(4)}</p>
          </IonCardContent>
        </IonCard>
    )
}

export default BiorhythmCard;