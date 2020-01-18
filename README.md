# a-cave-assesment
# backend

## Accessing the  server

- clone repository to your local machine
- run ```npm install``` and watch the magic happen.

using Docker: 
- docker build -t <your username>/node-web-app .
- docker run -p 49160:8080 -d <your username>/a-cave-assesment

#### env params needed.
```
MONGO_URI=""
MONGODB_TIMETONE_URI=""
TOKEN_SECRET=""
TWILIO_PHONE_NUMBER=""
TWILIO_ACCOUNT_SID=""
TWILIO_AUTH_TOKEN=""
CELL_PHONE_NUMBER=""
TEST_MONGO_URI=""
MONGO_DB_NAME=""
PROD_DATABASE_URI="" ```

#### payload required
- create a user
url - localhost:5000/api/v1/signup (POST)

{
"first_name": "test",
"last_name": "test",
"phone_number": "+234",
"password": "test",
"country": "Africa/Nairobi"
}
- create a course
url - localhost:5000/api/v1/create-course (POST)
request payload
{
    "courses": [
        {
            "courseTitle": "Digital Marketing",
            "moduleTitle": "introduction to marketing",
            "moduleNumber": "1",
            "url": "http://example1.com"
        },
        {
            "courseTitle": "Digital Marketing",
            "moduleTitle": "Deep dive",
            "moduleNumber": "2",
            "url": "http://example2.com"
        }
    ]
}

- add course to que
url - localhost:5000/api/v1/add-course-to-que (POST)

request payload

{
    "course_preference": "course id",
    "day_preference": "monday",
    "time_preference": "2019-09-08T08:02:17-05:00",
    "time_interval": "5"
}

- fetch course by id 
url : localhost:5000/api/v1/fetch-course/:id
payload :
{
    "courses": {
        "Digital Marketing": [
            {
                "title": "introduction to marketing",
                "url": "http://example1.com"
            },
            {
                "title": "deep dive",
                "url": "http://example1.com"
            }
        ]
    }
}
