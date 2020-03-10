const scrict='sdjfksdjflajflasjflasjflksf'

const jwt = require('jsonwebtoken');

let payload = {username: '张三', age: 18};

let token = jwt.sign(payload,scrict, { expiresIn: 60 });

let originData = jwt.verify(token,scrict);

console.log(originData);