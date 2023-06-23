'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

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
    // (async () => {
    //     try {
    //         await figma.clientStorage.setAsync("templates", template);
    //         figma.notify("Template saved!");
    //     } catch (err) {
    //         figma.notify(
    //             "There was an issue saving your settings. Please try again."
    //         );
    //     }
    // })();
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
    // figma.closePlugin();
};
// show the UI
figma.showUI(__html__, { themeColors: true, width: 288, height: 372 });
//INITIALIZE PLUGIN
//get templates from client storage
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let localStorageString = yield figma.clientStorage.getAsync("templates");
        console.log("Successfully retrieved templates from client storage");
        //send a message to the UI with the credentials storred in the client
        figma.ui.postMessage({
            type: "load-saved-templates",
            status: true,
            localStorageString: localStorageString,
        });
    }
    catch (err) {
        console.log(err);
    }
}))();
//# sourceMappingURL=code.js.map
