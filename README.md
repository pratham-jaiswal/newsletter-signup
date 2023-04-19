# Newsletter - Signup
A newsletter signup page. The signup page is integrated with Mailchimp for managing our newsletter subscription list.

### Getting Started
To get started with this code, simply clone this repository to your local machine:
```bash
git clone https://github.com/pratham-jaiswal/newsletter-signup.git
```

### Library Prerequisites
1. Node.js
2. Express
3. Dotenv
4. Nodemon (optional)
    You can install these dependencies using npm:
    ```bash
    npm init
    npm install express dotenv nodemon
    ```
    
### Mailchimp API key
To get Mailchimp API key:
- Go to [Mailchimp's website] and sign up for an account, or log in to your existing account.
- Once you're logged in, click on your profile and select "Profile" from the drop-down menu.
- On the Profile page, click on "Extras" and select "API keys" from the drop-down menu.
- On the API keys page, click on the "Create New Key" button to generate a new API key.
- Copy the API key and save it in a secure location. You'll need to use this key in your code to connect to Mailchimp's API.

### Mailchimp Audience List ID
To get Mailchimp Audience List ID:
- Log in to your Mailchimp account click on "Audience" then select "All contacts" from the drop-down menu.
- Then click on "Settings" and select "Audience name and defaults" from the drop-down menu.
- Give an Audience name, if not already given.
- Then under "**Audience ID**" you'll see your Audience List ID.
- Copy the list ID and save it in a secure location. You'll need to use this ID in your code to add subscribers to your audience list.


### Setup Environment Variables
After getting the Mailchimp API Key and Audience List ID, create a file named "**.env**" in your directory. If you are unable to create it, open your terminal/command prompt in that directory and run the following command,

For Mac/Linux
```bash
touch .env
```
For Windows
```bash
type nul>.env
```
Now add the following to the .env file
```ini
API_KEY = "Your Mailchimp API Key"
ID = "Your Mailchimp Audience List ID"
```

### Running the code
To run the code simply open your terminal/command prompt in that directory and run the following command,
```bash
node app.py
```

To avoid the need to manually stop and restart a Node.js application every time a change is made to the code, nodemon should be used. Open your terminal/command prompt in that directory and run the following command,
```bash
nodemon app.js
```
This saves time and effort, allowing you to focus on writing code and testing it, rather than worrying about restarting the application.

[//]: #
[Mailchimp's website]: <https://mailchimp.com/>