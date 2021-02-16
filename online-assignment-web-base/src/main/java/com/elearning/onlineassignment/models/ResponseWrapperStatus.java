package com.elearning.onlineassignment.models;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseWrapperStatus
{
    private int code;

    private String message;

    public ResponseWrapperStatus()
    {
    }

    public ResponseWrapperStatus(int code, String message )
    {
        this.code = code;
        this.message = message;
    }

    public int getCode()
    {
        return code;
    }

    public void setCode( int code )
    {
        this.code = code;
    }

    public String getMessage()
    {
        return message;
    }

    public void setMessage( String message )
    {
        this.message = message;
    }
}
