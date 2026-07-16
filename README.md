# Frontend Adhivasindo

## Project Overview

Frontend LMS untuk Take Home Test Fullstack Adhivasindo. Aplikasi ini menyediakan login JWT, dashboard visual, content management, search, pagination, dan form CRUD content yang terhubung ke Backend Adhivasindo.

## Features

- Login menggunakan JWT backend.
- Protected route untuk halaman aplikasi.
- Dashboard LMS sesuai referensi desain.
- List content dengan search dan pagination.
- Create, edit, dan delete content.
- Responsive layout untuk desktop, tablet, dan mobile.

## Tech Stack

- React 19
- Vite
- TypeScript
- React Router DOM
- Axios
- TanStack Query
- React Hook Form
- Zod
- Tailwind CSS
- shadcn/ui configuration
- Lucide React
- Sonner
- ESLint
- Prettier

## Installation

```bash
npm install
```

Salin file environment example jika diperlukan untuk development lokal.

```bash
copy .env.example .env
```

## Environment Variables

```env
VITE_API_URL=http://localhost:8000/api
```

## API URL Configuration

Frontend membaca base URL backend dari `VITE_API_URL`. Pastikan backend Laravel berjalan dan URL mengarah ke endpoint `/api`.

## Running Project

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Folder Structure

```text
src/
├── api/
├── assets/
├── components/
│   ├── common/
│   ├── content/
│   ├── dashboard/
│   ├── layout/
│   └── ui/
├── data/
├── hooks/
├── layouts/
├── lib/
├── pages/
│   ├── auth/
│   ├── content/
│   └── dashboard/
├── routes/
├── services/
├── types/
└── utils/
```

## Routes

| Path | Description |
| --- | --- |
| `/` | Redirect ke `/login`. |
| `/login` | Login page. |
| `/dashboard` | Protected dashboard page. |
| `/contents` | Protected content list with search and pagination. |
| `/contents/create` | Protected create content page. |
| `/contents/:id/edit` | Protected edit content page. |
| `*` | 404 page. |

## Author

Fadlan Syah
