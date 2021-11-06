import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: "",
      articleTitle: "",
      articleContent: "",
      process: props.match.params.process,
    };
    if (this.state.process != "Insert") {
      this.getData();
    }
  }

  createHeaderName() {
    const process = this.state.process;
    if (process == "View") {
      return "조회";
    } else if (process == "Update") {
      return "수정";
    } else if (process == "Delete") {
      return "삭제";
    } else if (process == "Insert") {
      return "등록";
    }
  }

  createProcessBtn() {
    const process = this.state.process;
    if (process == "View") {
      return null;
    } else {
      const processName =
        process == "Update" ? "수정" : process == "Insert" ? "등록" : "삭제";
      return (
        <button onClick={() => this.process()}>게시글 {processName}</button>
      );
    }
  }

  process() {
    const { articleId, articleTitle, articleContent, process } = this.state;

    let processType = "";

    if (process == "Update") {
      processType = "/updateProcess.do";
    } else if (process == "Delete") {
      processType = "/deleteProcess.do";
    } else if (process == "Insert") {
      processType = "/insertProcess.do";
    } else if (process == "View") {
      return null;
    }

    let form = new FormData();
    form.append("articleContent", articleContent);
    form.append("articleTitle", articleTitle);
    if (process != "Insert") {
      form.append("articleId", articleId);
    }

    axios
      .post(processType, form)
      .then((res) => {
        alert("요청이 처리되었습니다");
        this.props.history.push("/");
      })
      .catch((err) => alert("error: " + err.response.data.msg));
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

  createArticleIdTag() {
    const articleId = this.state.articleId;
    const process = this.state.process;
    if (process != "Insert") {
      return <input type="hidden" value={articleId} readOnly />;
    } else {
      return null;
    }
  }

  render() {
    const articleTitle = this.state.articleTitle;
    const articleContent = this.state.articleContent;

    return (
      <>
        <h1>게시글 {this.createHeaderName()}</h1>
        {this.createArticleIdTag()}
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
        {this.createProcessBtn()}
        <Link to="/">
          <button type="button">취소</button>
        </Link>
      </>
    );
  }
}

export default Form;
