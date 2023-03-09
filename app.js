const {app} = require('./utils/init');
const routes = require('./routes');
require('dotenv').config();
require('path');
const serverConfig = require('./config/server.config');


app.use('/api', routes)

app.listen(serverConfig.port, () => {
    console.log('Server is started..! ', serverConfig.port);
});
