import { writable } from "svelte/store";

// const TemplateStore = writable([
//     {
//         name: "Simple",
//         pages: "⭐️ Cover,🧑🏻‍💻 Dev Ready, 🤖 Prototypes, 🌍 Designs, 🧩 Components, 🧪 Playground",
//     },
//     {
//         name: "Medium",
//         pages: "⭐️ Cover,🧑🏻‍💻 Dev Ready,🌍 Design Explorations, 🤖 Prototypes, ✅ Research, 🧩 Components, 📑 Templates & Resources 🧪 Playground",
//     },
//     {
//         name: "Advanced",
//         pages: "⭐️ Cover,🧑🏻‍💻 Dev Ready,🌍 Design Explorations, 🤖 Prototypes, ✅ Research, 🧩 Components, 📑 Templates & Resources 🧪 Playground",
//     },
// ]);
let TemplateStore = writable([]);

let dataFromLocalStorage = writable("taka");

export { TemplateStore, dataFromLocalStorage };
