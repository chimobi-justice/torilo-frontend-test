# HR Management Dashboard

A modern, responsive Human Resources dashboard built with **React**, **TypeScript**, and **Redux Toolkit** for efficient state management. It leverages **Shadcn UI** components and **Tailwind CSS** for a sleek, highly customizable user interface, offering features for attendance tracking, task management, team overview, and time-off requests.

## 🚀 Features

*   **Employee Attendance**: Clock-in/out functionality with location awareness (On-Site/Remote) and break management.
*   **Task Management**: View and manage assigned tasks with completion status tracking.
*   **Team Overview**: Browse team members, view profiles, and contact details.
*   **Time-off Management**: Request and track various types of time-off (annual, sick, birthday, etc.) with policy details.
*   **Performance Snapshots**: Monitor attendance performance and punctuality.
*   **Celebrations**: Highlight employee birthdays and job anniversaries.
*   **Modular Architecture**: Organized into features and shared modules for scalability and maintainability.
*   **Responsive Design**: Optimized for mobile screen sizes using Tailwind CSS.
*   **Dynamic Routing**: Implemented with React Router DOM for seamless navigation.

## 🛠️ Technologies Used

| Technology         | Description                                                          |
| :----------------- | :------------------------------------------------------------------- |
| **React**          | A JavaScript library for building user interfaces.                   |
| **TypeScript**     | A typed superset of JavaScript that compiles to plain JavaScript.    |
| **Vite**           | A fast build tool that provides a lightning-fast development experience. |
| **Redux Toolkit**  | The official, opinionated, batteries-included toolset for efficient Redux development. |
| **React Router DOM** | Declarative routing for React.                                       |
| **Tailwind CSS**   | A utility-first CSS framework for rapidly building custom designs.   |
| **Shadcn UI**      | A collection of re-usable components built with Radix UI and Tailwind CSS. |
| **Radix UI**       | A low-level UI component library for building accessible design systems. |
| **Lottie React**   | A React component for rendering After Effects animations exported as JSON. |
| **Class Variance Authority (CVA)** | A utility for managing component variants with Tailwind CSS classes. |

## 🏁 Getting Started

## Prerequisites

The following should be installed in your machine.

- [Node.Js](https://nodejs.org/en/download/)

## How To Install And Run The Application

- Clone this [Repo](https://github.com/chimobi-justice/torilo-frontend-test) and `cd` into it
- Install the dependencies by running `npm install`
- Start the application on development mode by running `npm run dev`

## Project structure

This repository has the following structure:

<!-- If you make any changes in the project structure, remember to update it. -->

## Please Note all pages inside modules/app are all empty pages except from home.

```text
  ├── src
       ├── assets                 # Various files like images used in app
       ├── components             # Various generic components from shadcn
       ├── constant               # Constant data doesn't change within the application lifecycle
       ├── lib                    # Resuseable functions used in app
       ├── hooks                  # Various reuseable functions that uses React's internal Hooks
       ├── Interface              # Api response interface definations
       ├── features               # Redux slices
       ├── modules
            ├── Layout                 # Reuseable App Layout
            ├── shared                 # Reuseable App components
            ├── app
                ├── home            # Home App
                    ├── components  # Various reuseable components belonging to Home
                    ├── pages       # Various UI screen belonging to Home
                    ├── routes      # Various routes belonging to Home
                ├── assets           # Asset App
                    ├── components  # Various reuseable components belonging to assets
                    ├── pages       # Various UI screen belonging to assets
                    ├── routes      # Various routes belonging to assets
                ├── attendance      # Attendance App
                    ├── components  # Various reuseable components belonging to attendance
                    ├── pages       # Various UI screen belonging to attendance
                    ├── routes      # Various routes belonging to attendance
                ├── benefits        # Benefits App
                    ├── components  # Various reuseable components belonging to benefits
                    ├── pages       # Various UI screen belonging to benefits
                    ├── routes      # Various routes belonging to benefits
                ├── documents         # Documents App
                    ├── components  # Various reuseable components belonging to documents
                    ├── pages       # Various UI screen belonging to documents
                    ├── routes      # Various routes belonging to documents
                ├── pay-slips       # Pay-slips App
                    ├── components  # Various reuseable components belonging to pay-slips
                    ├── pages       # Various UI screen belonging to pay-slips
                    ├── routes      # Various routes belonging to pay-slips
                ├── people       # People App
                    ├── components  # Various reuseable components belonging to people
                    ├── pages       # Various UI screen belonging to people
                    ├── routes      # Various routes belonging to people
                ├── performance-review  # Performance-review App
                    ├── components  # Various reuseable components belonging to performance-review
                    ├── pages       # Various UI screen belonging to performance-review
                    ├── routes      # Various routes belonging to performance-review
                ├── settings       # Settings App
                    ├── components  # Various reuseable components belonging to settings
                    ├── pages       # Various UI screen belonging to settings
                    ├── routes      # Various routes belonging to settings 
                ├── shift-rota       # Shift-rota App
                    ├── components  # Various reuseable components belonging to shift-rota
                    ├── pages       # Various UI screen belonging to shift-rota
                    ├── routes      # Various routes belonging to shift-rota
                ├── tasks       # Tasks App
                    ├── components  # Various reuseable components belonging to tasks
                    ├── pages       # Various UI screen belonging to tasks
                    ├── routes      # Various routes belonging to tasks
                ├── time-off       # Time-off App
                    ├── components  # Various reuseable components belonging to time-off
                    ├── pages       # Various UI screen belonging to time-off
                    ├── routes      # Various routes belonging to time-off
                ├── training       # Training App
                    ├── components  # Various reuseable components belonging to training
                    ├── pages       # Various UI screen belonging to training
                    ├── routes      # Various routes belonging to training      

       ├── route
            ├── router             # App global route
       ├── store
            ├── index             # App Redux configure store

```

## 📝 Usage

Once the application is running, you can explore its various features:

*   **Navigation**: Use the top and bottom navigation bars to switch between different sections like Home, People, Time Off, Tasks, etc.
*   **Home Dashboard**:
    *   **Clock Watch**: Click "Clock-In" to start your work session. If already clocked in, "Clock-Out" becomes available. You can also "Take Break" when clocked in.
    *   **Location Toggle**: Switch between "Remote" and "On-Site" for attendance tracking.
    *   **Tasks**: View your assigned tasks and their completion status.
    *   **My Teams**: See a list of your team members. Click "Contact" to view more details about a specific team member in a dialog.
    *   **Time-off**: Review your time-off balances and request new time off using the dropdown.
    *   **Timeoff Record**: Check upcoming and ongoing time-off requests.
*   **Dialogs**: Interact with confirmation dialogs for clock-in/out and break actions.
*   **Responsive Experience**: Mobile first  mobile drawer menu for navigation.

## 🏗️ App (Global Practices & Conventions)

 *  To ensure scalability, maintainability, and developer productivity, the App layer follows a set of conventions and global practices:

### 📂 Scalable Folder Structure

 * Feature-first organization: Each domain (e.g., attendance, tasks, time-off) is isolated in src/modules/app/.

 * Shared modules: Reusable code (e.g., layout, shared, hooks, lib).

 * Consistency: Every module contains components/, pages/, and routes/ for predictable structure.

### Custom Hooks

Redux helpers:

 * useAppSelector → Typed version of useSelector

 * useAppDispatch → Typed version of useDispatch

### Global State Management

 * Configured with Redux Toolkit for predictable state flow.

 * Slices separated by domain under features/.

## 👤 Author

**Justice Chimobi**

*   LinkedIn: [https://www.linkedin.com/in/justice-chimobi](https://www.linkedin.com/in/justice-chimobi)
---

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)