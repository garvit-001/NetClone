import React from "react";
import Banner from "../Banner";
import Nav from "../Nav";
import Row from "../Row";
import requests from "../Requests";
import "./HomePage.css";
// import LoginScreen from "./LoginScreen";

const HomePage = () => {
  return (
    <div className="App">
      <Nav />

      {/* banner */}
      <Banner />

      {/* <h1>Kya haal chal public </h1> */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romantic movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentry" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
};

export default HomePage;
