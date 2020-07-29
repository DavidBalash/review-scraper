
let reviews = "NONE";

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.type) {
        case "get_reviews":
            sendResponse(reviews);
            break;
        case "set_reviews":
            reviews = request.reviews;
            break;
    }
});

