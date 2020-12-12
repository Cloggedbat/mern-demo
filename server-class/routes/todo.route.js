const { Todo } = require('../model');

const router = require ('express').Router();

router
.route('/')
.get((req,res)=>{
    res.json({secsess: true});

})
.post((req,res) => {
    console.log({reqBody: req.bodey});
})

Todo
.create({ text: req.body.text
});

.then(data => )
module.exports = router;