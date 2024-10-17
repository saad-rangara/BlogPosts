User Stories
🐿️ As a user, I want to view all posts with options to sort them in ascending or descending order so that I can easily find content based on my preferences.
🐿️ As a developer, I want to design a SQL schema that includes a posts table and a comments table, ensuring that comments are correctly associated with the corresponding post ID.
🐿️ As a user, I want to be able to delete posts using a delete button on each post’s page so that I can manage or remove my content from the database.
🐿️ As a user, I want to add comments on individual posts using a user-friendly form.
🐿️ As a user, I want to comment on posts directly on their dedicated pages so that my interactions are contextually tied to the content I view.
🐿️ As a user, I want to be automatically redirected to the posts page after creating a new post so I can immediately see my content in the context of all posts.
Requirements
🎯 Display all posts on the page, with an option to sort them in ascending or descending order.
🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
Please submit your database schema, as is mentioned in the submission instructions.
🎯 Create a delete button on posts that allows users to delete the post from the database.
🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).
🎯 Add a redirect when a user creates a post to redirect them to the posts page.
How to Deploy
Next.js was developed by Vercel, which is where we’re going to deploy our app, so some of the difficulties faced when deploying are reduced.

Ensure that any data displayed using .map() has a key.
Push everything to GitHub.
Click ‘Add New…’ and then select ‘Project’.
In the ‘Environment Variables’ drop-down menu, add anything from your .env.local file here.
Wait a minute or so, and your website is deployed!
Stretch Goals
To achieve an 8/8 in your assignment, aim to achieve all of the requirements, plus some extra goals for each section of the marking rubric. This can be excellence in styling or something that demonstrates creativity or innovation in the week’s topics.

Below are some examples of stretch goals and user stories that you could add to your project, but are not expected to.

Stretch User Stories
🐿️ As a user, I want to categorise my posts during creation so that I can organise my posts and browse other posts by category.
🐿️ As a user, I want to edit my posts on a dedicated route so that I can easily modify my posts.
🐿️ As a user, I want to edit my comments on a dedicated route so that I can revise my feedback.
Stretch Requirements
🏹 Implement a select input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database. Ensure appropriate routing for categories, with endpoints such as /categories and /categories/:id to enable users to browse and interact with posts by category.
🏹 Create an edit functionality accessible via /posts/:id/edit, which pre-fills a form for post data. Create a working PUT route to update the post in the database.
🏹 Develop an edit comment feature accessible via /posts/:id/comments/:id/edit, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.
Reflection
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g YouTube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

## PLANNING
- Start with database
    - Create schema for posts and comments
- Create a simple wireframe of the posts page
- Main Requirements
    - Display all posts on the page
    - Create a delete button on posts
    - Create a form which saves comments to a dedicated comments table
    - Allow users to comment on individual posts
    - Add a redirect when a user creates a post
    - Routes (static, dynamic)
    - Display data from db
    - sending data to db
    - Stretch Goals
    - Implement a select input to categorise posts
    - Create an edit functionality for posts
