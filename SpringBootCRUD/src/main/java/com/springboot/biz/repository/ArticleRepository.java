package com.springboot.biz.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.springboot.biz.model.Article;

@Repository
public interface ArticleRepository extends CrudRepository<Article, Integer>{
	
	Article findTopByOrderByArticleIdDesc();
	
	Article save(Article article);
	
	void delete(Article article);
	
}
