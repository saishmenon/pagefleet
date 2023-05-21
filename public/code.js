'use strict';

const pages = {
    simple: [
        "⭐️ Cover",
        "🧑🏻‍💻 Dev Ready",
        "🤖 Prototypes",
        "🌍 Designs",
        "🧩 Components",
        "✅ Research",
        "🧪 Playground",
    ],
    intermediate: [
        "⭐️ Cover",
        "----------------------------------",
        "🧑🏻‍💻 Dev Ready",
        "----------------------------------",
        "🌍 Design Explorations",
        "----------------------------------",
        "🤖 Prototypes",
        "----------------------------------",
        "🧩 Components",
        "📑 Templates & Resources",
        "----------------------------------",
        "🧪 Playground",
    ],
    advanced: [
        "⭐️ Cover",
        "✅ Goals",
        "----------------------------------",
        "🧑🏻‍💻 Dev Ready",
        "          ⮑ Phase 1",
        "          ⮑ Phase 2",
        "----------------------------------",
        "🧑🏻‍💻 Staging",
        "          ⮑ Phase 1",
        "          ⮑ Phase 2",
        "----------------------------------",
        "🌍 Solution Explorations (Design)",
        "          ⮑ Iteration 3",
        "          ⮑ Iteration 2",
        "          ⮑ Iteration 1",
        "----------------------------------",
        "🤖 Prototypes",
        "➡️ User Flows",
        "📄 Wireframes",
        "----------------------------------",
        "✍️ Feedback",
        "----------------------------------",
        "🧩 Components",
        "📑 Templates & Resources",
        "📷 Images & Illustrations",
        "----------------------------------",
        "🧪 Playground",
    ],
};

figma.showUI(__html__, { themeColors: true, width: 256, height: 300 });
figma.ui.onmessage = (msg) => {
    if (msg.type === "create-pages") {
        if (msg.template === "simple") {
            for (let page of pages.simple.slice(1)) {
                let newPage = figma.createPage();
                newPage.name = page;
            }
            figma.currentPage.name = pages.simple[0];
            figma.notify("✅ Successfully created a simple template for you!");
        }
        else if (msg.template === "intermediate") {
            for (let page of pages.intermediate.slice(1)) {
                let newPage = figma.createPage();
                newPage.name = page;
            }
            figma.currentPage.name = pages.intermediate[0];
            figma.notify("✅ Your intermediate project has been setup successfully!");
        }
        else if (msg.template === "advanced") {
            for (let page of pages.advanced.slice(1)) {
                let newPage = figma.createPage();
                newPage.name = page;
            }
            figma.currentPage.name = pages.advanced[0];
            figma.notify("✅ Your Advanced project has been setup successfully!");
        }
    }
    figma.closePlugin();
};
//# sourceMappingURL=code.js.map
