var express = require('express');
const app = express()
app.use(express.static('pwa'));

app.listen(3000, () => {
  console.log('Cultibox wer service running')
  
})