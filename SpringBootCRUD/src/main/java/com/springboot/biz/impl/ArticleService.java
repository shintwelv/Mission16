package com.springboot.biz.impl;

import com.springboot.biz.model.Article;

public interface ArticleService {

	void insert(Article article);

	void update(Article article);

	void delete(Article article);

	Article select();

}