import React, { useState, useEffect } from "react";
import { getStoryIds } from "./api/hnapi";
import { Rows } from "./story_rows";
export default function News(){
    const [storyIds, setStoryIds] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [radioValue, setRadioValue] = useState("Top");
  const [newsCount, setNewsCount] = useState(10);
  //console.log(storyIds);
  useEffect(() => {
    //setIsLoading(true);
    getStoryIds("Top").then((data) => setStoryIds(data));
  }, []);
  function setRadio(val) {
    setRadioValue(val);
    // console.log(val);
    setStoryIds([]);
    setNewsCount(10);
    getStoryIds(val).then((data) => setStoryIds(data));
  }
  function viewMore() {
    setNewsCount(newsCount + 10);
  }
    return (
        <div className="App">
        <div className="container">
          <h2 className="header">Heacker News stories</h2>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                name="search"
                placeholder="Search by title"
              />
            </div>
            <div className="col-md-6">
              <fieldset>
                <input
                  type="radio"
                  value="Top"
                  checked={radioValue === "Top"}
                  onChange={(e) => setRadio(e.target.value)}
                />
                &nbsp;Top&nbsp;
                <input
                  type="radio"
                  value="Ask"
                  checked={radioValue === "Ask"}
                  onChange={(e) => setRadio(e.target.value)}
                />
                &nbsp;Ask &nbsp;
                <input
                  type="radio"
                  value="Show"
                  checked={radioValue === "Show"}
                  onChange={(e) => setRadio(e.target.value)}
                />
                &nbsp;Show&nbsp;
                <input
                  type="radio"
                  value="Job"
                  checked={radioValue === "Job"}
                  onChange={(e) => setRadio(e.target.value)}
                />
                &nbsp;Job&nbsp;
              </fieldset>
            </div>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Title</td>
                <td>Score</td>
                <td>User</td>
                <td>Time</td>
              </tr>
            </thead>
            <tbody>
              {storyIds.length < 1 ? (
                <tr>
                  <td colSpan="4">Loading.....</td>
                </tr>
              ) : (
                ""
              )}
              {storyIds.slice(0, newsCount).map((storyId) => (
                <Rows
                  key={storyId}
                  searchText={searchText}
                  storyIdU={storyId}
                />
              ))}
            </tbody>
          </table>
          <button onClick={viewMore} className="btn btn-primary">
            View More
          </button>
        </div>
      </div>
    )
}