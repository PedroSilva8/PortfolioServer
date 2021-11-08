import express from 'express'
import cors from 'cors'


import Portfolio from './v1/portfolio/portfolio'

const app = express();
const PORT = 3000;

app.use(express.json({limit: '120mb'}));
app.use(express.urlencoded({limit: '120mb', extended: true }));
app.use(cors());
app.use('/api/1/portfolio', Portfolio);
 
// tslint:disable-next-line:no-console
app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));