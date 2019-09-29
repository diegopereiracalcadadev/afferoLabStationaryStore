package com.afferolab.stationarystore.db;

import java.util.List;

import javax.ws.rs.core.Response;

import org.hibernate.SessionFactory;

import com.afferolab.stationarystore.core.Category;

import io.dropwizard.hibernate.AbstractDAO;

public class CategoriesDAO extends AbstractDAO<Category> {

	public CategoriesDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}

	public List<Category> findAll() {
		return list(namedQuery(Category.FIND_ALL));
	}

	public Category create(Category category) {
		return this.persist(category);
	}

	public Category update(Category category) {
		return super.persist(category);
	}
	
	public void delete(long id) {
		this.currentSession().delete(new Category(id));
	}

}
