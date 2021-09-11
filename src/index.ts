import express from 'express';
import cors from 'cors';


/** [START] routes */
// import player from './features/player/adapters/routes/player-routes';
// import team from './features/team/adapters/routes/team-routes';
// import stadium from './features/stadium/adapters/routes/stadium-routes';
/** [END] routes */

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/players', player);
// app.use('/teams', team);
// app.use('/stadium', stadium);

app.get('/', (req: any, res: any) => {
  res.json({ football_team_management_api: 'external API' });
});

/**
 * Catches all errors coming from all the routes
 */
app.use(function (err: any, req: any, res: any, next: any) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(`http://localhost:${PORT}`);