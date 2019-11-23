const express = require('express');
const router = express.Router();
const authUtil = require('../../module/util/authUtil');
const responseMessage = require('../../module/util/responseMessage');
const statusCode = require('../../module/util/statusCode');
const forU = require('../../model/foru');

router.get('/',(req,res) =>{
    /* 포유 곡 리스트 전체 조회 */
    /*
    forU.songs()
    .then(({
        code,
        json
    }) => res.status(code).send(json))
    .catch((err) =>{
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR, authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
    })*/
    const data = {path: req.originalUrl, method: req.method};
    res.status(200).send(authUtil.successTrue('',data));
})

module.exports = router;