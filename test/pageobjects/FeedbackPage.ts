import AbstractPage from "./AbstractPage"

class FeedbackPage extends AbstractPage{
    public get nameInput(){
        return $('#name')
    }
    public get emailInput(){
        return $('#email')
    }
    public get subjectInput(){
        return $('#subject')
    }
    public get messageInput(){
        return $('#comment')
    }
    public get submitInput(){
        return $('input[type="submit"]')
    }

    public async submitFeedback(
        name:string,
        email: string,
        subject: string,
        message: string
    ){
        await this.nameInput.setValue(name)
        await this.emailInput.setValue(email)
        await this.subjectInput.setValue(subject)
        await this.messageInput.setValue(message)
    }
}
export default new FeedbackPage