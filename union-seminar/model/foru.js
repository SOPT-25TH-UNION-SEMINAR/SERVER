const statusCode = require('../module/util/statusCode');
const responseMessage = require('../module/util/responseMessage');
//const authUtil = require('../module/util/authUtils')

const forUDB = [{
    "thumbnail" : "https://images.genius.com/5c4ee5e3fee546bf18dbd74170fa5699.1000x1000x1.jpg",
    "title" : "Sims",
    "singer" : "Lauv",
    "likeNum" : 123,
    "isLike" : true
},
{
    "thumbnail" : "https://images.genius.com/b0f1f0fb4503946b147cf94fd591adc5.1000x1000x1.jpg",
    "title" : "New Hope Club, Danna Paola",
    "singer" : "Know Me Too Well",
    "likeNum" : 1203,
    "isLike" : false
}];

module.exports = {
    signin: (id, pwd) => {
        return new Promise((resolve, reject) => {
            // 존재하는 아이디인지 확인 (실패시 400 Error)
            const user = userDB.find(it => it.id === id);
            console.log(user);
            if (!user) {
                resolve({
                    code: statusCode.BAD_REQUEST,
                    json: authUtil.successFalse(responseMessage.NO_USER)
                })
                return;
            }

            // 비밀번호 일치하는지 확인 ( 실패시 401 Error)
            if(user.pwd != pwd){
                resolve({
                    code: statusCode.BAD_REQUEST,
                    json: authUtil.successFalse(responseMessage.MISS_MATCH_PW)
                })
                return;
            }

            // 유저 정보 응답하기
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(responseMessage.SIGN_IN_SUCCESS)
            });
        });
    }
}

