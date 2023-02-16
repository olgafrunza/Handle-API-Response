JS-CC-12 : Handle API Response
Purpose of the this coding challenge is to practice fetching data from an API, handle API response, locate desired information, extract that information from response and use it in your APP.

Learning Outcomes
At the end of the this coding challenge, students will be able to;

Analyze a problem, identify and apply programming knowledge for appropriate solution.

Demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

Problem Statement
Fetch users data from https://randomuser.me/api/?results=500&seed=foo

Provide solutions to following tasks.

display female and male users count seperately
display all the users older than 40
display all the users from Germany
display the index position of the first user from Germany
find the first user whoose age is 28
generate a new user list from response:
add an ID property containing a random number between 1000 and 5000,
take only these properties: gender, full name (first + last name), city, country, email, username, password, age, picture(thumbnail)
and add an additional property as credit and give a random value to credit between 1 to 100. Please check sample below:
{
id: 1578,
gender: 'female',
fullName: 'Andréia Monteiro',
city: 'Passo Fundo',
country: 'Brazil',
email: 'andreia.monteiro@example.com',
username: 'beautifulgorilla966',
password: 'banker',
age: 66,
picture: 'https://randomuser.me/api/portraits/thumb/women/60.jpg',
credit: 55
}
Develop a bootstrap card and display first 20 users whose credit is greater than 50
Add 3 buttons to filter users as all, female and male
