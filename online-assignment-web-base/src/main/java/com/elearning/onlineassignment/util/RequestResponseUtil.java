package com.elearning.onlineassignment.util;


import com.elearning.onlineassignment.models.ResponseWrapper;
import com.elearning.onlineassignment.models.ResponseWrapperError;
import com.elearning.onlineassignment.models.ResponseWrapperStatus;

import java.util.ArrayList;
import java.util.List;

public class RequestResponseUtil
{
    public static <T> ResponseWrapper getWrappedResponse(int code, String message, T responseBody )
    {
        ResponseWrapperStatus status = new ResponseWrapperStatus( code, message );
        List<T> data = new ArrayList<>();
        data.add( responseBody );
        ResponseWrapper response = new ResponseWrapper();
        response.setStatus( status );
        response.setData( data );
        return response;
    }

    public static ResponseWrapper getErrorWrapper(int code, String message, int errorCode, String errorMsg, String errorDetails )
    {
        ResponseWrapperStatus status = new ResponseWrapperStatus( code, message );
        ResponseWrapperError error = new ResponseWrapperError( errorCode, errorMsg, errorDetails );
        ResponseWrapper responseWrapper = new ResponseWrapper();
        responseWrapper.setStatus( status );
        responseWrapper.setError( error );
        return responseWrapper;
    }

}
