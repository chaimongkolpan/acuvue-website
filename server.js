const express = require('express')
const app = express();
const PORT = process.env.PORT || 8088;
app.use(express.static('public'));
app.listen(PORT, () => {
  console.log('Server started at port:', PORT);
})