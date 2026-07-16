# Frontend Adhivasindo

Frontend untuk Take Home Test Fullstack Adhivasindo. Project ini menggunakan React, Vite, dan TypeScript sebagai fondasi aplikasi LMS.

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
- shadcn/ui
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

## Run Project

```bash
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Environment

```env
VITE_API_URL=http://localhost:8000/api
```

## Folder Structure

```text
src/
├── api/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   └── ui/
├── hooks/
├── layouts/
├── lib/
├── pages/
│   ├── auth/
│   └── content/
├── routes/
├── services/
├── types/
└── utils/
```

## Routes

| Path | Description |
| --- | --- |
| `/` | Redirect ke `/login` |
| `/login` | Placeholder halaman login |
| `/contents` | Placeholder halaman content |
| `*` | Placeholder halaman 404 |
