const User = require('../../models/User');


module.exports = {
    Mutation: {
        register(_, { registerInput: { username, email, password, confirmPassword } }, context, info) {
            //TODO validate user data
            //TODO Make sure user doesnot already exist
        }
    }
}