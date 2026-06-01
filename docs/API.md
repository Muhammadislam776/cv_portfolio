# API Specification - MERN Portfolio Server

Documentation of all backend API endpoints provided by the portfolio server.

---

## 1. Projects API

### Get All Projects
* **Endpoint**: `/api/projects`
* **Method**: `GET`
* **Response**: `200 OK`
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "title": "Committee Management System",
      "description": "A comprehensive platform to manage monthly committee registries, members, accounts, and payouts.",
      "image_url": "/images/cms.jpg",
      "live_url": "https://comittee-management-system-ten.vercel.app/",
      "github_url": "https://github.com/Muhammadislam776/comittee_management_system",
      "categories": ["web", "fullstack"],
      "tech_stack": ["React", "Node.js", "Express", "MongoDB", "Supabase"]
    }
  ]
}
```

### Get Project By ID
* **Endpoint**: `/api/projects/:id`
* **Method**: `GET`
* **Response**: `200 OK` or `404 Not Found`

---

## 2. Contact API

### Submit Contact Message
* **Endpoint**: `/api/contact`
* **Method**: `POST`
* **Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Collaboration Idea",
  "message": "Hello, I am interested in hire you..."
}
```
* **Response**: `200 OK`
```json
{
  "ok": true
}
```
* **Error Response**: `400 Bad Request` or `500 Server Error`
```json
{
  "error": "All fields are required"
}
```
