const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 


module.exports = {
    Mutation: {
        register(_, { registerInput: { username, email, password, confirmPassword } }, context, info) {
            //TODO validate user data
            //TODO Make sure user doesnot already exist
            //TODO hash password and create an auth token
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                username, 
                password, 
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save();

            
        }
    }
}