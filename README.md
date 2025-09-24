[![Netlify Status](https://api.netlify.com/api/v1/badges/e53ccbb9-4808-4aec-9e83-ca88f37a6e54/deploy-status)](https://app.netlify.com/projects/zingy-kelpie-98db75/deploys)

# El Pato Draw

A online whiteboard with support for multiple files.

## Structure

* Front UI - The front end is built with react and vite
* Metadata API - A .net project with a PostgreSQL database that stores the file metadata and folder structure.
* File Content API - A cloudlflare worker which stores the content of each file to a R2 bucket
