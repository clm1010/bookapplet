const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
    const top = await mysql('books')
        .select(
            'id',
            'title',
            'image',
            'alt',
            'publisher',
            'summary',
            'price',
            'rate',
            'count'
        )
        .orderBy('count', 'desc')
        .limit(9)
    ctx.state.data = {
        list: top
    }
}
