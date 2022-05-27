class Navbar{
    public get singInButton(){
        return $('#signin_button')
    }
    public async clickOnSingIn(){
        await this.singInButton.click()
    }
}

export default new Navbar()