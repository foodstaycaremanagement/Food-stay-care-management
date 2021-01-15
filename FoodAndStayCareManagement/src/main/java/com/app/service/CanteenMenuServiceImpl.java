package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.MenuItem;
import com.app.repository.CanteenMenuRepository;

@Service
@Transactional
public class CanteenMenuServiceImpl implements ICanteenMenuService{
	
	@Autowired 
	private CanteenMenuRepository repo;

	@Override
	public List<MenuItem> getAllMenu() {
		return repo.findAll();
	}

	
}
