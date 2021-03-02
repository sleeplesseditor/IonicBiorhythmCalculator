import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  } from '@ionic/react';
import dayjs from 'dayjs';
import React from 'react';

function formatDate(isoString){
    return dayjs(isoString).format('D MMM YYYY');
}

const BiorhythmCard = ({ targetDate }) => {
    return (
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>

          </IonCardContent>
        </IonCard>
    )
}

export default BiorhythmCard;