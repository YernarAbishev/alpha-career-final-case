import React from "react";
import { useState, useEffect } from "react";
import axiosInstance from "../services/axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Authors from "../components/Authors";

export default function AuthorsPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get("/users");
        setUsers(response.data);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="container__center">
      <Authors users={users} />
    </div>
  );
}
