// 新增图书
// 1.获取豆瓣信息
// 2.入库
// https://api.douban.com/v2/book/isbn/:name9787115275790

const https = require('https')
const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
    const { isbn, openid } = ctx.request.body
    // console.log('添加图书', isbn, openid)
    if (isbn && openid) {
        // 查询书籍是否存在
        const findRes = await mysql('books')
            .select()
            .where('isbn', isbn)
        if (findRes.length) {
            ctx.state = {
                code: -1,
                data: {
                    msg: '图书已存在'
                }
            }
            return
        }

        let url = 'https://api.douban.com/v2/book/isbn/' + isbn
        const bookinfo = await getJSON(url)
        const rate = bookinfo.rating.average
        const { title, image, alt, publisher, summary, price } = bookinfo
        const tags = bookinfo.tags
            .map(v => {
                return `${v.title} ${v.cont}`
            })
            .join(',')
        const author = bookinfo.author.join(',')
        // console.log({
        //     rate,
        //     title,
        //     image,
        //     alt,
        //     publisher,
        //     summary,
        //     price,
        //     tags,
        //     author
        // })
        try {
            // await同步插入数据
            await mysql('books').insert({
                isbn,
                openid,
                title,
                image,
                alt,
                publisher,
                summary,
                price,
                rate,
                tags,
                author
            })
            ctx.state.data = {
                title,
                msg: 'success'
            }
        } catch (error) {
            ctx.state = {
                code: -1,
                data: {
                    msg: '新增失败：' + error.sqlMessage
                }
            }
        }
    }
}

function getJSON (url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let urlData = ''
            res.on('data', data => {
                urlData += data
            })
            res.on('end', data => {
                const bookinfo = JSON.parse(urlData)
                if (bookinfo.title) {
                    resolve(bookinfo)
                }
                reject(bookinfo)
            })
        })
    })
}
