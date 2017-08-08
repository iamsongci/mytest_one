package com.songci.mytest_one.dao.base;

import java.util.List;

/**
 * Created by songl on 2017/8/8.
 */
public interface BaseDao<T> {
    public Boolean insert(T var);
    public Integer delete(T var);
    public Integer update(T var);
    public List<T> select(T var);
}
