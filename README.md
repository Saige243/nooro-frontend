
![2025-07-30 14 05 09](https://github.com/user-attachments/assets/dbee4465-52d4-434f-b672-00f22886fba9)
# Nooro Todo List App - Frontend

A modern, responsive Todo List application built with Next.js 15, TypeScript, and Tailwind CSS. This frontend communicates with an Express.js backend API to provide a complete task management experience.

## 🚀 Features

- **Task Management**: Create, edit, delete, and toggle completion status of tasks
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Instant UI updates when tasks are modified
- **Color Coding**: Assign colors to tasks for better organization
- **Task Statistics**: View total tasks and completion count
- **Confirmation Dialogs**: Safe deletion with confirmation prompts
- **Modern UI**: Clean, intuitive interface following contemporary design principles

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Navigation**: Next.js Navigation
- **HTTP Client**: Fetch API

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js 18+ installed
- npm or yarn package manager
- The backend API running (see backend repository)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <https://github.com/Saige243/nooro-frontend.git>
cd todo-frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Make sure this URL matches your backend API server address.

### 4. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
src/
├── app/
│   ├── create-task/
│   │   └── page.tsx              # Create new task page
│   ├── edit-todo/
│   │   └── [id]/
│   │       └── page.tsx          # Edit task page
│   ├── consts.ts                 # Consts
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page (task list)
│   └── types.tsx                 # Types
├── components/
│   ├── CreateTaskItemButton.tsx  # Create Task Button
│   ├── TaskItem.tsx              # Individual task card component
│   ├── TaskItemForm.tsx          # Task creation/editing form
│   └── TodoHero.tsx              # Todo App Hero section
├── actions/
│   └── todos.ts                  # API calls and server actions
└── types/
    └── index.ts                  # TypeScript type definitions
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

### Creating a Task

1. Click the "Create Task" button on the home page
2. Enter a task title (required)
3. Select a color for the task
4. Click "Create Task" to save

### Editing a Task

1. Click on any task card from the home page
2. Modify the title or color as needed
3. Click "Save Changes" to update
4. Use back button to discard changes

### Managing Tasks

- Toggle completion status using the checkbox on each task
- Delete tasks using the delete button (with confirmation)
- View task statistics at the top of the page

## 🎯 Performance Optimizations

- **Next.js App Router**: Efficient routing and rendering
- **Component Reusability**: Modular components reduce bundle size
- **Optimistic Updates**: Immediate UI feedback for better UX
- **Error Boundaries**: Graceful error handling
- **TypeScript**: Enhanced development experience and fewer runtime errors

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Errors**

   - Ensure the backend server is running
   - Check the `NEXT_PUBLIC_API_URL` environment variable
   - Verify CORS settings on the backend

2. **Build Errors**

   - Run `npm run type-check` to identify TypeScript issues
   - Ensure all dependencies are properly installed

3. **Styling Issues**
   - Verify Tailwind CSS is properly configured
   - Check for conflicting CSS classes

## 📝 Development Notes

- Uses Next.js 15 App Router with the new `React.use()` API for params
- Implements proper TypeScript typing throughout the application
- Follows React best practices for state management and component composition
- Includes comprehensive error handling and user feedback

## 📄 License

This project is part of a take-home assessment and is for evaluation purposes.

---

**Note**: Make sure the backend API is running before starting the frontend application. Refer to the backend repository for setup instructions.
