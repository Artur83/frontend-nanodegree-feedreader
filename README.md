# Feed Reader Application

## Project overwiev


* The Application is used to fetch data from a remote site using Ajax and Api.
* Using Jasmine 2.1.2 to run the test.
* The App.js file is located in the (./js/app.js) folder.
* The feedreader.js file located in the (./jasmine/app.js) holds all the Test cases .


## Testing

* Open index.html file to run the application.
* Testing framework used is jasmine-2.1.2


## Test used in application

A) RSS Feeds
Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
B) The Menu
Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
C) Initial Entries
Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
D) New Feed Selection
Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
