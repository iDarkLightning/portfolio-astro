/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly CMS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
