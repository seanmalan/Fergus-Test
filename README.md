# Fergus-Test
test for the Fergus software internship


Hi, my name is Sean and I am a current software development student at The Developers Institute, having studied for 2 semesters. Here is an attempt I have made at creating the back end of the service for tradies to use to keep track of their jobs.

I have gone for the approach of using:
MongoDB as the store of data,
ExpressJS to handle the routing,
NodeJS to handle the serverside.

If I was to carry on and do the client side I would use React to complete the MERN stack.

I am using Insomnia to access the localhost to talk to the server.
## To get started

1. clone from Github
2. open your terminal with cmd + j or control + j
3. type npm install to download the Dependencies
4. Open Docker and start a container
5. open MongoDb Compass, start your connection on <27017> and create a database called "Fergus". 
6. back in VSCode, in the terminal, type npm start to run the server.
7. Open Insomnia and import the yaml file with the preconfigured tests. Set it to "http://localhost:5001/jobs" to start and retrieve all jobs. (It will be empty until you add jobs.)



## Thought process below

I have chosen MongoDB to handle the data because it can handle the creation of the id and creation dates. We can easily create querries on MongoDB Compass to retrieve any data. 

I have added a Joi model to validate the POST route to help keep all data structured in the same way and same types. The POST route also has an if statement to guard against using a job status that isnt one of the five listed as a back up. If I was to design the front end as well I would have it be on a selected field with a drop down and only those five choices available as an extra safe guard.


The filter and sort can be done on Compass with their querries or in the React front end as a drop down select option. 

There is also a PATCH route which lets the tradie update any information on the job and then also sends back the updated job straightaway.


## ending notes

We do practice Test Driven Development at Developers Institute but I was not able to get my tests to pass as I was working along. I set myself 3 hours and this is how far I had made it. I didnt want to spend most of my time just trying to sort out Supertest so I carried on and did my testing myself in insomnia.

If youd like I can show you some of the tests I have written and done along with my projects for school over Google Meets. I just can't send them over the internet as the course material is Copyrighted by DI.
I have left the tests in there to view.

I appreciate you taking the time to view my test attempt and any feedback would be greatly appreciated. I still have some time to go before I finish and i know I will get better even before this internship starts.

