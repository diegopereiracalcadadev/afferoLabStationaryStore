package com.afferolab.stationarystore.core;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name="PRODUCTS")
@NamedQueries({
	@NamedQuery(name=Product.FIND_ALL, query="select p from Product p")
})
public class Product {
	
	public final static String FIND_ALL = "com.afferolab.stationarystore.core.Product.findAll";

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
    @Column(name = "COD_BARRAS")
	private long codBarras;

    public Product() {}
    
    public Product(long id) {
    	this.id = id;
    }
    
	public Product(long id, long codBarras) {
		super();
		this.id = id;
		this.codBarras = codBarras;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getCodBarras() {
		return codBarras;
	}
	public void setCodBarras(long codBarras) {
		this.codBarras = codBarras;
	}
	
	
	
}
