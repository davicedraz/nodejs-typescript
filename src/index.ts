import routes from './routes';
import server from './server';

server.use(routes);

server.listen(3000, () => {
  console.log(`Server listen on port ${3000}...`);
});
