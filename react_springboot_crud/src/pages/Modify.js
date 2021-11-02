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
    });
  }

  update() {
    const { articleId, articleTitle, articleContent } = this.state;

    let form = new FormData();
    form.append("articleId", articleId);
    form.append("articleTitle", articleTitle);
    form.append("articleContent", articleContent);

    axios
      .post("updateProcess.do", form)
      .then((res) => {
        alert("성공했다");
        this.props.history.push("/Main");
      })
      .catch((err) => alert(err.response.data.msg));
  }

  render() {
    const { articleId, articleTitle, articleContent } = this.state;

    return (
      <>
        <h1>게시글 수정</h1>
        <input type="hidden" value={articleId} readOnly />
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
        <br /> <br />
        <button onClick={() => this.update()}>게시글 수정</button>
        <Link to="/">
          <button type="button">취소</button>
        </Link>
      </>
    );
  }
}

export default Modify;
