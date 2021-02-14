package com.elearning.onlineassignment.models;

import com.fasterxml.jackson.annotation.JsonInclude;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseWrapperError
{

    private int code;

    private String message;

    private String details;

    private String[] errors;

    public ResponseWrapperError()
    {
    }

    public ResponseWrapperError(int code, String message, String details )
    {
        this.code = code;
        this.message = message;
        this.details = details;
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

    public String getDetails()
    {
        return details;
    }

    public void setDetails( String details )
    {
        this.details = details;
    }

    public String[] getErrors()
    {
        return errors;
    }

    public void setErrors( String[] errors )
    {
        this.errors = errors;
    }
}