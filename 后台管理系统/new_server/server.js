const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');

const { createArticle, listArticle, saveArtivle } = require('./db_utils');


const app = express();

app.use(bodyParser.json());

app.use(cookieParser());

const scrict = 'sdjfksdjflajflasjflasjflksf'

app.get('/auth/user', function (request, response) {

    console.log(request.cookies)

    const token = request.cookies.token;

    try {
        let originData = jwt.verify(token, scrict);

        response.send({
            code: 100,
            msg: '你好',
            user: originData
        });
    } catch (e) {
        response.clearCookie('token')
        response.send({
            code: 222,
            msg: 'token 校验失败'
        })
    }




})

app.post('/auth/login', function (request, response) {


    const { username, password } = request.body;


    if (username === 'zhang' && password === '123456') {


        let user = { username: 'zhang', age: 18, sex: '男' }
        const token = jwt.sign(user, scrict, { expiresIn: 5 })


        response.cookie('token', token)

        // 响应一个成功 的 json
        response.send({
            code: 100,
            msg: '登录成功'
        })
    } else {
        response.send({
            code: 111,
            msg: '登录失败'
        })
    }


})

app.post('/article/create', async function (request, response) {
    const { title, content, author } = request.body;
    console.log({ title, content, author })

    const article_ret = await createArticle({ title, content, author })

    response.send({
        code: 100,
        msg: '发布成功',
        data: article_ret
    })
})

app.get('/article/list', async function (request, response) {
    const { pageno, pagesize } = request.query;


    const artile_ret = await listArticle(pageno, pagesize)
    setTimeout(function () {
        response.send({
            code: 100,
            data: artile_ret
        })
    }, 2000);

})

app.post('/article/edit', async function (req, res) {
    const { _id, title, content, author } = req.body;

    let ret = await saveArtivle({ _id, title, content, author })

    res.send({
        code: 100,
        data: ret
    })
})


const port = 5000;
app.listen(port, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('http://localhost:' + port)
});
