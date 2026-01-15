# Nuxt 3 Job Board Application

A production-style frontend job board built with **Nuxt 3** and **Vue 3**, focused on **SEO**, **performance**, and **clean project structure**. This project demonstrates real-world frontend practices used in modern Nuxt applications.

---

## 🚀 Features

* Server-Side Rendering (SSR) for SEO optimization
* Dynamic job listing and job detail pages
* Global state management with Pinia
* REST API integration
* SEO meta tags using `useHead`
* Responsive UI (mobile-first)
* Clean and maintainable folder structure

---

## 🛠 Tech Stack

* **Framework:** Nuxt 3
* **Frontend:** Vue 3 (Composition API)
* **State Management:** Pinia
* **Styling:** CSS / SCSS
* **Data Fetching:** useFetch, useAsyncData
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
nuxt-job-board/
├─ components/      # Reusable UI components
├─ pages/           # File-based routing
│  ├─ index.vue     # Job listing page
│  └─ jobs/[id].vue # Job detail page
├─ layouts/         # App layouts
├─ stores/          # Pinia stores
├─ composables/     # Reusable composables
├─ assets/          # Styles and static assets
├─ public/          # Public files
└─ nuxt.config.ts   # Nuxt configuration
```

---

## 🔍 SEO Strategy

* SSR enabled by default using Nuxt 3
* Dynamic page titles and meta descriptions
* Open Graph meta tags for sharing
* SEO-friendly URLs with dynamic routing

---

## ⚙️ Setup & Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📌 What This Project Demonstrates

* Understanding of SSR vs CSR and SEO impact
* Ability to structure a real Nuxt 3 project
* Clean state management using Pinia
* Real-world API consumption patterns

---

## 📈 Future Improvements

* Authentication (login / register)
* Job search and advanced filtering
* Pagination and caching optimization
* CMS integration (Strapi)

---

## 👤 Author

**Ra Sovanna**
Frontend Developer (Nuxt.js / Vue.js)
