export default class User 
{
    constructor(data)
    {
        this.data = data;
        for (let key in data) {
            let value = data[key];
            this[key] = value;
        }
        this.fullName = this.name.trim() + " " + this.lastname.trim();
    }
    getData()
    {
        return this.data;
    }
    getName()
    {
        return this.name;
    }
    getLastName()
    {
        return this.lastname;
    }
    getFullName()
    {
        return this.fullName;
    }
    getEmail()
    {
        return this.email;
    }
    getCreation()
    {
        return this.creation;
    }
    getId()
    {
        return this.id;
    }
    getSecure()
    {
        return this.secure;
    }
    getToken()
    {
        return this.token;
    }
    getHashedPassword()
    {
        return this.password;
    }
    getProfile()
    {
        return this.profile;
    }
}