import React, { Component } from "react";
import SelectCountry from "./SelectCountry";
import Divider from "./Divider";
import SearchTopic from "./SearchTopic";
import NewsCard from "./NewsCard";
import HeadLogo from "./HeadLogo";
import Loader from "./Loader";
import NoNewsCard from "./NoNewsCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newscontent: [],
      isLoading: true,
      selectedCountry: "International",
      searchingTopic: "",
      totalResults: 0
    };
  }

  componentDidMount() {
    fetch("https://v-news.glitch.me")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          totalResults: data.totalResults,
          newscontent: data.articles,
          isLoading: false
        });
        // console.log(this.state.newscontent);
      });
  }

  handleSelect = (event) => {
    const country = event;
    // console.log("handling change ", country);
    this.setState({ selectedCountry: country });
    this.setState({ isLoading: true });
    fetch("https://v-news.glitch.me/countrywise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country })
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          totalResults: data.totalResults,
          newscontent: data.articles,
          isLoading: false
        });
        // console.log(this.state.totalResults);
      });
  };

  handleChange = (event) => {
    // console.log("handling search", event.target.value);
    this.setState({ searchingTopic: event.target.value });
  };

  handleClick = () => {
    this.setState({ isLoading: true });
    // console.log("searching for", this.state.searchingTopic);
    const topic = this.state.searchingTopic;
    fetch("https://v-news.glitch.me/topicwisehead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ topic })
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          totalResults: data.totalResults,
          newscontent: data.articles,
          isLoading: false
        });
      });
  };

  render() {
    return (
      <div style={{ height: "80vh", width: "100vw", position: "fixed" }}>
        <HeadLogo />
        <div style={{ display: "flex" }}>
          <SelectCountry data={this.state} handleSelect={this.handleSelect} />
          <Divider />
          <SearchTopic
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
        </div>

        {this.state.isLoading ? (
          <Loader />
        ) : this.state.totalResults === 0 ? (
          <NoNewsCard />
        ) : (
          <div style={{ height: "100%", overflow: "scroll" }}>
            {this.state.newscontent.map((items) => {
              return <NewsCard data={items} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
