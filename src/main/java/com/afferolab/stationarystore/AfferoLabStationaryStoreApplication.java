package com.afferolab.stationarystore;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class AfferoLabStationaryStoreApplication extends Application<AfferoLabStationaryStoreConfiguration> {

    public static void main(final String[] args) throws Exception {
        new AfferoLabStationaryStoreApplication().run(args);
    }

    @Override
    public String getName() {
        return "AfferoLabStationaryStore";
    }

    @Override
    public void initialize(final Bootstrap<AfferoLabStationaryStoreConfiguration> bootstrap) {
        // TODO: application initialization
    }

    @Override
    public void run(final AfferoLabStationaryStoreConfiguration configuration,
                    final Environment environment) {
        // TODO: implement application
    }

}
