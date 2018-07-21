// 获取图书详情
const { mysql } = require('../qcloud')

// increment累加
module.exports = async (ctx) => {
    const { id } = ctx.request.query
    await mysql('books').where('id', id).increment('count', 1)
}
