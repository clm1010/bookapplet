// 获取图书列表
const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
    const { page, openid } = ctx.request.query
    const size = 10
    // 查询books表所有书籍
    const mySqlSelectBooks = mysql('books')
        .select('books.*', 'cSessionInfo.user_info')
        .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
        .orderBy('books.id', 'desc')
    let books
    if (openid) {
        // 只获取我的图书 根据openid过滤
        books = await mySqlSelectBooks.where('books.openid', openid)
    } else {
        // 全部图书，分页
        books = await mySqlSelectBooks.limit(size).offset(Number(page) * size)
    }
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
