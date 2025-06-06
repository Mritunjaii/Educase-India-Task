# Educase-India-Task


## 🏗 Features

- Add school information to a MySQL database.
- Retrieve a list of schools sorted by distance from a user’s location.
- Input validation for safe and clean data handling.
- Uses Haversine formula to calculate geographical distance.

---

## 📦 API Endpoints

### 1. Add School

- **URL:** `/api/v1/school/addSchool`
- **Method:** `POST`

* **Functionality:**

  * Validates all fields.
  * Inserts new school into the `schools` table.

### 2. List Schools

* **URL:** `/api/v1/school/listSchools`

* **Method:** `GET`


* **Functionality:**

  * Fetches all schools from the database.
  * Calculates the distance between user and each school.
  * Returns the list sorted by nearest schools first.


