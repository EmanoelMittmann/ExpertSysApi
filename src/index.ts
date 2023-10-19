import express from 'express'
import dotenv from 'dotenv'
import router from './routes'
import cors from 'cors'

const app = express()
dotenv.config()
cors()

app.listen(process.env.PORT, () => {
    app.use(express.json())
    
    app.use('/Api', router)

    console.log('App running in port ' + process.env.PORT)
})