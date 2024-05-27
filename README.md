# 📚 Node_React_CRUD

A robust Node.js application designed to efficiently test for various Purpose. Utilizing Express for the backend, MySQL for database management, and React for the frontend interface, this system facilitates CRUD operations with seamless CORS handling and environment variable management.

## 📋 Table of Contents

* [📦 Installation](https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd#installation)
* [🔧 Environment Variables](https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd#environment-variables)
* [🚀 Running the Application](https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd#running-the-application)
* [🌐 Backend Endpoints](https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd#backend-endpoints)
* [💻 Frontend Components](https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd#frontend-components)
* [📚 Dependencies](https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd#dependencies)
* [🛠️ Contributing](https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd#contributing)
* [⚙️ License](https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd#license)

## 📦 Installation

### Clone the Repository

<pre><div class="mt-3 p-1"><div><code class="language-bash"><span class="token">git</span><span> clone https://github.com/soocrates/Node_React_CRUD.git
</span><span></span><span class="token">cd</span><span> Node_React_CRUD
</span></code></div><div class="flex"><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-copy"></i></button><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-play"></i></button><a class="fw-bold fs-6 text-white mt-n1" target="_blank" href="https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd" rel="noreferrer"><h6 class="text-always-white"></h6></a></div></div></pre>

### Install Backend Dependencies

<pre><div class="mt-3 p-1"><div><code class="language-bash"><span class="token">npm</span><span></span><span class="token"> install</span><span>
</span></code></div><div class="flex"><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-copy"></i></button><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-play"></i></button><a class="fw-bold fs-6 text-white mt-n1" target="_blank" href="https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd" rel="noreferrer"><h6 class="text-always-white"></h6></a></div></div></pre>

### Navigate to the Frontend Directory

Assuming the frontend is located in `frontend/`:

<pre><div class="mt-3 p-1"><div><code class="language-bash"><span class="token">cd</span><span> frontend
</span><span></span><span class="token">npm </span><span></span><span class="token">install</span><span>
</span></code></div><div class="flex"><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-copy"></i></button><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-play"></i></button><a class="fw-bold fs-6 text-white mt-n1" target="_blank" href="https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd" rel="noreferrer"><h6 class="text-always-white"></h6></a></div></div></pre>

## 🔧 Environment Variables

Create a `.env` file in the root of your project and define the following environment variables:

<pre><div class="mt-3 p-1"><div><code class="language-plaintext"><span>DB_HOST=
</span>DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=
APP_PORT=3000
</code></div><div class="flex"><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-copy"></i></button><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-play"></i></button><a class="fw-bold fs-6 text-white mt-n1" target="_blank" href="https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd" rel="noreferrer"><h6 class="text-always-white"></h6></a></div></div></pre>

## 🚀 Running the Application

### Start the Backend Server

<pre><div class="mt-3 p-1"><div><code class="language-bash"><span class="token">npm</span><span> start </span></code></div><div class="flex"><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-copy"></i></button><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-play"></i></button><a class="fw-bold fs-6 text-white mt-n1" target="_blank" href="https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd" rel="noreferrer"><h6 class="text-always-white"></h6></a></div></div></pre>

### Start the Frontend Development Server

Navigate to the frontend directory and start the React development server:

<pre><div class="mt-3 p-1"><div><code class="language-bash"><span class="token">cd</span><span> frontend
</span><span></span><span class="token">npm</span><span> start
</span></code></div><div class="flex"><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-copy"></i></button><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-play"></i></button><a class="fw-bold fs-6 text-white mt-n1" target="_blank" href="https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd" rel="noreferrer"><h6 class="text-always-white"></h6></a></div></div></pre>

The backend server runs on the port specified by `APP_PORT` (default is 3000), and the frontend development server typically runs on port 3000 unless configured otherwise.

## 🌐 Backend Endpoints

### Fetch All Students

* **URL:** `/students`
* **Method:** `GET`
* **Response:** JSON array of student records

### Fetch a Student by ID

* **URL:** `/student/:id`
* **Method:** `GET`
* **Response:** JSON object of the student record

### Create a Student Record

* **URL:** `/create`
* **Method:** `POST`
* **Request Body:**

<pre><div class="mt-3 p-1"><div><code class="language-json"><span class="token">{</span><span>
</span><span></span><span class="token">"name"</span><span class="token">:</span><span></span><span class="token">"Student Name"</span><span class="token">,</span><span>
</span><span></span><span class="token">"dob"</span><span class="token">:</span><span></span><span class="token">"YYYY-MM-DD"</span><span class="token">,</span><span>
</span><span></span><span class="token">"result"</span><span class="token">:</span><span></span><span class="token">"Pass/Fail"</span><span>
</span><span></span><span class="token">}</span><span>
</span></code></div><div class="flex"><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-copy"></i></button><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-play"></i></button><a class="fw-bold fs-6 text-white mt-n1" target="_blank" href="https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd" rel="noreferrer"><h6 class="text-always-white"></h6></a></div></div></pre>

* **Response:** Success or error message

### Update a Student Record

* **URL:** `/update/:id`
* **Method:** `PUT`
* **Request Body:**

<pre><div class="mt-3 p-1"><div><code class="language-json"><span class="token">{</span><span>
</span><span></span><span class="token">"name"</span><span class="token">:</span><span></span><span class="token">"Updated Student Name"</span><span class="token">,</span><span>
</span><span></span><span class="token">"dob"</span><span class="token">:</span><span></span><span class="token">"YYYY-MM-DD"</span><span class="token">,</span><span>
</span><span></span><span class="token">"result"</span><span class="token">:</span><span></span><span class="token">"Pass/Fail"</span><span>
</span><span></span><span class="token">}</span><span>
</span></code></div><div class="flex"><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-copy"></i></button><button class="btn btn-circle mt-n5" type="submit"><i class="fe fe-play"></i></button><a class="fw-bold fs-6 text-white mt-n1" target="_blank" href="https://www.phind.com/search?cache=r0qp802lctaa81oupou8g6kd" rel="noreferrer"><h6 class="text-always-white"></h6></a></div></div></pre>

* **Response:** Success or error message

### Delete a Student Record

* **URL:** `/delete/:id`
* **Method:** `DELETE`
* **Response:** Success or error message

## 💻 Frontend Components

* **Students Component:** Displays a list of all student records with options to add, update, and delete records.
* **Add_Students Component:** Provides a form to add a new student record.
* **Update_Student Component:** Provides a form to update an existing student record.

## 📚 Dependencies

### Backend

* `express`: Web framework for Node.js
* `mysql`: MySQL client for Node.js
* `cors`: Middleware for handling Cross-Origin Resource Sharing
* `dotenv`: Module to load environment variables from a `.env` file

### Frontend

* `react`: JavaScript library for building user interfaces
* `axios`: Promise-based HTTP client for the browser and Node.js
* `react-router-dom`: DOM bindings for React Router

## 🛠️ Contributing

Contributions are welcome Please feel free to submit a pull request or open an issue if you encounter any problems.
