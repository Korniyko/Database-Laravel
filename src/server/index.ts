import * as path from 'path';
import routes from './routes';


const express = require('express');

const app = express();
if (process.env.NODE_ENV === 'local') {
    const devMiddleware = require('./middleware/devMiddleware').default;
    app.use(devMiddleware);
  }
app.use(express.static(path.resolve(__dirname, '..', '..', 'dist', 'frontend')));
app.use('/api',routes)
app.listen(6500, () => {
    console.log('server-start')
});


