
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import qs from 'querystring';
import dotenv from 'dotenv';
dotenv.load();
const JWT_SECRET = process.env.JWT_SECRET;

// if(!JWT_SECRET) {
//   throw new Error('Missing JWT_SECRET');
// }

let userSchema = new mongoose.Schema({
	email: { type: String, unique: true, required: true },
	password: String,
	displayName: String
})

userSchema.statics.signin = (userObj, cb) => {
	console.log('userObj in signin model', userObj);

	User.findOne({email: userObj.email}, (err, dbUser) => {
		console.log('dbUser found for signin', dbUser);
		if(err || !dbUser) return cb(err || {error: 'Login failed. Email or password incorrect.'});
		bcrypt.compare(userObj.password, dbUser.password, (err, isGood) => {
			if(err || !isGood) return cb(err || { error: 'Login failed. Email or password incorrect.'});
			let token = dbUser.makeToken();
			cb(null, token);
		})
	})
}

userSchema.statics.register = (newUser, cb) => {
	User.findOne({email: newUser.email }, (err, dbUser) => {
		if(err || dbUser) return cb(err || { error: 'Email is already in use.' });

		bcrypt.hash(newUser.password, 12, (err, hash) => {
			if(err) return cb(err);

			var user = new User({
				email: newUser.email,
				password: hash,
				displayName: newUser.displayName
			});
			user.save(cb);
		})


	})
}

userSchema.statics.isLoggedIn = (req, res, next) => {
	console.log('req.cookise', req.cookies);
	// let token = req.cookies.epicAccessToken;
	// console.log('token', token);
	// jwt.verify(token, JWT_SECRET, (err, payload) => {
	// 	if(err) return res.status(401).send({error: 'Must be authenticated.'});
	// 	User.findById(payload._id, (err, user) => {
	// 		if(err || !user) {
	// 			return res.clearCookie('epicAccessToken').status(400).send(err || {error: 'User not found.'});
	// 		}
	// 		req.user = user;
	// 		next();
	// 	}).select('-password');
	// })
}

userSchema.methods.makeToken = function() {
	let token = jwt.sign({_id: this._id}, JWT_SECRET);
	return token;
}

let User = mongoose.model('User', userSchema);
export default User;
