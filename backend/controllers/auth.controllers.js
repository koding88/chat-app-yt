import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const {fullname, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({ error: "Password don't match" });
        }

        const user = await User.findOne({username});

        if(user) {
            return res.status(400).json({ error: "User already exists" });
        }
        
        // HASH PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //https://avatar.iran.liara.run/public

        const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePicture: gender === "male" ? boyProfilePicture : girlProfilePicture,
        });


        if(newUser) {
        // GENERATE TOKEN
        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            email: newUser.email,
            gender: newUser.gender,
            profilePicture: newUser.profilePicture,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isCorrectPassword = await bcrypt.compare(password, user?.password || "");

        if(user && isCorrectPassword) {
            generateTokenAndSetCookie(user._id, res);
            res.status(200).json({
                _id: user._id,
                fullname: user.fullname,
                username: user.username,
                email: user.email,
                gender: user.gender,
                profilePicture: user.profilePicture,
            });
        }else{
            res.status(401).json({ error: "Invalid username or password" });
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const logout = (req, res) => {
    try{
        res.clearCookie("jwt");
        res.status(200).json({ message: "Logout successful" });
    }catch(error){
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};