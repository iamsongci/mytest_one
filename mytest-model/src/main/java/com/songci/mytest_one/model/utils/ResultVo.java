package com.songci.mytest_one.model.utils;

/**
 * Created by songl on 2017/8/10.
 */
public class ResultVo<T> {
    private boolean success = false;
    private String message = null;
    private T result = null;

    public void isSuccess(boolean b) {
        this.success=b;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public void setResult(T result) {
        this.result = result;
    }
    public boolean getSuccess(){
        return success;
    }
    public String getMessage() {
        return message;
    }
    public T getResult() {
        return result;
    }

}
