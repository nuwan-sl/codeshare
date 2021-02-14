package com.elearning.onlineassignment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableZuulProxy
public class OnlineAssignmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineAssignmentApplication.class, args);
	}

}
