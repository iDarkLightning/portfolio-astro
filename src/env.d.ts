/// <reference types="astro/client" />
interface ImportMetaEnv {
  CMS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
