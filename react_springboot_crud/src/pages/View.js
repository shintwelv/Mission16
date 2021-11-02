import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: "",
      articleTitle: "",
      articleContent: "",
    };
    this.getData();
  }

  getData() {
    axios.get("/view.do").then((res) => {
      const data = res.data;
      this.setState({
        articleId: data.articleId,
        articleTitle: data.articleTitle,
        articleContent: data.articleContent,
      });
    });
  }

  render() {
    return (
      <>
        <h1>게시글 조회</h1>
        <h3>제목</h3>
        <input type="text" value={this.state.articleTitle} readOnly />
        <br />
        <h3>내용</h3>
        <textarea
          rows="10"
          cols="20"
          value={this.state.articleContent}
          readOnly
        ></textarea>
        <br />
        <br />
        <Link to="/">
          <button type="button">이전으로</button>
        </Link>
      </>
    );
  }
}

export default View;
