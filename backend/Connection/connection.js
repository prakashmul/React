const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected')
}).catch((error) => {
    console.log(error)
})