// 评论列表
const { mysql } = require('../qcloud')

module.exports = async ctx => {
    const { bookid, openid } = ctx.request.query
    const mySqlSelect = mysql('comments')
        .select('comments.*', 'csessioninfo.user_info')
        .join('csessioninfo', 'comments.openid', 'csessioninfo.open_id')
    let comments
    // 判断bookid 和 openid 那个存在
    if (bookid) {
        // 图书详情的评分列表
        comments = await mySqlSelect.where('bookid', bookid)
    } else if (openid) {
        // 根据个人的openid筛选
        comments = await mySqlSelect.where('openid', openid)
    }
    ctx.state.data = {
        list: comments.map(v => {
            const info = JSON.parse(v.user_info)
            return Object.assign({}, v, {
                nickName: info.nickName,
                avatarUrl: info.avatarUrl
            })
        })
    }
}
