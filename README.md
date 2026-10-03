# Kottapalli Khadarbenerji – Portfolio (React + Vite)

## Run locally (Node.js 18+)
```bash
npm install
npm run dev
```
`npm run dev` starts Vite with `--host`: open the Local URL on your computer, or the Network URL on your phone (same Wi-Fi).

## Personalize
- Edit **`src/data.js`**: LinkedIn, GitHub, projects, text, resume file name.
- Put your resume in **`public/`** and set `resumeFile` in `data.js` to show the download button.
- Colors and spacing are at the top of `src/styles.css`.

## Publish
Push to GitHub, then Settings > Pages > Source: **GitHub Actions** (workflow included), or connect the repository to Netlify (build command `npm run build`, publish directory `dist`).
