async function fetchMultiple() {
  const [post, user] = await Promise.all([
    fetch("https://jsonplaceholder.typecode.com/posts/1").than((res) =>
      res.json()
    ),
    fetch("https://jsonplaceholder.typecode.com/users/1").than((res) =>
      res.json()
    ),
  ]);
  console.log(post.title, user.name);
}
fetchMultiple();
