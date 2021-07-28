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

## Sessions vs Cookies

Sessions are server-side files that store the user information, whereas Cookies are client-side files that contain user information on a local computer. ... The session ends when the user closes the browser or logout from the application, whereas Cookies expire at the set time.

https://stackoverflow.com/questions/6253633/cookies-vs-sessions

The concept is storing persistent data across page loads for a web visitor. Cookies store it directly on the client. Sessions use a cookie as a key of sorts, to associate with the data that is stored on the server side.

It is preferred to use sessions because the actual values are hidden from the client, and you control when the data expires and becomes invalid. If it was all based on cookies, a user (or hacker) could manipulate their cookie data and then play requests to your site.

Edit: I don't think there is any advantage to using cookies, other than simplicity. Look at it this way... Does the user have any reason to know their ID#? Typically I would say no, the user has no need for this information. Giving out information should be limited on a need to know basis. What if the user changes his cookie to have a different ID, how will your application respond? It's a security risk.

# Connect Flash

https://github.com/jaredhanson/connect-flash

The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user. The flash is typically used in combination with redirects, ensuring that the message is available to the next page that is to be rendered.

## Passport for Authentication

http://www.passportjs.org/
https://github.com/jaredhanson/passport-local
https://github.com/saintedlama/passport-local-mongoose

### Starability.css - Accessible rating with animations on top

https://github.com/LunarLogic/starability
