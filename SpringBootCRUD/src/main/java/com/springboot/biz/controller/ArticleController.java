package com.springboot.biz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.biz.impl.ArticleService;
import com.springboot.biz.model.Article;

@RestController
public class ArticleController {
	@Autowired
	private ArticleService articleService;

	@RequestMapping(value = "insertProcess.do")
	public void insertProcess(Article article) {
		articleService.insert(article);
	}

	@RequestMapping(value = "updateProcess.do")
	public void updateProcess(Article article) {
		articleService.update(article);
	}

	@RequestMapping(value = "deleteProcess.do")
	public void deleteProcess(Article article) {
		articleService.delete(article);
	}

	@RequestMapping(value = "view.do")
	public Article viewArticle() {
		Article article = articleService.select();
		return article;
	}

}
