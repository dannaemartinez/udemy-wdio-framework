import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
import FeedbackPage from '../pageobjects/FeedbackPage'

import Navbar from '../pageobjects/components/Navbar'

describe("Login Test", () =>{
    it("Should not login with invalid user and password", async () =>{
        await HomePage.visit()

        await Navbar.clickOnSingIn()

        await LoginPage.assertLoginPageIsVisible()
        await LoginPage.login('invalid-username', 'invalid-password')
        await LoginPage.assertLoginPageErrorMessage()

        //await browser.pause(4000)
        await LoginPage.waitForSecond(3)
    })
    })
    describe("feedback Test", () => {
        it("Should submit the feedback from", async() =>{
            await HomePage.visit()
            await HomePage.clickOnFeedbackLink()

            await FeedbackPage.submitFeedback(
                'name',
                'dann@test.com',
                'subject',
                'some message'
            )
            //await browser.pause(4000)
            await FeedbackPage.waitForSecond(3)
        })
})