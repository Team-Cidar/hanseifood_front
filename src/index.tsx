import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import '@utils/FirebaseInstance';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(<App />);

serviceWorkerRegistration.register();
