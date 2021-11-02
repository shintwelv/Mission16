import { render } from "@testing-library/react";
import axios from "axios";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

class Insert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleTitle: "",
      articleContent: "",
    };
  }

  insert() {
    const { articleTitle, articleContent } = this.state;

    let form = new FormData();
    form.append("articleTitle", articleTitle);
    form.append("articleContent", articleContent);

    axios
      .post("insertProcess.do", form)
      .then((res) => {
        alert("성공했다");
        this.props.history.push("/Main");
      })
      .catch((err) => alert(err.response.data.msg));
  }

  render() {
    const { articleTitle, articleContent } = this.state;

    return (
      <>
        <h1>게시물 등록</h1>
        <h3>제목</h3>
        <input
          type="text"
          value={articleTitle}
          onChange={(event) =>
            this.setState({ articleTitle: event.target.value })
          }
        />
        <br />
        <h3>내용</h3>
        <textarea
          rows="10"
          cols="20"
          value={articleContent}
          onChange={(event) =>
            this.setState({ articleContent: event.target.value })
          }
        ></textarea>
        <br />
        <br />
        <button onClick={() => this.insert()}>게시글 등록</button>
        <Link to="/">
          <button type="button">취소</button>
        </Link>
      </>
    );
  }
}

export default Insert;
