package com.afferolab.stationarystore.db;

import java.util.List;

import org.hibernate.SessionFactory;

import com.afferolab.stationarystore.core.Product;

import io.dropwizard.hibernate.AbstractDAO;

public class ProductsDAO extends AbstractDAO<Product> {

	public ProductsDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}

	public List<Product> findAll() {
		return list(namedQuery(Product.FIND_ALL));
	}

}
