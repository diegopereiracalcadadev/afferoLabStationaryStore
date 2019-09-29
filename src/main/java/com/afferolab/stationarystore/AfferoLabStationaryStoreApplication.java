package com.afferolab.stationarystore;

import com.afferolab.stationarystore.core.Category;
import com.afferolab.stationarystore.core.Product;
import com.afferolab.stationarystore.db.CategoriesDAO;
import com.afferolab.stationarystore.db.ProductsDAO;
import com.afferolab.stationarystore.resources.CategoriesResource;
import com.afferolab.stationarystore.resources.ProductsResource;

import io.dropwizard.Application;
import io.dropwizard.db.DataSourceFactory;
import io.dropwizard.hibernate.HibernateBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class AfferoLabStationaryStoreApplication extends Application<AfferoLabStationaryStoreConfiguration> {

	private final HibernateBundle<AfferoLabStationaryStoreConfiguration> hibernateBundle = new HibernateBundle<AfferoLabStationaryStoreConfiguration>(
			Product.class,
			Category.class) {

		@Override
		public DataSourceFactory getDataSourceFactory(AfferoLabStationaryStoreConfiguration config) {

			return config.getDataSourceFactory();
		}

	};

	public static void main(final String[] args) throws Exception {
		new AfferoLabStationaryStoreApplication().run(args);
	}

	@Override
	public String getName() {
		return "AfferoLabStationaryStore";
	}

	@Override
	public void initialize(final Bootstrap<AfferoLabStationaryStoreConfiguration> bootstrap) {
		bootstrap.addBundle(hibernateBundle);
	}

	@Override
	public void run(final AfferoLabStationaryStoreConfiguration configuration, final Environment environment) {

		final ProductsDAO productsDAO = new ProductsDAO(hibernateBundle.getSessionFactory());
        environment.jersey().register(new ProductsResource(productsDAO));
		
        final CategoriesDAO categoriesDAO = new CategoriesDAO(hibernateBundle.getSessionFactory());
        environment.jersey().register(new CategoriesResource(categoriesDAO));

	}

}
