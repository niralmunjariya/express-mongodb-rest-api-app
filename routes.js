'use strict';

var userRoutes = require('./app/routes/users.routes');

module.exports = (app) => {
    app.use('/api/v1/users', userRoutes);
}