import app from './config/app'

app.liste(env.port, () => console.log(`Server started at https://localhost:${env.port}`))