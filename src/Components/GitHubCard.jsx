import React, { useEffect, useState } from "react";

function GitHubCard() {
  let [gitHubData, setGitHubData] = useState({});
  let [repository, setRepository] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/MohammadRayyanMalik")
      .then((data) => data.json())
      .then((data) => {
        setGitHubData(data);

        // Repositories
        fetch(data.repos_url)
          .then((repos) => repos.json())
          .then((repos) => {
            // console.log("Reposito"+repos)
            setRepository(repos);
          });
      });
  }, []);
  return (
    // Profile Start
    <div>
      <h1>Github profile</h1>
      <div className="card github-card">
        <img src={gitHubData.avatar_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Name: {gitHubData.name}</p>
          <p className="card-text">Followers: {gitHubData.followers}</p>
          <a href={gitHubData.html_url}>Click Here to visit github profile</a>
        </div>
      </div>

      {/* Profile End */}

      {/* Repositories :Start */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Repository Name</th>
            <th scope="col">Repository Link</th>
          </tr>
        </thead>
        <tbody>
            {
                repository.map((repoobject)=>{
                    return (<tr>
                        <th scope="row"></th>
                        <td></td>
                       </tr>)
                })
            }
          
         
        </tbody>
      </table>
      {/* Repositories End */}
    </div>
  );
}

export default GitHubCard;
