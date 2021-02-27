import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import * as React from 'react';

function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>Here be content…</p>
      </IonContent>
    </IonApp>
  );
}

export default App;