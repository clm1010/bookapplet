//
const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
  // 查询books表所有书籍
  const books = await mysql('books').select('*').orderBy('id', 'desc')
  ctx.state.data = {
    list: books
  }
}
