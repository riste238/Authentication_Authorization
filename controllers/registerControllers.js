const userDb = {
    users: require('../model/users.json'),
    setUser: function (data) { this.users = data; }
}

const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) 
       return res.status(400).json({ msg: ` Name & Password are required!` });

        // If there is a duplicate items than...
        const duplicate = userDb.users.find(user => user.password === password);
        if (duplicate) return res.status(409);

        // We need to keep each new user in our db
        try {
            const hashedPsw = await bcrypt.hash(password, 10);
            const newUser = {
                "name": name,
                "password": hashedPsw
            };
            userDb.setUser([...userDb.users, newUser]);
                await fsPromises.writeFile(path.join(__dirname, "..",
                    'model', 'users.json'), JSON.stringify(userDb.users));
                    console.log(userDb);

            res.status(201).json({"success": `New user ${newUser.name} is created.`})      
        }
        catch (err) {
            res.status(500).json({ msg: `${err.message}` });
        }
    
}

module.exports = {handleNewUser};