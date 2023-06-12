//imports
import createCustomPages from "./scripts/createCustomPages";
import createPages from "./scripts/createPages";
import saveTemplate from "./scripts/saveTemplate";

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
