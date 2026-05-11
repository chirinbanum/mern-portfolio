# Chirin Banu M — Portfolio (MERN Stack)

A dark-themed, elegant developer portfolio built with MongoDB, Express.js, React.js, and Node.js.

---

## 📁 Project Structure

```
portfolio/
├── client/          ← React + Vite + Tailwind CSS
│   └── src/
│       ├── components/   Navbar, Footer, SectionWrapper
│       └── pages/        Home, About, Projects, Experience, Certifications, Contact
└── server/          ← Node.js + Express + MongoDB
    ├── models/       Contact.js (Mongoose schema)
    └── routes/       contact.js
```

---

## 🚀 Setup Instructions

### 1. MongoDB Atlas (Database)
1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas) → create free account
2. Create a new **free cluster** (M0)
3. Under **Database Access** → Add a user with username/password
4. Under **Network Access** → Add IP `0.0.0.0/0` (allow all)
5. Click **Connect** → **Drivers** → copy the connection string
6. Replace `<password>` in the string with your actual password

### 2. Backend Setup
```bash
cd server
cp .env.example .env
# Paste your MongoDB URI into .env
npm install
npm run dev       # runs on http://localhost:5000
```

### 3. Frontend Setup
```bash
cd client
cp .env.example .env
npm install
npm run dev       # runs on http://localhost:5173
```

---

## 🌐 Deployment

| Part       | Platform        | Steps                                              |
|------------|-----------------|----------------------------------------------------|
| Frontend   | **Vercel**      | Push client/ to GitHub → import repo in Vercel     |
| Backend    | **Render**      | Push server/ to GitHub → new Web Service on Render |
| Database   | **MongoDB Atlas** | Already cloud-hosted                             |

### Environment Variables for Production
**Vercel (client):**
```
VITE_BACKEND_URL=https://your-render-app.onrender.com
```

**Render (server):**
```
MONGO_URI=mongodb+srv://...
PORT=5000
CLIENT_URL=https://your-vercel-app.vercel.app
```

---

## 📦 Dependencies

### Client
- `react`, `react-dom` — UI framework
- `react-router-dom` — client-side routing
- `tailwindcss` — utility CSS
- `vite` — dev server & bundler

### Server
- `express` — web framework
- `mongoose` — MongoDB ODM
- `cors` — cross-origin requests
- `dotenv` — environment variables
- `nodemon` — auto-restart in dev

---

## 🧪 Test the Contact API
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello!"}'
```

Expected response: `{"success":true,"message":"Message saved successfully."}`
