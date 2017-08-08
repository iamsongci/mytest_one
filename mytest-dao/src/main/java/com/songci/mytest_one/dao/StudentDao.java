package com.songci.mytest_one.dao;


import com.songci.mytest_one.dao.base.BaseDao;
import com.songci.mytest_one.model.Student;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by songl on 2017/8/8.
 */
@Repository
public interface  StudentDao extends BaseDao<Student> {
}
