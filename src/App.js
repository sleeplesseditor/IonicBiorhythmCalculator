import {
  IonApp,
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import BiorhythmCard from './components/BiorhythmCard';
import * as React from 'react';

function App({}) {
  const [date, setDate] = React.useState('');
  const targetDate = new Date().toISOString();

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel>Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="DD-MM-YYYY"
            onIonChange={(e) => setDate(e.detail.value)}
            position="floating"
            value={date} 
          />
        </IonItem>
        <BiorhythmCard 
          targetDate={targetDate}
        />
      </IonContent>
    </IonApp>
  );
}

export default App;