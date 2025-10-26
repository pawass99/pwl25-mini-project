# Movies REST API

REST API untuk mengelola data film menggunakan Express.js dan MongoDB dengan struktur MVC (Model-View-Controller).

## 📋 Deskripsi

API ini menyediakan operasi CRUD (Create, Read, Update, Delete) untuk mengelola data film. Setiap film memiliki informasi seperti judul, genre, sutradara, tahun rilis, dan rating.

## 🛠️ Teknologi yang Digunakan

- **Express.js** - Framework web untuk Node.js
- **MongoDB** - Database NoSQL
- **Mongoose** - ODM untuk MongoDB
- **dotenv** - Mengelola environment variables
- **Node.js** - Runtime environment

## 📁 Struktur Folder

```
express/
├── src/
│   ├── config/
│   │   └── database.js       # Konfigurasi koneksi database
│   ├── controller/
│   │   └── movies.js         # Business logic untuk movies
│   ├── middleware/
│   │   ├── errorHandler.js   # Error handling middleware
│   │   ├── logs.js           # Logger middleware
│   │   └── validate.js       # Validation middleware
│   ├── models/
│   │   └── movie.js          # Schema dan model Movie
│   ├── routes/
│   │   └── movies.js         # Definisi routes untuk movies
│   └── app.js                # Entry point aplikasi
├── screenshot/               # Screenshot hasil uji coba
├── .env                      # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Cara Menjalankan

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Pastikan file `.env` sudah ada dan berisi:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
NODE_ENV=development
```

### 3. Jalankan Aplikasi

```bash
# Production mode
npm start

# Development mode (dengan auto-reload)
npm run dev
```

Server akan berjalan di `http://localhost:3000`

## 📚 API Endpoints

### Base URL
```
http://localhost:3000/api/movies
```

### 1. Get All Movies
**GET** `/api/movies`

Mengambil semua data film.

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "671234567890abcdef123456",
      "title": "The Shawshank Redemption",
      "genre": "Drama",
      "director": "Frank Darabont",
      "release_year": 1994,
      "rating": 9.3,
      "created_at": "2024-01-15T10:30:00.000Z",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### 2. Get Single Movie by ID
**GET** `/api/movies/:id`

Mengambil data film berdasarkan ID.

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "671234567890abcdef123456",
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "director": "Frank Darabont",
    "release_year": 1994,
    "rating": 9.3,
    "created_at": "2024-01-15T10:30:00.000Z"
  }
}
```

### 3. Create New Movie
**POST** `/api/movies`

Membuat data film baru.

**Request Body:**
```json
{
  "title": "The Dark Knight",
  "genre": "Action",
  "director": "Christopher Nolan",
  "release_year": 2008,
  "rating": 9.0
}
```

**Response:**
```json
{
  "success": true,
  "message": "Movie created successfully",
  "data": {
    "_id": "671234567890abcdef123457",
    "title": "The Dark Knight",
    "genre": "Action",
    "director": "Christopher Nolan",
    "release_year": 2008,
    "rating": 9.0,
    "created_at": "2024-01-15T10:35:00.000Z"
  }
}
```

### 4. Update Movie
**PUT** `/api/movies/:id`

Mengupdate data film berdasarkan ID.

**Request Body:**
```json
{
  "title": "The Dark Knight",
  "genre": "Action, Crime",
  "director": "Christopher Nolan",
  "release_year": 2008,
  "rating": 9.1
}
```

**Response:**
```json
{
  "success": true,
  "message": "Movie updated successfully",
  "data": {
    "_id": "671234567890abcdef123457",
    "title": "The Dark Knight",
    "genre": "Action, Crime",
    "director": "Christopher Nolan",
    "release_year": 2008,
    "rating": 9.1,
    "updatedAt": "2024-01-15T10:40:00.000Z"
  }
}
```

### 5. Delete Movie
**DELETE** `/api/movies/:id`

Menghapus data film berdasarkan ID.

**Response:**
```json
{
  "success": true,
  "message": "Movie deleted successfully",
  "data": {}
}
```

## 🔧 Middleware

### 1. Logger Middleware
Mencatat setiap request yang masuk dengan format:
```
2024-01-15T10:30:00.000Z - GET /api/movies
```

### 2. Validation Middleware
Memvalidasi input data agar tidak kosong dan memenuhi kriteria:
- `title`: String, required
- `genre`: String, required
- `director`: String, required
- `release_year`: Number, required, min: 1888
- `rating`: Number, required, min: 0, max: 10

**Error Response:**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Title is required and cannot be empty",
    "Rating must be between 0 and 10"
  ]
}
```

### 3. Error Handler Middleware
Menangani error dan menampilkan pesan error yang user-friendly.

**Error Response:**
```json
{
  "success": false,
  "error": "Movie not found"
}
```

## 📊 Database Schema

### Movie Model
```javascript
{
  title: String (required),
  genre: String (required),
  director: String (required),
  release_year: Number (required, min: 1888, max: 2029),
  rating: Number (required, min: 0, max: 10),
  created_at: Date (default: Date.now),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## 📸 Screenshot

Screenshots hasil uji coba dengan Postman tersimpan di folder `screenshot/`.

## 👤 Author

**Pawas** - [GitHub](https://github.com/yourusername)

## 📝 License

This project is part of an educational assignment.

## 🙏 Acknowledgments

- Express.js documentation
- MongoDB documentation
- Mongoose documentation
