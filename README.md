

<p align="center">
  <img
    width=125
    alt="logo"
    src="https://raw.githubusercontent.com/em1dev/ElPatoDraw/refs/heads/main/Front%20UI/public/ElPatoDrawLogo.svg"
  />
</p>

<h1 style="font-size: 2em; font-weight: bold" align="center">
  El Pato Draw
</h1>

<p align="center">
  A online whiteboard with support for multiple files.
</p>

<p align="center">
  <a target="_blank" href="https://uptime.emy.dev/status/draw"><img
      alt="API Status Badge"
      src="https://uptime.emy.dev/api/badge/1/status?label=API%20Status"
  /></a>
  <a target="_blank" href="https://uptime.emy.dev/status/draw"><img
      alt="UI Status Badge"
      src="https://uptime.emy.dev/api/badge/3/status?label=UI%20Status"
  /></a>
<p>

<p align="center">
  Live at <a target="_blank" href="https://draw.elpato.dev">draw.elpato.dev</a>
</p>


## 🗒️ Structure

* Front UI - The front end is built with react and vite
* Metadata API - A .net project with a PostgreSQL database that stores the file metadata and folder structure.
* File Content API - A cloudlflare worker which stores the content of each file to a R2 bucket
