package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Day;
import com.app.pojos.MealType;
import com.app.pojos.MenuItem;
import com.app.repository.CanteenMenuRepository;

@Service
@Transactional
public class CanteenMenuServiceImpl implements ICanteenMenuService{
	
	@Autowired 
	private CanteenMenuRepository repo;


	
	@Override
	public List<MenuItem> getMenuForMorning(Day day) {
		
		return  repo.findByDay(day);
	}

	
	@Override
	public List<MenuItem> getMenuForAfterNoon(Day day, MealType breakfast) {
		// TODO Auto-generated method stub
		return repo.findByDayAndMealType( day, breakfast);
	}

	
	@Override
	public List<MenuItem> getMenuForEvening(Day day, MealType breakfast, MealType lunch) {
		// TODO Auto-generated method stub
		return repo.findByDayAndMealType2(day, breakfast, lunch);
	}

	
}
