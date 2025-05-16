import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.jsx';

const root = document.getElementById('root');

if (root) {
	ReactDOM.createRoot(root).render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
} else {
	console.error('Root element not found');
}
