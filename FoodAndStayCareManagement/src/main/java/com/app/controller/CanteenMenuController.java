package com.app.controller;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Day;
import com.app.pojos.MealType;
import com.app.pojos.MenuItem;
import com.app.service.ICanteenMenuService;

@RestController
@RequestMapping("/menu")
public class CanteenMenuController {
	
	@Autowired 
	private ICanteenMenuService service;
	
	@GetMapping
	public ResponseEntity<?> getTodaysMenu(){
		
		Day day = Day.valueOf(LocalDate.now().getDayOfWeek().toString());
		int time = LocalTime.now().getHour();
		List<MenuItem> items = new ArrayList<>();
		
		if (time >= 8 && time < 12)
			items = service.getMenuForMorning(day);
		if (time >= 12 && time <= 15)
			items = service.getMenuForAfterNoon(day, MealType.BREAKFAST);
		else if (time > 15 && time < 22)
			items = service.getMenuForEvening(day, MealType.BREAKFAST, MealType.LUNCH);
		
		if (items.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(items, HttpStatus.OK);
	}
	
	@GetMapping("/{day}/{mealType}")
	public ResponseEntity<?> getMenuList(@PathVariable String day,@PathVariable String mealType){
		
		List<MenuItem> items = new ArrayList<>();
		items=service.getMenuByDayAndMealType(Day.valueOf(day),MealType.valueOf(mealType));
		
		if (items.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(items, HttpStatus.OK);
		
	}
	
	@DeleteMapping("/{id}")
	public void deleteProductDetails(@PathVariable int id) {
	
			service.deleteMenuItem(id);		
	}
	
	
	@PutMapping
	public ResponseEntity<?> updateProductDetails(@RequestBody MenuItem menuItem) {
		
		try {
			return ResponseEntity.ok(service.updateMenuItemDetails(menuItem));
		} catch (RuntimeException e) {
			System.out.println("err in controller " + e);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/{day}/{mealType}")
	public ResponseEntity<?> addNewMenuItem(@PathVariable String day,@PathVariable String mealType , @RequestBody MenuItem menuItem){
		menuItem.setDay(Day.valueOf(day));
		menuItem.setMealType(MealType.valueOf(mealType));
		try {
			return new ResponseEntity<>(service.addNewItemToMenuList(menuItem),HttpStatus.CREATED);
			
		}
		catch(RuntimeException e){
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		
	}
}
