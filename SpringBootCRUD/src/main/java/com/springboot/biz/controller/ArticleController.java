package com.springboot.biz.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.springboot.biz.impl.ArticleService;
import com.springboot.biz.model.Article;

@RestController
public class ArticleController {
	@Autowired
	private ArticleService articleService;

//	@RequestMapping(value = {"/", "goMain.do"})
//	public String goMain() {
//		return "index";
//	}

	@RequestMapping(value = "insert.do")
	public String fwdInsertPage() {
		return "insert";
	}

	@RequestMapping(value = "insertProcess.do")
	public void insertProcess(Article article) {
		articleService.insert(article);
	}

	@RequestMapping(value = "update.do")
	public String fwdUpdatePage(HttpServletRequest request) {
		if (articleExists()) {
			getAndSetMostRecentArticleToPage(request);
			return "update";
		} else {
			return "noArticle";
		}
	}

	@RequestMapping(value = "updateProcess.do")
	public String updateProcess(Article article) {
		articleService.update(article);
		return "updateSuccess";
	}

	@RequestMapping(value = "delete.do")
	public String fwdDeletePage(HttpServletRequest request) {
		if (articleExists()) {
			getAndSetMostRecentArticleToPage(request);
			return "delete";
		} else {
			return "noArticle";
		}
	}

	@RequestMapping(value = "deleteProcess.do")
	public String deleteProcess(Article article) {
		articleService.delete(article);
		return "deleteSuccess";
	}

	@RequestMapping(value = "view.do")
	public Article viewArticle() {
		Article article = articleService.select();
		return article;
	}

	private ModelAndView getAndSetMostRecentArticleToPage(HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		Article article = articleService.select();
		mv.addObject("article", article);
		return mv;
	}

	private boolean articleExists() {
		Article article = articleService.select();
		if (article == null) {
			return false;
		} else {
			return true;
		}
	}

}
