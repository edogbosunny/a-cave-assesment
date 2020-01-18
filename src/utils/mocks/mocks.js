const coursePayload = {

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

const quePayload = {
  "phone_number": '+123',
  "time_preference": '2019-09-08T08:02:17-05:00', // time that the cron should run
  "course_link": 'testing',
  "module_title": 'String',
  "course_title": 'String',
  "status": 'new'
}

const newUser = {
  "first_name": "sunny",
  "last_name": "bobo",
  "phone_number": "+234",
  "password": "12345c6d",
  "country": "Africa/Nairobi"
}

export default {
  coursePayload, quePayload, newUser
}