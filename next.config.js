const {withFrameworkConfig} = require("./framework/common/config")

module.exports = withFrameworkConfig({
    framework: {
        name: process.env.NEXT_PUBLIC_FRAMEWORK
    },
    i18n: {
        locales: ["no-NB", "en-US", "es"],
        defaultLocale: "no-NB"
    }
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))