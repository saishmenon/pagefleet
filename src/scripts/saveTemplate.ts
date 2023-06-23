export default function saveTemplate(template) {
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
