const router = require ('express').Router();
const todos = require ('./todo.route')
router.use("/api/todo",todos);

module.exports = router;