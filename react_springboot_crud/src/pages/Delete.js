import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Delete extends Component {
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
      console.log(this.state);
    });
  }
  render() {
    return (
      <>
        <h1>게시글 삭제</h1>
        <form action="deleteProcess.do" method="post" id="deleteForm">
          <input
            type="hidden"
            name="articleId"
            defaultValue={this.state.articleId}
          />
          <h3>제목</h3>
          <input
            type="text"
            name="articleTitle"
            value={this.state.articleTitle}
            readOnly
          />
          <br />
          <h3>내용</h3>
          <textarea
            rows="10"
            cols="20"
            name="articleContent"
            value={this.state.articleContent}
            readOnly
          ></textarea>
          <br /> <br />
          <button form="deleteForm">게시글 삭제</button>
          <Link to="/">
            <button type="button">취소</button>
          </Link>
        </form>
      </>
    );
  }
}

export default Delete;
