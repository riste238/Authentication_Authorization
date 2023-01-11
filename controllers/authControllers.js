const userDb = {
    users: require('../model/users.json'),
    setUser: function (data) { this.users = data; }
}


const handleAuth = async (req, res) => {
    const { name, password } = req.body;

    if (userDb.users.find(user => user.password === password)) {
        // user is correct and he could be logged...
        console.log("User is logged");
        res.status(200).json({ "success": `User  ${name} is logged successfully!` })
    }
    else {
        console.log("Uncorrect password");
        res.status(500).json({ msg: "Invalid password" });
    }



};

module.exports = { handleAuth };