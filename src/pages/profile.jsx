import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
//import React,{useEffect,useState} from "react";
import axios from "axios";
import React, { useState } from "react";
export function Profile() {
  const [data, setData] = useState([])
  const getNews = () => {
    axios.get("https://newsapi.org/v2/everything?q=agriculture&apiKey=786601bbdc43496aab3764ba57c8d4da")
      .then((response) => {

        setData(response.data.articles)
      })



  }
  return (
    <>
      <div className="container my-3 d-flex align-items-center justify-content-center">
        <h2>For News And Blogs Click on Fetch News</h2>
        <button className="btn btn-primary" onClick={getNews}>Fetch News</button>
      </div>
      <div className="container mu-5">
        <div className="row mb-3">
          {
            data.map((value) => {
              return (
                <div className="col-3
    ">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href={value.url} class="btn btn-primary">Read More</a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default Profile;
