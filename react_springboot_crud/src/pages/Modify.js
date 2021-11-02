import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Modify extends Component {
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
        <h1>게시글 수정</h1>
        <form action="updateProcess.do" method="post" id="updateForm">
          <input
            type="hidden"
            name="articleId"
            defaultValue={this.state.articleId}
          />
          <h3>제목</h3>
          <input
            type="text"
            name="articleTitle"
            defaultValue={this.state.articleTitle}
          />
          <br />
          <h3>내용</h3>
          <textarea
            rows="10"
            cols="20"
            name="articleContent"
            defaultValue={this.state.articleContent}
          ></textarea>
          <br /> <br />
          <button form="updateForm">게시글 수정</button>
          <Link to="/">
            <button type="button">취소</button>
          </Link>
        </form>
      </>
    );
  }
}

export default Modify;
