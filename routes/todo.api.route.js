import express from 'express';
const router = express.Router();

router.route('/').get((req,res)=>{
    res.json({'msg':'oke'});
})

export default router;