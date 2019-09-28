package com.afferolab.stationarystore.resources;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.afferolab.stationarystore.core.Product;
import com.afferolab.stationarystore.db.ProductsDAO;

import io.dropwizard.hibernate.UnitOfWork;

@Path("/products")
@Produces(MediaType.APPLICATION_JSON)
public class ProductsResource {
	
	private ProductsDAO productsDAO;
	
	public ProductsResource(ProductsDAO productsDAO) {
		this.productsDAO = productsDAO;
	}

	@GET
	@UnitOfWork
	public List<Product> getList(){
		return productsDAO.findAll();

	}
	
	
}
