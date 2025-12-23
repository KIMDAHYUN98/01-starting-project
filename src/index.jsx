import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

// App 요소가 root 라는 html 요소로 리액트 라이브러리의 react-dom 부분을 통해 렌더링 되기 때문.
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
