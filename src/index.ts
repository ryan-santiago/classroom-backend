import express from 'express'
import cors from 'cors'
import subjectsRouter from './routes/subjects'

const app = express()
const PORT = 8000

app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true,
	}),
)

// middleware
app.use(express.json())

app.use('/api/subjects', subjectsRouter)
// routes
app.get('/', (_req, res) => {
	res.json({ message: 'Hello from classroom-backend!' })
})

// start server
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`)
})
