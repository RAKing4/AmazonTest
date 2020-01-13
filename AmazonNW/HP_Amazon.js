module.exports = ({
    name: "Modules for AmazonTest",
    author: "Rox King",

    //Log-In
    'Sample Test'(login) {
        login
            .url('https://www.amazon.com/')
            .waitForElementVisible("div[id='nav-signin-tooltip']")
            .click("div[id='nav-signin-tooltip']")
            .waitforpageload()
            .waitForElementVisible("div[class*='row'] [name='email']")
            //enter email
            .SetText("div[class*='row'] [name='email']", "autotester1234567890@gmail.com")
            .click("span[id='continue']")
            .waitforpageload()
            .waitForElementVisible("div[class*='section'] [name='password']")
            //enter PW
            .SetText("div[class*= 'section'][name = 'password']", "FunTest123")
            .click("input[id='signInSubmit']");
    },

    //Adding Item to Cart
    'Sample Test2'(addItem) {
        addItem
            //search item
            .SetText("div[class='nav-fill'] input[type='text']", "JoyNote A5 Classic Notebook Journal, Ruled Notebook with Pen Holder, Thick Paper Businees Writing Journal, 96 Sheets/192 Pages, 5.75 x 8.25 inches, Blue")
            //select item
            .click("//*[@id='search']/div[1]/div[2]/div/span[4]/div[1]/div[1]/div/span/div/div/span/a/div")
            .waitforpageload()
            //add to cart
            .click("span[id='submit.add-to-cart']")
            .ClickIfExist("[class*='close-button']");
    },

    //Selection Cart
    'Sample Test3'(selectCart) {
        selectCart
            .click("span[class*='nav-cart-icon']")
            .waitforpageload()
    },

    //Checkout for payment option
    'Sample Test4'(checkOut) {
        checkOut
            .url("https://www.amazon.com/gp/cart/view.html?ref_=nav_cart")
            .click("input[name='proceedToRetailCheckout']")
            //enter PW - SIGN IN 
            .SetText("div[class*= 'section'][name = 'password']", "FunTest123")
            .click("input[id='signInSubmit']")
            .waitforpageload()
            //select address SHIPPING AND PAYMENT
            .click("div[class*='a-button a-button-primary']")
            .waitforpageload()
            //Select payment method
            .SetText("//*[@id='pp-a2JGrk-62']", "Automation Tester")
            .SetText("[name='addCreditCardNumber']", "1234567890")
            .waitforpageload()
            //continue to checkout
            .click("input[type='submit']")
            .waitforpageload()
    },

    'Sample Test5'(logOut) {
        logOut
            .url("https://www.amazon.com/gp/css/homepage.html?ref_=nav_youraccount_btn")
            .click("[class='nav-a nav-a-2 nav-truncate']")
            .click("nav-item-signout");
    }
});


