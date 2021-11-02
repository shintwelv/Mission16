package com.springboot.biz.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "springboot_crud")
public class Article{
	@Id
	@GeneratedValue
	@Column(name = "article_id")
	private int articleId;
	
	@Column(name = "article_title")
	private String articleTitle;
	
	@Column(name = "article_content")
	private String articleContent;
}
