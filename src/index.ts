import express from 'express'

const app = express()
const PORT = 8000

// middleware
app.use(express.json())

// routes
app.get('/', (_req, res) => {
	res.json({ message: 'Hello from classroom-backend!' })
})

// start server
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`)
})
