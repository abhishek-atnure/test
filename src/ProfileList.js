import React, { useState, useEffect } from "react";
import "./styles.css";

export default function () {
  const [profiles, setProfiles] = useState([]);

  const url =
    "https://api.github.com/search/repositories?q=stars%3E1&sort=stars";

  const fetchProfiles = async () => {
    const data = await fetch(url);
    const response = await data.json();
    setProfiles(response.items);
    console.log(response);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className="profile-list">
      {profiles.map((element) => (
        <div className="profile" key={element.id}>
          <img src={element.owner.avatar_url} alt="f" />
          <h3>{element.full_name}</h3>
        </div>
      ))}
    </div>
  );
}
