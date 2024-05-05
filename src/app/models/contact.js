import { timeDay } from 'd3'
import mongoose, { Schema } from 'mongoose'

const ContactSchema = new Schema({
	fullname: {
		type: String,
		required: [true, 'Please provide your fullname'],
		trim: true,
		minLength: [2, 'Fullname must be larger than 2 characters'],
		maxLength: [50, 'Fullname must be less than 50 characters'],
	},

	email: {
		type: String,
		trim: true,
		required: [true, 'Email is required.'],
		match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, 'Invalid email address'],
	},

	message: {
		type: String,
		required: [true, 'Please provide your message'],
		trim: true,
		minLength: [2, 'Message must be larger than 2 characters'],
		maxLength: [500, 'Message must be less than 500 characters'],
	},

	date: {
		type: Date,
		default: Date.now,
	},

})

const Contact =
	mongoose.models.Contact || mongoose.model('Contact', ContactSchema)

export default Contact
