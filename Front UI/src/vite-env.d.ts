interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_FILE_WORKER_API: string,
  readonly VITE_METADATA_API: string,
  readonly VITE_SUPABASE_URL: string,
  readonly VITE_SUPABASE_PUBLIC_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
