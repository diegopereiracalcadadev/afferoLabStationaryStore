package com.afferolab.stationarystore.resources;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.afferolab.stationarystore.core.Category;
import com.afferolab.stationarystore.core.Product;
import com.afferolab.stationarystore.db.ProductsDAO;

import io.dropwizard.hibernate.UnitOfWork;
import io.dropwizard.jersey.params.LongParam;

@Path("/products")
@Produces(MediaType.APPLICATION_JSON)
public class ProductsResource {

	private ProductsDAO productsDAO;

	public ProductsResource(ProductsDAO productsDAO) {
		this.productsDAO = productsDAO;
	}

	@GET
	@UnitOfWork
	public List<Product> findAll() {
		return productsDAO.findAll();
	}
	
	@DELETE
	@Path("/{id}")
	@UnitOfWork
	public Response delete(@PathParam("id") LongParam id) {
		productsDAO.delete(id.get());
		return Response
				.ok("Product deleted")
				.build();
	}

	@PUT
	@Path("/new")
	@UnitOfWork
	public Response create(@QueryParam("codbarras") long codBarras,
							@QueryParam("category_id") long categoryId) {
		Product product = new Product();
		product.setCodBarras(codBarras);
		product.setCategory(new Category(categoryId));
		
		product = productsDAO.create(product);
		
		return Response
			.ok(product)
			.build();
	}

	@PUT
	@Path("/{id}/edit")
	@UnitOfWork
	public Response update(@PathParam("id") long id,
							@QueryParam("codbarras") long codBarras,
							@QueryParam("category_id") long categoryId) {
		Product product = new Product(id, codBarras);
		product.setCategory(new Category(categoryId));

		product = productsDAO.update(product);
		
		return Response
			.ok(product)
			.build();
	}
}
