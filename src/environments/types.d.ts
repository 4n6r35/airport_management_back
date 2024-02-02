export { };

declare global {
    declare namespace NodeJS {
        interface ProcessEnv {
            REST_PORT: number
        }
    }
}