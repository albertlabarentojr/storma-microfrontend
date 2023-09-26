module.exports = {
    content: ["./src/**/*.{html,js}"],
    safelist: [
        {
            pattern: /./, // Load all tailwind classes for DEMO purposes only
        },
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
