module.exports = ({ env }) => ({
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url: env("WEBSITE", "http://localhost:1337"),
    admin: {
        auth: {
            secret: env("ADMIN_JWT_SECRET", "856ea27b1a634074e7ce09f1b6d277bf"),
        },
    },
});