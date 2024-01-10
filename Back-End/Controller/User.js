const User = require('../Models/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    loginUser: async (req, res)=>{
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (user && (await bcrypt.compare(password, user.password))) {
          const token = jwt.sign({ userId: user._id, isAdmin:user.isAdmin }, process.env.PRIVATE_JWT_TOKEN , { expiresIn: '1h' });
      
          res.json({ token });
        } else {
          res.status(401).json({ message: 'Nieprawidłowe dane logowania' });
        }
    },
    registerUser: async (req, res)=>{
        try{
            const {username, password, isAdmin } = req.body;
            const existingUser = await User.findOne({ username });
            if(existingUser){
                return res.status(409).json({message: "User with this username exist"});
            }
            const newUser = new User({
                username,
                password,
                isAdmin: isAdmin || false
            });
            newUser.save();
            res.status(201).json({message: "User are created!"})


        }catch(err){
            console.error(err)
            res.status(500).json({ message: 'Wystąpił błąd podczas tworzenia użytkownika.' });
        }
        
    }
}