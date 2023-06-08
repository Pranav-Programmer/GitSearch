
# GitHub User Search Component

The GitHub User Search Component is a reusable React component that allows users to search for GitHub users and display the search results.
## Component Features

- User can enter a search query.
- User can click on the "Search" button to initiate the search.
- The component makes an API call to the GitHub API to fetch user data based on the search query.
- The component displays the search results, including the user's avatar, username, and a link to their GitHub profile.


## Usage

To use the GitHub User Search Component in your React.js web app, follow these steps:

1. Install the required dependencies:

```bash
  npm install @material-ui/core
```

2. Import the 'UserSearch' component in your app:

```bash
  import UserSearch from './UserSearch';
```

3. Add the UserSearch component to your app's JSX code:

```bash
  <UserSearch />
```

4. Ensure that you have a suitable container element to render the component.

### Example

Here's an example of how you can use the GitHub User Search Component in your React.js app:

```bash
  import React from 'react';
import UserSearch from './UserSearch';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <UserSearch />
    </div>
  );
}

export default App;
```

![image](https://user-images.githubusercontent.com/79044490/229721167-73e05447-38d7-41eb-be55-61318b310d62.png)
![image](https://user-images.githubusercontent.com/79044490/229721380-678ba2b6-df93-4068-a27d-7ad347460975.png)
![image](https://user-images.githubusercontent.com/79044490/229721680-1cd0577b-0961-4e87-af7d-a69519646bb5.png)

## Customization

The GitHub User Search Component uses Material-UI for styling. You can customize the component's appearance by overriding the CSS classes used in the component's makeStyles hook.


## 🚀 Credits

TThe GitHub User Search Component was created by Pranav Dharme.

Happy coding!
