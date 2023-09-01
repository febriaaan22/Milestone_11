# MILESTONE WEEK 11


## INTRODUCTION
Hello, I'm Ireng Febrian Sanjaya. I'm entering week 11 which is the week of silence and everyone is busy because everyone is focus on making their own milestone project. For this week i'm making a project about the backend of Taylor Swift and Jack Antonoff secret project in Electric Lady Studio. Which is kind of fun because this idea is came in a way during unexpected time of my discussion.

The idea of this project came in after I’m doing a brainstorm with Resyana my classmate of Team 5. I ask her about what is she going to make and she is putting out an idea about movie review and suddenly my mind connected to music industry but for this one I make it more specific. I think about using Taylor Swift point of view in her way at planning a project for a new album release, with a question came in like “how about we make music and put the remaining plan to the backend with support of database?”. So I suddenly thinking of putting several point. Here is the point below:

1. Title
2. Songwriter
3. Producer
4. Engineer
5. Mixer
6. Studio

All of this idea is using the point of view of Taylor in choosing her collaborator, depend on every song she write and how she feel during the session. So as a maker of this project (me), I decided to give a check mark of every song she make and on going process. In my head, she could change anything she want based on the point above. For this one I signed only 2 people, Taylor Swift and Jack Antonoff (her collaborator in making new album) and this secret project can only be accessed by both of them.

## TOOLS
- JWT
- JAVASCRIPT
- MONGODB
- SWAGGER
- EXPRESS
- BODY PARSER
- POSTMAN
- BCRYPT
- CYCLIC


## DATABASE

For this project Milestone, i'm using MongoDb free access as a platform for my database that I created based on the concept that i'm making. There is 2 database name that I'm using for this project and it is "electriclady" for account and "songs" for each project or music they're done together. Often time Taylor and Jack using Electric Lady Studio to make an album and Jack spend majority of his time in this studio switching idea with other artist, I decided to named after my database with the studio name.



## API ENDPOINT

| Name                        |  Type Method  | Endpoint           |
| --------------------------- | ------------- | ------------------ |
| **List All Song**           | `GET`         | [/song]            |    
| **Create Song**             | `POST`        | [/song]            |
| **Delete Song**             | `DELETE`      | [/song/:id]        |
| **Update Song**             | `PATCH`       | [/song/:id]        |
| **Update Song Progress**    | `PUT`         | [/song/:id]        |
| **Register**                | `POST`        | [/taylor/register] |
| **Login**                   | `POST`        | [/taylor/login]    |

## BREAKDOWN FOR EACH INPUT

For above Input, I refer and break it down below with screenshot and picture to make it clear and to prove that it is working well. To make it even more clear, the ```:/id``` is refer to the database Object Id.
1. ``` List All Song ``` : ```GET``` ```[/song]```
   ![getallsong](Readme%20Documentation/Get%20All%20Songs.png)
2. ``` Create Song ``` : ```POST``` ```[/song]```
   ![createsong](Readme%20Documentation/Post%20Create%20Songs.png)
3. ``` Delete Song ``` : ```DELETE``` ```[/song/:id]```
   ![deletesong](Readme%20Documentation/Del%20Delete%20Songs.png)
4. ``` Update Song ``` : ```PATCH``` ```[/song/:id]```
   ![updatesong](Readme%20Documentation/Patch%20Update%20Songs.png)
5. ``` Update Song Progress ``` : ```PUT``` ```[/song:id]```
   ![updatesongprogress](Readme%20Documentation/Put%20Update%20Songs%20Progress.png)
6. ``` Register ``` : ```POST``` ```[/taylor/register]```
   ![register](Readme%20Documentation/Post%20Register.png)
7. ``` Login ``` : ```POST``` ```[/taylor/login]```
   ![login](Readme%20Documentation/Post%20Login.png)


## DEPLOYMENT

For this project I use Cyclic to help me with deployment. This is the best website and it help me alot of my project. Here is the link: https://fine-lime-shrimp-kilt.cyclic.app/api-docs/#/

## Contact Me
This project is far from perfect and I need your feedback to improve this project <br>
Contact Me: <br>
Phone: 0821-3611-1204 <br>
[Email 1](febriansajaya22@gmail.com) / [Email 2](febriansanjaya22@gmail.com) <br>
[Linkedin](http://linkedin.com/in/ireng-febrian-sanjaya-6a79211a7)