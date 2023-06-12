'use strict';

function createCustomPages(customPages) {
    for (let page of customPages.slice(1)) {
        let newPage = figma.createPage();
        newPage.name = page;
    }
    figma.currentPage.name = customPages[0];
    figma.notify("✅ Pages created!");
}
//# sourceMappingURL=createCustomPages.js.map

const pages = {
    simple: [
        "⭐️ Cover",
        "🧑🏻‍💻 Dev Ready",
        "🤖 Prototypes",
        "🌍 Designs",
        "🧩 Components",
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
        "✅ Research",
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
        "✅ Research",
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

function createPages(template) {
    if (template === "simple") {
        for (let page of pages.simple.slice(1)) {
            let newPage = figma.createPage();
            newPage.name = page;
        }
        figma.currentPage.name = pages.simple[0];
        figma.notify("✅ Successfully created a simple template for you!");
    }
    else if (template === "intermediate") {
        for (let page of pages.intermediate.slice(1)) {
            let newPage = figma.createPage();
            newPage.name = page;
        }
        figma.currentPage.name = pages.intermediate[0];
        figma.notify("✅ Your intermediate project has been setup successfully!");
    }
    else if (template === "advanced") {
        for (let page of pages.advanced.slice(1)) {
            let newPage = figma.createPage();
            newPage.name = page;
        }
        figma.currentPage.name = pages.advanced[0];
        figma.notify("✅ Your Advanced project has been setup successfully!");
    }
}
//# sourceMappingURL=createPages.js.map

function saveTemplate(template) {
    console.log(template);
    // figma.clientStorage
    //         .setAsync("templates", msg.template)
    //         .then(() => {
    //             console.log("Data stored successfully");
    //         })
    //         .catch((error) => {
    //             console.error("Error storing data:", error);
    //         });
    // figma.clientStorage
    //     .getAsync("templates")
    //     .then((value) => {
    //         console.log("Retrieved value:", value);
    //     })
    //     .catch((error) => {
    //         console.error("Error retrieving data:", error);
    //     });
}
//# sourceMappingURL=saveTemplate.js.map

//imports
// show the UI
figma.showUI(__html__, { themeColors: true, width: 288, height: 372 });
// receives message from UI
figma.ui.onmessage = (msg) => {
    switch (msg.type) {
        //generate pages based on template selected by user
        case "create-pages":
            createPages(msg.template);
            break;
        //generate pages based on the edits made to an existing template selected by user
        case "create-custom-pages":
            createCustomPages(msg.customPages);
            break;
        //save template created by user
        case "save-template":
            saveTemplate(msg.template);
            break;
    }
    // if (msg.type === "create-pages") {
    //     createPages(msg.template);
    // } else if (msg.type === "create-custom-pages") {
    //     createCustomPages(msg.customPages);
    // } else if (msg.type === "save-template") {
    //     saveTemplate(msg.template);
    // }
    // figma.closePlugin();
};
//# sourceMappingURL=code.js.map
