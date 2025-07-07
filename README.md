# Elkiya 3D Digital World

This is a Next.js project for Elkiya, a 3D digital marketing agency website. The project is built with a modern tech stack and features interactive 3D elements.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **UI**: [React](https://react.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
-   **3D Graphics**: [Three.js](https://threejs.org/)
-   **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## Project Structure

The project follows a standard Next.js App Router structure.

```
.
├── src/
│   ├── app/                    # Next.js App Router pages and layouts
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main page component
│   ├── components/
│   │   ├── sections/           # Components for each section of the page (Home, About, etc.)
│   │   ├── ui/                 # Reusable UI components from ShadCN
│   │   ├── footer.tsx          # Site footer
│   │   ├── header.tsx          # Site header
│   │   ├── interactive-object.tsx # Reusable 3D object component
│   │   └── three-scene.tsx     # Main 3D background scene for the homepage
│   ├── hooks/                  # Custom React hooks
│   └── lib/                    # Utility functions
├── public/                     # Static assets (images, fonts, etc.)
├── package.json                # Project dependencies and scripts
└── ... (configuration files)
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or later) and npm installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Development Server

To run the app in development mode, execute the following command. This will start the application on `http://localhost:9002`.

```sh
npm run dev
```

The page will automatically reload if you make changes to the files.

### Building for Production

To create a production build of the application, run:

```sh
npm run build
```

This command bundles the application for production. You can then start the production server with:

```sh
npm run start
```

## Learn More

To learn more about the technologies used in this project, check out the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [React Documentation](https://react.dev/) - learn about React.
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS.
-   [ShadCN UI Documentation](https://ui.shadcn.com/docs) - learn about the UI components.
-   [Three.js Documentation](https://threejs.org/docs/) - learn about 3D graphics.
