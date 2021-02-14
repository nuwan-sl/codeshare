package com.elearning.onlineassignment.models;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseWrapper<T>
{

    private String version;

    private ResponseWrapperStatus status;

    private ResponseWrapperError error;

    private List<T> data;

    public ResponseWrapper()
    {
    }

    public void setStatus( ResponseWrapperStatus status )
    {
        this.status = status;
    }

    public void setError( ResponseWrapperError error )
    {
        this.error = error;
    }

    public ResponseWrapperStatus getStatus()
    {
        return status;
    }

    public ResponseWrapperError getError()
    {
        return error;
    }

    public List<T> getData()
    {
        return data;
    }

    public void setData( List<T> data )
    {
        this.data = data;
    }

    public String getVersion()
    {
        return version;
    }

    public void setVersion( String version )
    {
        this.version = version;
    }
}
