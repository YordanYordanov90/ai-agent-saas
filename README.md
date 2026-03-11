# FlowAi - Autonomous Executive Assistant

<div align="center">
  <p><strong>The AI that actually does things.</strong><br>
  FlowAi is an autonomous AI executive assistant that clears your inbox, tasks, and calendar. Completely running magically in the background.</p>
</div>

&nbsp;

## ✨ Features

*   **Inbox Zero Autopilot:** Our AI engine processes emails every 15 minutes, categorizes the noise, and drafts human-like replies for your approval.
*   **Smart Extraction:** Automatically parses action items from long threads and calendar invites. Your to-do list builds itself while you sleep.
*   **Time Bending:** Analyzes your deep work habits to suggest optimal meeting times, auto-resolve conflicts, and ruthlessly defend your schedule.
*   **Enterprise-Grade Security:** Implementing zero-trust architecture principles and encrypting all sensitive data at rest and in transit.

## 🛠️ Tech Stack

This project is built using modern, type-safe web technologies:

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
*   **Authentication:** [Clerk](https://clerk.com/)
*   **Database ORM:** [Drizzle ORM](https://orm.drizzle.team/)
*   **Database:** PostgreSQL (Configured via `DATABASE_URL`)
*   **Icons:** [Lucide React](https://lucide.dev/icons/)

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js and npm (or pnpm/yarn) installed. 
You will also need to set up a PostgreSQL database and create an account with Clerk for authentication.

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/flowai.git
    cd flowai
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Variables**
    Create a `.env` file in the root directory and add the following keys. 
    You will need to procure these from your Clerk Dashboard, your Database provider, and your LLM Provider.

    ```env
    # Authentication (Clerk)
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
    CLERK_SECRET_KEY=sk_test_...
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

    # Database
    DATABASE_URL=postgresql://user:password@host:port/dbname

    # AI / LLM Providers
    ANTHROPIC_API_KEY=sk-ant-...
    # OPENAI_API_KEY=sk-proj-...
    ```

4.  **Database Migrations**
    Run the Drizzle migrations to configure your PostgreSQL schema.
    ```bash
    npm run db:push
    # or via drizzle-kit directly
    npx drizzle-kit push
    ```

5.  **Run the Development Server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.


## 📜 License

[MIT License](LICENSE)
