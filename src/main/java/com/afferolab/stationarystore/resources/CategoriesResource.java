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
import com.afferolab.stationarystore.db.CategoriesDAO;

import io.dropwizard.hibernate.UnitOfWork;
import io.dropwizard.jersey.params.LongParam;

@Path("/categories")
@Produces(MediaType.APPLICATION_JSON)
public class CategoriesResource {

	private CategoriesDAO categoriesDAO;

	public CategoriesResource(CategoriesDAO categoriesDAO) {
		this.categoriesDAO = categoriesDAO;
	}

	@GET
	@UnitOfWork
	public List<Category> findAll() {
		return categoriesDAO.findAll();

	}
	
	@DELETE
	@Path("/{id}")
	@UnitOfWork
	public Response delete(@PathParam("id") LongParam id) {
		categoriesDAO.delete(id.get());
		return Response
				.ok("Category deleted")
				.build();
	}

	@PUT
	@Path("/new")
	@UnitOfWork
	public Response create(@QueryParam("title") String title,
							@QueryParam("description") String description) {
		Category category = new Category();
		category.setTitle(title);
		category.setDescription(description);
		
		category = categoriesDAO.create(category);
		
		return Response
			.ok(category)
			.build();
	}

	@PUT
	@Path("/{id}/edit")
	@UnitOfWork
	public Response update(@PathParam("id") long id,
							@QueryParam("title") String title,
							@QueryParam("description") String description) {
		Category category = new Category(id, title, description);
		category = categoriesDAO.update(category);
		
		return Response
			.ok(category)
			.build();
	}
}
