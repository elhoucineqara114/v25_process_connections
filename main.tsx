import ReactDOM from 'react-dom/client';
import App from './App';
import { registerMicroApps, start, initGlobalState } from 'qiankun';
import './index.css';
import 'systemjs';
import Cookies from 'js-cookie';

// Sync cookies to localStorage for cross-domain micro-frontend access
const syncAuthToLocalStorage = () => {
  const userId = Cookies.get('userId');
  const companyId = Cookies.get('companyId');

  if (userId) {
    localStorage.setItem('userId', userId);
    // console.log('[Host] Synced userId to localStorage:', userId);
  }
  if (companyId) {
    localStorage.setItem('companyId', companyId);
    // console.log('[Host] Synced companyId to localStorage:', companyId);
  }
};

// Sync auth data on load
syncAuthToLocalStorage();

// Watch for cookie changes and sync to localStorage
setInterval(syncAuthToLocalStorage, 1000);

const initialState = { userId: null };
const actions = initGlobalState(initialState);

// Listen for changes (for debugging)
// actions.onGlobalStateChange((state: any, /*prev*/) => {
//   console.log('[Main App] Global state changed:', state);
// });


// console.log("qiankun is here");

// Register microfrontends
registerMicroApps([
  {
    name: 'home',
    entry: 'https://website-rho-five-13.vercel.app',
    //entry: 'http://localhost:5173/',
    container: '#container-home',
    activeRule: (location) => location.pathname === '/' || location.pathname === '/home',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'app1',
    entry: 'https://v25registrationbackend.vercel.app',
    //entry: 'http://localhost:5157/',
    container: '#container-app1',
    activeRule: '/app1',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'app2',
    entry: 'https://v25-choicepage.vercel.app',
    //entry: 'http://localhost:5173/',
    container: '#container-app2',
    activeRule: '/app2',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'repcreationprofile',
    entry: 'https://v25-repcreationprofile-front.vercel.app/',
    container: '#container-repcreationprofile',
    activeRule: '/repcreationprofile',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'repassessments',
    entry: 'https://v25-assesments-front.vercel.app/',
    container: '#container-repassessments',
    activeRule: '/repassessments',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'app4',
    entry: 'https://v25-searchcompanywizard-frontend.vercel.app',
    container: '#container-app4',
    activeRule: '/app4',
    props: {
      sandbox: {
        experimentalStyleIsolation: false,
      },
      actions,
    },
  },
  {
    name: 'app5',
    entry: 'https://v25-gigsaicreation-frontend.vercel.app/',
    container: '#container-app5',
    activeRule: '/app5',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'app6',
    entry: 'https://v25-gigsaicreation-frontend.vercel.app/',
    container: '#container-app6',
    activeRule: '/app6',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'app7',
    entry: 'https://v25-dashboard-frontend.vercel.app/',
    container: '#container-app7',
    activeRule: '/app7',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'gigs',
    entry: 'https://v25-dashboard-frontend.vercel.app/gigs',
    container: '#container-gigs',
    activeRule: '/gigs',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'company',
    entry: 'https://v25-dashboard-frontend.vercel.app/',
    container: '#container-company',
    activeRule: '/company',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'repdashboard',
    entry: 'https://v25-dash-rep-back.vercel.app/',
    container: '#container-app8',
    activeRule: '/repdashboard',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'reporchestrator',
    entry: 'https://v25-reporchestrator-front.vercel.app/',
    container: '#container-reporchestrator',
    activeRule: '/reporchestrator',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'knowledgebase',
    entry: 'https://v25knowledgebasebackend.vercel.app/',
    container: '#container-app9',
    activeRule: '/knowledgebase',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'app11',
    entry: 'https://v25-comporchestrator-front.vercel.app/',
    container: '#container-app11',
    activeRule: '/app11',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'app12',
    entry: 'https://v25-matching-frontend.vercel.app/',
    container: '#container-app12',
    activeRule: '/app12',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'copilot',
    entry: 'https://v25-copilot-frontend.vercel.app/',
    container: '#container-copilot',
    activeRule: '/copilot',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  },
  {
    name: 'training',
    entry: 'https://v25-platform-training-frontend.vercel.app/',
    container: '#container-training',
    activeRule: '/training',
    props: {
      sandbox: {
        experimentalStyleIsolation: true,
      },
      actions,
    },
  }
]);

const startQiankun = async () => {
  try {
    start({
      prefetch: true,
      sandbox: {
        strictStyleIsolation: false,
        experimentalStyleIsolation: true,
      },
      singular: false,
      fetch: (url, options) => {
        // console.log(`[Host] Fetching: ${url}`);
        return fetch(url, {
          ...options,
          mode: "cors",
        });
      },
    });
    // console.log('[Host] Qiankun started successfully');
  } catch (error) {
    console.error('[Host] Failed to start Qiankun:', error);
  }
};

// Mount host app first
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('[Host] Root element not found');
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

// Start Qiankun after host app is mounted
startQiankun();