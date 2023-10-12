import express from 'express';
import morgan from 'morgan';
import config from './config';
import router from './routes';

const app = express();

app.use(morgan('combined'));
app.use('/', router);

app.listen(config.PORT, () => {
  console.log('Server running on PORT: ', config.PORT)
});

export default app;
