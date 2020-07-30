
browser.runtime.sendMessage({type: "get_reviews"}, reviews => {
    document.getElementById("reviews").value = reviews;
});



