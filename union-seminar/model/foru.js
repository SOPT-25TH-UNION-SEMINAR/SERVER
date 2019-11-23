const statusCode = require('../module/util/statusCode');
const responseMessage = require('../module/util/responseMessage');
const authUtil = require('../module/util/authUtil')

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
    songs: () => {
        return new Promise((resolve, reject) => {
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(
                    responseMessage.FOR_U_SUCCESS,
                    forUDB
                )
            });
        });
    }
}

