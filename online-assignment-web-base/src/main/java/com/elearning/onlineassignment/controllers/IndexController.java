package com.elearning.onlineassignment.controllers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/*
 * Copyright (c) 2017. CodeGen Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 
 * Created by ishara on 4/25/2017 12:17 PM
 * Updated by charitha on 5/1/2018
 */
@Controller
public class IndexController
{

    private final Logger logger = LoggerFactory.getLogger( IndexController.class.getSimpleName() );

    @Autowired
    private Environment environment;

    @RequestMapping({"/"})
    public String index() throws IOException
    {
        return "forward:/index.html";
    }



}
