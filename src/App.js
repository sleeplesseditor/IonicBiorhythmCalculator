import {
  IonApp,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import * as React from 'react';

function App() {
  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState('')

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
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle></IonCardTitle>
          </IonCardHeader>
          <IonCardContent>

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}

export default App;