package com.app.controller;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.MenuItem;
import com.app.service.ICanteenMenuService;

@RestController
@RequestMapping("/menu")
public class CanteenMenuController {
	
	@Autowired 
	private ICanteenMenuService service;
	
	public ResponseEntity<?> getTodaysMenu(){
		
		DayOfWeek day=LocalDate.now().getDayOfWeek();
		int time=LocalTime.now().getHour();
		
		List<MenuItem> items=new ArrayList<MenuItem>();
		items=service.getAllMenu();
		if(items.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(items,HttpStatus.OK);
	}
}
