## IPO Management System

The **BlueStock IPO Management System** is designed for listing IPOs with full CRUD (Create, Read, Update, Delete) operations.

The project is divided into two applications that need to be run individually on different servers:

```bash
Bluestock_Project\backend  # Backend application directory
Bluestock_Project\client   # Client application directory
```

---

To include instructions on how to cloned  the project in your documentation, you can add a section like this:

---

## Clone This Project

To get a copy of this project up and running on your local machine, follow these steps:

## Clone the Repository

```bash
git clone https://github.com/KaranSingh52ED/Bluestock_Project.git
```
## Installation

### Step 1: Create Virtual Environments

First, create virtual environments for both the backend and client in their respective directories:

```bash
# For Backend
cd Bluestock_Project\backend
python3 -m venv backenv

# For Client
cd Bluestock_Project\client
python3 -m venv frontenv
```

### Step 2: Activate the Virtual Environments

Next, activate the virtual environments in separate terminal windows:

**For Backend:**

```bash
   source backenv/bin/activate 
```

**For Client:**

```bash
   source frontenv/bin/activate 
```

### Step 3: Install Dependencies in the Backend Environment

Once the backend virtual environment (`v-backend`) is activated, install the backend dependencies:

```bash
cd Bluestock_Project\backend\API\
pip install -r requirements.txt
```

### Step 4: Set Up Your `.env` File

Create a `.env` file in the backend directory and add the following configurations:

```bash
EMAIL_USER='your_email_user'
EMAIL_PASS='your_password'
EMAIL_FROM='your_email'

PGHOST='ep-fancy-silence-a1v6jcff.ap-southeast-1.aws.neon.tech'
PGDATABASE='bluestockdb'
PGUSER='bluestockdb_owner'
PGPASSWORD='GFb7jmB1WNEg'
```

You can adjust the database settings as needed.

### Step 5: Run Database Migrations

Run the database migrations to set up the database schema:

```bash
python3 manage.py migrate
```

### Step 6: Create a Superuser

Create a superuser for managing the application:

```bash
python3 manage.py createsuperuser
```

### Step 7: Start the Development Server

Start the backend development server on port `8001`:

```bash
python3 manage.py runserver 8001
```

### Access the Admin Interface

Open your web browser and go to `http://127.0.0.1:8001/admin`. Log in using the superuser credentials to manage users and admins.

### API Documentation

For more details, visit the [API Documentation](https://github.com/bitz-1/bluestock-ipo-rest-api).

### Step 8: Install Dependencies in the Client Environment

Once the client virtual environment (`frontenv`) is activated, install the client dependencies:

```bash
cd client\frontend\
pip install -r requirements.txt
```

### Step 9: Run Database Migrations for the Client

Run the database migrations for the client application:

```bash
python manage.py migrate
```

### Step 10: Start the Client Server

Start the client development server on port `8000`:

```bash
python manage.py runserver 8000
```

---
## Contribution
- **Karan Singh** - [email](mailto:karansingh999703@gmail.com)(Team Lead & Backend SDE)
---

## License
This project is licensed under the Bluestock Fintech License. For more details, visit [Bluestock Fintech](https://bluestock.in/).
---
