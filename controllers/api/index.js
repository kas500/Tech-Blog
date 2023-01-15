const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const dashboardRoutes = require('./dashboard-routes');
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;