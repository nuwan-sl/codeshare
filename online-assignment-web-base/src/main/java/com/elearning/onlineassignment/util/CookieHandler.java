package com.elearning.onlineassignment.util;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.Optional;

/**
 * Copyright (c) 2016. CodeGen Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by hareen
 * Date : 12/3/2018
 * Time : 3:11 PM
 */

public class CookieHandler
{
    public static String DEFAULT_PATH = "/";

    public static String getCookieValue(Cookie[] cookies, String key )
    {
        if( cookies == null )
        {
            return null;
        }
        Optional<Cookie> value = Arrays.stream( cookies ).filter(c -> key.equals( c.getName() ) ).findFirst();
        return value.map( Cookie::getValue ).orElse( null );
    }

    public static Cookie getCookie(Cookie[] cookies, String key )
    {
        if( cookies == null )
        {
            return null;
        }
        Optional<Cookie> value = Arrays.stream( cookies ).filter(c -> key.equals( c.getName() ) ).findFirst();
        return value.orElse( null );
    }

    /**
     * @param request
     * @param response
     * @param keys
     */
    public void removeCookies(HttpServletRequest request, HttpServletResponse response, String[] keys )
    {
        Cookie[] cookies = request.getCookies();
        if( cookies == null )
        {
            return;
        }
        Arrays.stream( cookies ).forEach( cookie -> {
            if( Arrays.stream( keys ).anyMatch( cookie.getName()::equals ) )
            {
                this.removeCookie( response, cookie );
            }
        } );
    }

    /**
     * @param response
     * @param cookie
     */
    public void removeCookie(HttpServletResponse response, Cookie cookie, String path )
    {
        cookie.setMaxAge( 0 );
        cookie.setValue( null );
        cookie.setPath( path );
        response.addCookie( cookie );
    }

    /**
     * @param response
     * @param cookie
     */
    public void removeCookie(HttpServletResponse response, Cookie cookie )
    {
        this.removeCookie( response, cookie, DEFAULT_PATH );
    }

    /**
     * @param response
     * @param key
     * @param value
     * @param path
     */
    public void addCookie(HttpServletResponse response, String key, String value, String path )
    {
        Cookie crr = new Cookie( key, value );
        crr.setPath( path );
        response.addCookie( crr );
    }

    /**
     * @param response
     * @param key
     * @param value
     */
    public void addCookie(HttpServletResponse response, String key, String value )
    {
        this.addCookie( response, key, value, DEFAULT_PATH );
    }
}
