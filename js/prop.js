export default class Properties 
{
    constructor(user)
    {
        this.user = user;
        this.properties = {
            headerName: $(".header .user .user-name span"),
            userName: $(".user-name span"),
            userFullname: $(".user-fullname span")
        };
        this.props = {
            headerUser: $(".header .user")
        };
        this.inputsValues = {
            inputName: $(".data #name"),
            inputLastname: $(".data #lastname"),
            inputEmail: $(".data #email")
        };
    }
    
    
    updateProperty(key, value)
    {
        if (this.properties[key]) {
            this.properties[key].text(value);
        }
    }
    
    updateProp(key, prop, value)
    {
        if (this.props[key]) {
            this.props[key].attr(prop, value);
        }
    }

    updateValue(key, value)
    {
        if (this.inputsValues[key]) {
            this.inputsValues[key].val(value);
        }
    }
    
    updateProperties()
    {
        this.updateProperty("userName", this.user.getName());
        this.updateProperty("userFullname", this.user.getFullName());
    }
    
    updateProps()
    {
        //TODO: update title in user div :)
        this.updateProp("headerUser", "title", this.user.getName());
    }

    updateValues()
    {
        this.updateValue("inputName", this.user.getName());
        this.updateValue("inputLastname", this.user.getLastName());
        this.updateValue("inputEmail", this.user.getEmail());
    }
    
    updateAll()
    {
        this.updateProperties();
        this.updateProps();
        this.updateValues();
    }
};