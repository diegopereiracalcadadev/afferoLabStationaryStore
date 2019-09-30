package com.afferolab.stationarystore.core;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	private String codBarras;
    private String name;
    private String description;
	private int quantity;
    

	@ManyToOne
    @JoinColumn(name="category_id", nullable=true)
    private Category category;
    

    public Product() {}
    
    public Product(long id) {
    	this.id = id;
    }
    
	public Product(String codBarras, String name, String description, int quantity) {
		super();
		this.codBarras = codBarras;
		this.name = name;
		this.description = description;
		this.quantity = quantity;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCodBarras() {
		return codBarras;
	}

	public void setCodBarras(String codBarras) {
		this.codBarras = codBarras;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}	
	public int getQuantity() {
		return quantity;
	}
	
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
