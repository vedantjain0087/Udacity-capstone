import {eventListener} from './js/eventListener'
import { handleSubmit } from './js/formHandler';
import './sass/index.scss';

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//         console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//         console.log('SW registration failed: ', registrationError);
//         });
//     });
// }

if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
       window.navigator.serviceWorker.getRegistrations().then(registrations => {
         registrations.forEach(r => r.unregister())
       })
     }
     
       // new WorkboxPlugin.GenerateSW({
       //      // these options encourage the ServiceWorkers to get in there fast
       //      // and not allow any straggling "old" SWs to hang around
       //      clientsClaim: true,
       //      skipWaiting: true,
       //  })