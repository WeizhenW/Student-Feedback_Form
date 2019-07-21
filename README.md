# STUDENT FEEDBACK FORM PROJECT

The Student Feedback Form app will allow student to submit their feedback at the end of the day and communicate easily with the instructors. It features four views with the following questions:
- how are you feeling today?
- how well are you understanding the content?
- how well are you being supported?
- any other comment?

Student will need to fill in the first 3 questions with a scale 1-5 from the drop down list, and the last one is a free text input.

Submission is only activated when all four questions are fullfilled. Student can navigate through different questions by using the Nav Bar before submission without losing their previously entered answers.

There is also an admin interface (currently not secured) where the administrator can check the list of feedbacks, flag the ones that need to call more attention, and remove any entries if needed.

Deployed at https://student-feedback-form.herokuapp.com/#/support

### SETUP

Create the database and tables using the provided `data.sql` file. 

All dependencies can be found at `package.json` file.

Start the server and client.

```
npm install
npm run server
npm run client
```
### BUILT WITH

- React (including redux) as front-end framework
- Node.js/Express for server
- PostgreSQL as database
- Material-UI for UI styling
