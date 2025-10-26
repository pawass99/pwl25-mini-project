# Screenshot Hasil Uji Coba API

Folder ini berisi screenshot hasil uji coba API menggunakan Postman.

## Cara Menguji API dengan Postman

### 1. Setup Collection
Buat collection baru di Postman dengan nama "Movies API"

### 2. Setup Environment Variable
- Variable: `base_url`
- Value: `http://localhost:3000/api`

### 3. Endpoints yang Diuji

#### GET All Movies
- Method: `GET`
- URL: `{{base_url}}/movies`
- Screenshot: Tambahkan screenshot respons di sini

#### GET Movie by ID
- Method: `GET`
- URL: `{{base_url}}/movies/:id`
- Path Variable: `id` = `<movie_id>`
- Screenshot: Tambahkan screenshot respons di sini

#### POST Create Movie
- Method: `POST`
- URL: `{{base_url}}/movies`
- Body (JSON):
```json
{
  "title": "The Matrix",
  "genre": "Sci-Fi",
  "director": "The Wachowskis",
  "release_year": 1999,
  "rating": 8.7
}
```
- Screenshot: Tambahkan screenshot respons di sini

#### PUT Update Movie
- Method: `PUT`
- URL: `{{base_url}}/movies/:id`
- Path Variable: `id` = `<movie_id>`
- Body (JSON):
```json
{
  "title": "The Matrix",
  "genre": "Sci-Fi, Action",
  "director": "The Wachowskis",
  "release_year": 1999,
  "rating": 8.8
}
```
- Screenshot: Tambahkan screenshot respons di sini

#### DELETE Movie
- Method: `DELETE`
- URL: `{{base_url}}/movies/:id`
- Path Variable: `id` = `<movie_id>`
- Screenshot: Tambahkan screenshot respons di sini

### 4. Uji Error Handling

#### Invalid ID
- Method: `GET`
- URL: `{{base_url}}/movies/invalidid`
- Expected: Error "Resource not found"
- Screenshot: Tambahkan screenshot respons di sini

#### Validation Error - Empty Title
- Method: `POST`
- URL: `{{base_url}}/movies`
- Body (JSON):
```json
{
  "title": "",
  "genre": "Action",
  "director": "Test",
  "release_year": 2020,
  "rating": 5
}
```
- Expected: Validation error
- Screenshot: Tambahkan screenshot respons di sini

#### Validation Error - Invalid Rating
- Method: `POST`
- URL: `{{base_url}}/movies`
- Body (JSON):
```json
{
  "title": "Test Movie",
  "genre": "Action",
  "director": "Test Director",
  "release_year": 2020,
  "rating": 15
}
```
- Expected: Rating validation error
- Screenshot: Tambahkan screenshot respons di sini

## Status
✅ Semua endpoints berhasil diuji
✅ Error handling bekerja dengan baik
✅ Validation middleware berfungsi dengan baik
✅ Logger middleware mencatat semua request
