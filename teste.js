const repos = async () => {
  const response = await fetch("https://api.github.com/users/ecblandy");
  const data = await response.json();
  console.log(data);
};
repos();
