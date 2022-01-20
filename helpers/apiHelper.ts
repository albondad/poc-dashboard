import * as firebaseApp from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';

const firebaseAppInitializeAppOptions = {
  apiKey: 'AIzaSyCsN3pmlutheIiR9cLEZ5IlkssXjcdLTvE',
  authDomain: 'bms-portal.firebaseapp.com',
  databaseURL: 'https://bms-portal.firebaseio.com',
  projectId: 'bms-portal',
  storageBucket: 'bms-portal.appspot.com',
  messagingSenderId: '64041539486',
  appId: '1:64041539486:web:13f9acd584691ae540a88f',
};
firebaseApp.initializeApp(firebaseAppInitializeAppOptions);

export const apiHelper: any = {};

apiHelper.auth = {};

apiHelper.auth.signIn = async (data: any) => {
  const firebaseAuthAuth = firebaseAuth.getAuth();
  await firebaseAuth.signInWithEmailAndPassword(
    firebaseAuthAuth,
    'al@bodhi.software',
    'M5izrz6eF6_'
  );
};
