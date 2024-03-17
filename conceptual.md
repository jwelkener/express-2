### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
	JSON Web Token. It's a digital, URL-safe means of representing claims between 2 parties.

- What is the signature portion of the JWT?  What does it do?
	The signature portion of the JWT is created using a server-side secret key. The signature portion is used to verify the identity of the JWT sender and ensure that the message of the JWT was not altered along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload?
	Yes, they can see what's inside, but they cannot alter the message without invalidating the signature, which would be detected during verification.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
	Server-side: issue JWT to client after authentication.
	Client-side: issue this JWT in subsequent requests to server.

- Compare and contrast unit, integration and end-to-end tests.
	Unit tests look at individual parts of the app to see how they are working. Integration tests how diffferent parts work together. End-to-end tests look at the entire app from start to finish, simulating real user scenarios.

- What is a mock? What are some things you would mock?
	A mock is a simulated object used for testing. It mimics real objects but allows controlled interactions.

- What is continuous integration?
	CI is a development practice where developers frequently integrate their code changes into a shared repo. Each integration triggers automated tests to detect issues early on in the development process.

- What is an environment variable and what are they used for?
	An environmental variable is a local variable that can affect the way processes behave on a computer. They can be used to store many things within an app, such as passwords, API endpoints, etc., without storing them in the source code. 

- What is TDD? What are some benefits and drawbacks?
	Test-Driven Development involves writing the tests before writing the actual code. The benefits include having a system with pre-defined outputs, and providing a sense of direction to the project. The downsides are the upfront investment, and the challenge of writing comprehensive tests. 

- What is the value of using JSONSchema for validation?
	JSONschema provides interoperability across applications and languages. 

- What are some ways to decide which code to test?
	Code that involves critical business logic, complex algorithms, or interactions with external systems should be tested. Additionally, areas prone to bugs or changes should be thoroughly tested. 

- What does `RETURNING` do in SQL? When would you use it?
	RETURNING is an SQL clause that returns data from rows affected by an SQL statement, such as INSERT, UPDATE, or DELETE. It's useful when you want to retreive specific data after modifying the database.
	E.g., INSERT statement with RETURNING:
INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com') RETURNING id, username;
This SQL statement inserts a new record into the users table with the specified username and email. It then returns the id and username columns of the newly inserted row.

- What are some differences between Web Sockets and HTTP?
	Web sockets maintain a persistent connection, while HTTP creates a new connection for each request.

- Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)?
	I like that Flask uses more Python. At the end of the day, Flask and Express both perform essentially the same function. If I were to go with a long-term solution, I might try working with Django. (If I had unlimited time and resources, I would create my own framework.)