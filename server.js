const express = require ('express')
const app =express()

app.use("/js", express.static(`${__dirname}/js`))
app.get("/*" , (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

app.listen(3000, () => {
    console.log("Hello, I am here");
})