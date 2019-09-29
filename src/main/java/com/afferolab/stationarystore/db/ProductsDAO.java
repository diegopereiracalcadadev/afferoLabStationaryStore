package com.afferolab.stationarystore.db;

import java.util.List;

import javax.ws.rs.core.Response;

import org.hibernate.SessionFactory;

import com.afferolab.stationarystore.core.Product;

import io.dropwizard.hibernate.AbstractDAO;

public class ProductsDAO extends AbstractDAO<Product> {

	//private static final String NOT_EXISTING_OBJECT = "Objeto não existente. Nenhuma alteração foi feita.";

	public ProductsDAO(SessionFactory sessionFactory) {
		super(sessionFactory);
	}

	public List<Product> findAll() {
		return list(namedQuery(Product.FIND_ALL));
	}

	public Response delete(long id) {
		this.currentSession().delete(new Product(id));
		return null;
	}

	public Product create(Product product) {
		return this.persist(product);
	}

	public Product update(Product product) {
		return super.persist(product);
	}

}
