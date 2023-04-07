import UserSearch from "./usersearch";
const fetchUser = () => {
fetch(`https://api.github.com/search/users?q=${UserSearch.query}`)
      .then((res) => res.json())
      .then((data) => {
        UserSearch.setUsers(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
}
export default fetchUser
