/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 * We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    // test suite is all about the RSS feeds definitions, the allFeeds variable in application.
    describe('RSS Feeds', function() {
        it('are defined', function() {
            // check that the allFeeds variable has been defined
            expect(allFeeds).toBeDefined();
            // check that the allFeeds variable is not empty
            expect(allFeeds.length).not.toBe(0);
        });

        it('it has a URL and it is not empty', function() {
            // loop through each feed in the allFeeds object
            allFeeds.forEach(function(feed) {
                // check that the feed has a URL defined
                expect(feed.url).toBeDefined();
                // check that the URL is not empty
                expect(feed.url.length).not.toBe(0);
                // check that the URL contain http or https
                expect(feed.url).toMatch(/^(http|https):\/\//);
            });
        });

        it('it has a name and it is not empty', function() {
            // loop through each feed in the allFeeds object
            allFeeds.forEach(function(feed) {
                // check that the feed has a name defined
                expect(feed.name).toBeDefined();
                // check that the name is not empty
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    // test suit is all about the menu
    describe('The menu', function() {
        var body = document.querySelector('body');
        var menuIcon = document.querySelector('.menu-icon-link');

        // check that the menu element is hidden by default
        it('is hidden by defaul', function() {
            expect(body.className).toContain('menu-hidden');
         });

        // check that the menu changes visibility when the menu icon is clicked
        it('is open <-> hidden when the menu icon is clicked', function() {
            menuIcon.click();
            expect(body.className).not.toContain('menu-hidden');
            menuIcon.click();
            expect(body.className).toContain('menu-hidden');
         });
    });

    describe('Initial Entries', function() {
        // loadFeed() is asynchronous so requires to use Jasmine's beforeEach and asynchronous done() function
         beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        // Check if there is at least a single .entry element within the .feed container
        it("there is at least a single .entry element within the .feed container after loadFeed() is called", function(done) {
            var numberEntries = document.querySelector(".feed").getElementsByClassName("entry").length;
            expect(numberEntries).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        // loadFeed() is asynchronous so requires to use Jasmine's beforeEach and asynchronous done() function
        var initFeedSelection;
        beforeEach(function(done) {
            loadFeed(0, function() {
                initFeedSelection = document.querySelector(".feed").innerHTML;

                loadFeed(1, function() {
                    done();
                });
            });
        });

        // check that when a new feed is loaded the content actually changes
        it("the content changes when a new feed is loaded by the loadFeed()", (function(done) {
            var newFeedSelection = document.querySelector(".feed").innerHTML;
            expect(initFeedSelection).not.toBe(newFeedSelection);
            done();
        }));
    });
}());
