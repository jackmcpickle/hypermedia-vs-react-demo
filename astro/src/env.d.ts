/// <reference types="astro/client" />

interface Window {
    Alpine: import('alpinejs').Alpine;
}
// add to process.env
namespace NodeJS {
    interface ProcessEnv {
        DATABASE_URL: string;
        DATABASE_AUTH_TOKEN: string;
    }
}
