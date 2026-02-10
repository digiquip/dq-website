# Project Setup Guide

This guide will help you set up the DQ Website project on Windows.

## Prerequisites

### 1. Install Node.js

The project requires Node.js version 18 or higher (as specified in `package.json`).

**Download and Install:**
1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS (Long Term Support) version (recommended)
3. Run the installer and follow the setup wizard
4. Make sure to check "Add to PATH" during installation

**Verify Installation:**
Open a new PowerShell window and run:
```powershell
node --version
npm --version
```

Both commands should return version numbers.

### 2. Install Yarn (Optional but Recommended)

The project uses Yarn as the package manager (see `README.md`). You can install it globally:

```powershell
npm install -g yarn
```

**Verify Installation:**
```powershell
yarn --version
```

**Alternative:** You can also use npm instead of yarn. Both `package.json` and `package-lock.json` are present, so npm will work fine.

## Project Setup Steps

### Step 1: Install Dependencies

Navigate to the project directory and install dependencies:

**Using Yarn (recommended):**
```powershell
cd c:\Users\cwest\Documents\GitHub\dq-website
yarn install
```

**Or using npm:**
```powershell
cd c:\Users\cwest\Documents\GitHub\dq-website
npm install
```

This will create the `node_modules` folder and install all required dependencies.

### Step 2: Start the Development Server

**Using Yarn:**
```powershell
yarn start
```

**Or using npm:**
```powershell
npm run start
```

This will:
- Start the Docusaurus development server
- Open your browser automatically
- Watch for file changes and hot-reload

The site will typically be available at `http://localhost:3000`

## Troubleshooting

### Issue: "npm/yarn is not recognized"
- **Solution:** Node.js is not installed or not in your PATH. Install Node.js and restart your terminal.

### Issue: "npm.ps1 cannot be loaded because running scripts is disabled"
This is a PowerShell execution policy issue. You have three options:

**Option 1: Bypass execution policy for current session (Quick Fix)**
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
npm install
```

**Option 2: Use Command Prompt instead**
- Open Command Prompt (cmd.exe) instead of PowerShell
- Navigate to the project directory and run `npm install`

**Option 3: Change execution policy permanently (Requires Admin)**
1. Open PowerShell as Administrator
2. Run: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
3. Close and reopen PowerShell
4. Run `npm install`

**Recommended:** Use Option 1 for a quick fix, or Option 2 if you prefer not to change PowerShell settings.

### Issue: "node_modules folder doesn't exist"
- **Solution:** Run `yarn install` or `npm install` to install dependencies.

### Issue: Port 3000 is already in use
- **Solution:** Either stop the other application using port 3000, or set a different port:
  ```powershell
  yarn start --port 3001
  ```

### Issue: Permission errors on Windows
- **Solution:** Run PowerShell as Administrator, or check that you have write permissions to the project directory.

## Additional Commands

- **Build for production:** `yarn build` or `npm run build`
- **Clear cache:** `yarn clear` or `npm run clear`
- **Serve production build:** `yarn serve` or `npm run serve`

## Next Steps

Once the development server is running, you can:
- Edit files in `src/` for React components
- Edit files in `docs/` for documentation pages
- Edit files in `blog/` for blog posts
- Changes will automatically reload in the browser
