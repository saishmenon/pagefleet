//imports
import createCustomPages from "./scripts/createCustomPages";
import createPages from "./scripts/createPages";
import saveTemplate from "./scripts/saveTemplate";

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
(async () => {
    try {
        let localStorageString = await figma.clientStorage.getAsync(
            "templates"
        );
        console.log("Successfully retrieved templates from client storage");
        //send a message to the UI with the credentials storred in the client
        figma.ui.postMessage({
            type: "load-saved-templates",
            status: true,
            localStorageString: localStorageString,
        });
    } catch (err) {
        console.log(err);
    }
})();
