import { createApp} from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to startup the app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
}

// If we are in dev mode and running in isolation, call the bootstrap immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');
    
    if (devRoot) {
        mount(devRoot);
    }
}


// We are running througth the container and we should export the mount 

export { mount };
