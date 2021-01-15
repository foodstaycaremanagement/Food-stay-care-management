package com.app.pojos;

import java.util.HashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "students")
public class Student extends BaseEntity{

	@Column(name = "first_name", nullable = false, length = 20)
	private String firstName;

	@Column(name = "last_name", nullable = false, length = 20)
	private String lastName;

	@Column(nullable = false, length = 40)
	private String email;

	@Column(nullable = false , length = 11)
	private String contact;

	@Column(nullable = false , length = 20)
	private String password;

	@Transient
	private HashMap<Integer, MenuItem> cart;
	
	public Student() {
		System.out.println("In Constructor of: "+getClass().getName());
	}
	
	
	public Student(String firstName, String lastName, String email, String contact, String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.contact = contact;
		this.password = password;
		this.cart = new HashMap<Integer, MenuItem>();
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getContact() {
		return contact;
	}


	public void setContact(String contact) {
		this.contact = contact;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public HashMap<Integer, MenuItem> getCart() {
		return cart;
	}


	public void setCart(HashMap<Integer, MenuItem> cart) {
		this.cart = cart;
	}


	@Override
	public String toString() {
		return "Student [Id=" + getId() + "firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", contact="
				+ contact + ", password=" + password + ", cart=" + cart + "]";
	}
	
	

	
	
}
