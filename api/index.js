const express = require('express')
const db = require('./db')


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = require('./routes/users')
const articles = require('./routes/articles')

app.use(users)
app.use(articles)

module.exports = {
  path: '/api',
  handler: app
}