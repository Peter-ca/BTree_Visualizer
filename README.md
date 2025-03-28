# 🌳 B-Tree Visualizer

An interactive web-based visualizer for B-Trees, built with **Java (Spring Boot)** on the backend and **HTML/JavaScript (SVG)** on the frontend.

This tool lets you **insert and remove** keys in a B-Tree and **see changes live** in a dynamic visual layout. Great for learning, teaching, or debugging B-Trees.

---


## 📸 Preview
[BTree.webm](https://github.com/user-attachments/assets/027b68f6-fdd8-4661-b498-887143f5b7a2)

---


## 🚀 Features

- **Insert** keys dynamically
- **Remove** keys with rebalancing
- **Reset** the tree
- Auto-generated **SVG visual layout**
- Built using classic B-Tree algorithms

---


## 🛠 Technologies Used

### Backend
- Java 17+
- Spring Boot
- REST API

### Frontend
- HTML5 / CSS3
- Vanilla JavaScript
- SVG for rendering

---


## 📦 Project Structure
```bash
btree-visualizer/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/btreevisualizer/
│   │   │       ├── controller/        # REST API endpoints
│   │   │       ├── service/           # BTree service logic
│   │   │       └── btree/             # Core BTree and Node implementation
│   │   └── resources/
│   │       └── static/                # Frontend: index.html, app.js, CSS
│   └── test/                          # (Optional) test classes
├── pom.xml                            # Maven config
└── README.md

```

---


## ▶️ Getting Started

### Prerequisites
- Java 17 or higher
- Maven
- Git

### Clone and run

```bash
# Clone the repository
git clone https://github.com/yourusername/btree-visualizer.git

# Navigate into the project directory
cd btree-visualizer

# Run the application using Maven
./mvnw spring-boot:run
```

Once the app is running, open your browser and go to:
```
http://localhost:8080
```

---


## 🔧 Available API Endpoints

| Method   | Endpoint              | Description                       |
|----------|-----------------------|-----------------------------------|
| `POST`   | `/api/btree/insert`   | Inserts a key (`?key=VALUE`)      |
| `DELETE` | `/api/btree/remove`   | Removes a key (`?key=VALUE`)      |
| `GET`    | `/api/btree/tree`     | Returns the current B-Tree as JSON |
| `DELETE` | `/api/btree/reset`    | Resets the entire tree            |
