# MongoDB notes

## Insert Methods

MongoDB provides the following methods for inserting documents into a collection:

db.collection.insertOne()
Inserts a single document into a collection.
db.collection.insertMany()
db.collection.insertMany() inserts multiple documents into a collection.
db.collection.insert()
db.collection.insert() inserts a single document or multiple documents into a collection.

## Commands

show collections

# Joi notes

https://joi.dev/api/?v=17.4.1
joi lets you describe your data using a simple, intuitive, and readable language.
We used it to provide data validation for user input, and prevent users from bypassing client-side validation.

# HMAC Generator / Tester Tool

Computes a Hash-based message authentication code (HMAC) using a secret key. A HMAC is a small set of data that helps authenticate the nature of message; it protects the integrity and the authenticity of the message.

The secret key is a unique piece of information that is used to compute the HMAC and is known both by the sender and the receiver of the message. This key will vary in length depending on the algorithm that you use.

https://www.freeformatter.com/hmac-generator.html

# Express Session

https://www.npmjs.com/package/express-session

# Connect Flash

https://github.com/jaredhanson/connect-flash

The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user. The flash is typically used in combination with redirects, ensuring that the message is available to the next page that is to be rendered.
