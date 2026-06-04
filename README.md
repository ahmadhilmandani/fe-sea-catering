# SEA Catering - Frontend

The frontend web application for **SEA Catering**, an intuitive catering management and ordering platform. This client application provides a responsive UI for browsing catering menus, managing orders, and handling user profiles.

---
## 🌐 Deployed Link
Link : [Click Me](https://fe-sea-catering.netlify.app/)

Here's the credentials for admin :
* **Email :** `admin@sea.com`
* **Password :** `Admin123!`

---

## 🌟 Key Features

### 🏠 Homepage

* Company branding with the slogan:
  **"Healthy Meals, Anytime, Anywhere"**
* Business introduction and service overview
* Featured platform highlights
* Contact information section

### 🍱 Meal Plans

Users can browse available meal plans:

* Diet Plan
* Protein Plan
* Royal Plan

Each plan includes:

* Plan name
* Pricing information
* Description
* Optional image
* Detailed information modal

### ⭐ Testimonials

Customer review system featuring:

* Customer name
* Rating system
* Review message
* Review carousel/slider
* Testimonial submission form

### 📦 Subscription Management

Customers can subscribe to meal plans by selecting:

* Full Name
* Phone Number
* Meal Plan
* Meal Types:
  * Breakfast
  * Lunch
  * Dinner
* Delivery Days
* Allergies / Special Requests

Automatic subscription price calculation:

Subscription Price = Plan Price × Number of Meal Types × Delivery Days × 4.3

### 👤 Authentication & Authorization

* User Registration
* User Login
* Secure Logout
* Password Hashing
* Protected Routes
* Role-Based Access Control

Roles:
* User
* Admin

### 📊 User Dashboard

Authenticated users can:

* View active subscriptions
* Pause subscriptions
* Cancel subscriptions
* Monitor subscription status

### 📈 Admin Dashboard

Administrative analytics include:

* Date Range Filtering
* New Subscription Metrics
* Monthly Recurring Revenue (MRR)
* Reactivation Tracking
* Subscription Growth Analysis


---


## 🚀 Tech Stack

* **Core Framework:** [React](https://react.dev/) (v18+)
* **Build Tool & Bundler:** [Vite](https://vitejs.dev/) (For ultra-fast development and optimized production builds)
* **Routing:** [React Router DOM](https://reactrouter.com/) (Declarative routing for single-page applications)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework for rapid UI development)
* **HTTP Client:** [Axios](https://axios-http.com/) (For robust API requests to the Node.js backend)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your local machine:
* **Node.js** (v18.x or v20.x recommended)
* **npm** (v9+), **yarn**, or **pnpm**

---

## 🛠️ Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/ahmadhilmandani/fe-sea-catering.git](https://github.com/ahmadhilmandani/fe-sea-catering.git)
    cd fe-sea-catering
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or if using yarn/pnpm:
    # yarn install  |  pnpm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory of the project:
    ```bash
    touch .env
    ```
    Populate the `.env` file with the required variables (see the [Environment Variables](#-environment-variables) section below).

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

5.  **Build for Production:**
    ```bash
    npm run build
    ```
    This generates a production-ready `dist` folder that can be easily deployed to hosting platforms like Vercel, Netlify, or AWS S3.

---

## 🔑 Environment Variables

Because this project is built with **Vite**, all client-side environment variables must be prefixed with `VITE_`.

Create a `.env` file in the root directory and add the following configuration:

```env
# The base URL of your SEA Catering Backend API
VITE_API_BASE_URL=http://localhost:5000/api/v1

# (Optional) App environment identifier
VITE_APP_ENV=development
