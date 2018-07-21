// 获取图书列表
const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
    const { page } = ctx.request.query
    const size = 10
    // 查询books表所有书籍
    const books = await mysql('books')
        .select('books.*', 'cSessionInfo.user_info')
        .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
        .limit(size)
        .offset(Number(page) * size)
        .orderBy('books.id', 'desc')
    ctx.state.data = {
        list: books.map(v => {
            const info = JSON.parse(v.user_info)
            return Object.assign({}, v, {
                user_info: {
                    nickName: info.nickName
                }
            })
        })
    }
}
