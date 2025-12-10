# Hostinger Deployment Setup

To enable automated deployment, you need to add your Hostinger FTP credentials to your GitHub repository secrets.

## Steps

1.  **Get your FTP Details from Hostinger:**
    *   Log in to your Hostinger Dashboard.
    *   Go to **Files** > **FTP Accounts**.
    *   Note down your **FTP Host** (usually `ftp.yourdomain.com` or an IP), **FTP Username**, and **FTP Password**.

2.  **Add Secrets to GitHub:**
    *   Go to your GitHub Repository.
    *   Click on **Settings** > **Secrets and variables** > **Actions**.
    *   Click **New repository secret**.
    *   Add the following three secrets:

    | Name | Value |
    | :--- | :--- |
    | `FTP_SERVER` | Your FTP Host (e.g., `ftp.scriptjacker.in` or `185.xxx.xxx.xxx`) |
    | `FTP_USERNAME` | Your FTP Username (e.g., `u123456789`) |
    | `FTP_PASSWORD` | Your FTP Password |

3.  **Trigger Deployment:**
    *   Once these secrets are saved, the next time you push code to the `main` branch, the deployment will start automatically.
    *   You can check the progress in the **Actions** tab of your repository.
