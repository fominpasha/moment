var letsgo = {}

let createProfile = require('../testAssets/createProfile')

module.exports = {
    beforeEach: browser => {
        letsgo = browser.page.momentPageObjects()
        letsgo.navigate()
            .waitForElementVisible('img[class="logo"]', 5000)
    },
    after: browser => {
        browser.end()
    },

    'Create a Profile 1': browser => { createProfile(letsgo, 'dumblloyd', 'Lloyd', 'Christmas', 'lloydisdumb', 'christmas.lloyd@gmail.com', '9164456738', 'Aspen, CO', '@male', 'Limo driver. Very stupid.', 'Screen Shot 2019-02-27 at 11.20.56 AM.png') },
    'Create a Profile 2': browser => { createProfile(letsgo, 'harryAmI', 'Harry', 'Dunne', 'iAmHarry', 'dunne.harry@gmail.com', '7784673875', 'Aspen, CO', '@female', 'Dog Breeder.', 'Screen Shot 2019-02-27 at 11.22.10 AM.png') },
    'Create a Profile 3': browser => { createProfile(letsgo, 'bean23', 'Mr.', 'Bean', 'beanIsAwesome', 'Mr.Bean@gmail.com', '9482759384', 'New York, NY', '@notProvided', 'Dont know what I am.', 'Screen Shot 2019-02-27 at 11.23.49 AM.png') },
    'Create a Profile 4': browser => { createProfile(letsgo, 'cubeOfIce', 'Ice', 'Cube', 'icyCube', 'ice.cube@gmail.com', '9164762948', 'Los Angeles, CA', '@male', 'Rapper. Actor. And everything else.', 'Screen Shot 2019-02-27 at 11.22.45 AM.png') },

}