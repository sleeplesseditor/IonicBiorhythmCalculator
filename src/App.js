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
import { useLocalStorage } from './hooks';
import * as React from 'react';

function App({}) {
  const [birthDate, setBirthDate] = useLocalStorage('birthDate', '');
  const [targetDate, setTargetDate] = React.useState(new Date().toISOString());

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {birthDate && <BiorhythmCard
          birthDate={birthDate}
          targetDate={targetDate}
        />}
        <IonItem>
          <IonLabel>Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="DD-MM-YYYY"
            onIonChange={(e) => setBirthDate(e.detail.value)}
            position="floating"
            value={birthDate} 
          />
        </IonItem>
        <IonItem>
          <IonLabel>Target Date:</IonLabel>
          <IonDatetime
            displayFormat="DD-MM-YYYY"
            onIonChange={(e) => setTargetDate(e.detail.value)}
            position="floating"
            value={targetDate} 
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;