import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);

export default historyMiddleware;
