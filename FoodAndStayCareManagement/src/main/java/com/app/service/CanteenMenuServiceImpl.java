package com.app.service;

import java.util.List;
import java.util.Optional;

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
		
		return repo.findByDayAndMealType1( day, breakfast);
	}

	
	@Override
	public List<MenuItem> getMenuForEvening(Day day, MealType breakfast, MealType lunch) {
		
		return repo.findByDayAndMealType2(day, breakfast, lunch);
	}


	@Override
	public List<MenuItem> getMenuByDayAndMealType(Day day, MealType mealType) {
		
		return repo.findByDayAndMealType(day, mealType);
	}


	@Override
	public void deleteMenuItem(int id) {

		Optional<MenuItem> optional = repo.findById(id);
		if (optional.isPresent())
			repo.deleteById(id);

	}


	@Override
	public MenuItem updateMenuItemDetails(MenuItem item) {
		Optional<MenuItem> optional = repo.findById(item.getId());
		if (optional.isPresent())
			return repo.save(item); 
		return null;
		
	}

	
}
