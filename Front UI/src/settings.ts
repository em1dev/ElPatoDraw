export const SUPABASE_CONFIG = {
  url: import.meta.env.VITE_SUPABASE_URL,
  token: import.meta.env.VITE_SUPABASE_PUBLIC_TOKEN
};

export const API_URLS = {
  worker: import.meta.env.VITE_FILE_WORKER_API,
  metadataApi: import.meta.env.VITE_METADATA_API
};
