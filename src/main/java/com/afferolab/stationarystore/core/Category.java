package com.afferolab.stationarystore.core;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="CATEGORIES")
@NamedQueries({
	@NamedQuery(name=Category.FIND_ALL, query="select c from Category c")
})
public class Category {
	
	
	public final static String FIND_ALL = "com.afferolab.stationarystore.core.Category.findAll";

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String title;
	private String description;

	@OneToMany(mappedBy="category", fetch = FetchType.LAZY)
	private Set<Product> products;
	
	public Category() {}
    
	public Category(long id, String title, String description) {
		super();
		
		this.id = id;
		this.title = title;
		this.description = description;
	}

	public Category(long id) {
    	this.id = id;
    }
    
    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
