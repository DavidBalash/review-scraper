
let reviewsData = '';

document.querySelectorAll('.ba-pa').forEach(function(node) {
        let date = node.getElementsByClassName("ba-Eb-Nf")[0].innerText;
        let name = node.getElementsByClassName("comment-thread-displayname")[0].innerText;
        let stars = "";

        node.querySelectorAll('.rsw-stars').forEach( function (element) {
           stars = element.getAttribute('aria-label');
        });
        
        let review = node.getElementsByClassName("ba-Eb-ba")[0].innerText
            .replace('"', '')
            .replace("'", "")
            .replace('\n', ' ');

        reviewsData = reviewsData + '\n{"date": "' + date
            + '", "name": "' + name
            + '", "stars": "' + stars
            + '", "review": "' + review +'"},';
});

browser.runtime.sendMessage({type: "set_reviews", reviews: reviewsData});

document.querySelectorAll('.Aa.dc-se').forEach(function(node) {node.click();});