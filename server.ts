/**
 * Required external modules
 */
import express, { Application } from 'express';
import path from 'path';

/**
 * Required internal modules
 */
import { info } from './logmanager';
import { DBManager } from './dbmanager';
import { loadRoutes } from './routemanager';

/**
 * Required configuration sections
 */
import { website_port } from './config.json';

/**
 * App Variables
 */
const app: Application = express();

/**
 * SQL Connection.
 */
const db: DBManager = new DBManager();
db.createTables();

/**
 * App Configuration
 */
app.use(express.json());
app.set('views', path.join(path.join(__dirname, 'views'), 'frontend'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes Definitions
 */
loadRoutes(app, db);

/**
 * Server Activation
 */
app.listen(website_port, () => {
    info(`Listening to requests at 127.0.0.1:${website_port}`);
});