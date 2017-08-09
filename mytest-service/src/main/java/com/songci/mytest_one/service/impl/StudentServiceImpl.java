package com.songci.mytest_one.service.impl;

import com.songci.mytest_one.dao.StudentDao;
import com.songci.mytest_one.model.Student;
import com.songci.mytest_one.service.StudentService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by songl on 2017/8/8.
 */
@Service("StudentService")
public class StudentServiceImpl implements StudentService{
    @Resource
    private StudentDao studentDao;
    public Boolean addStudent(Student student) {
        return studentDao.insert(student);
    }

    public Boolean deleteStudentById(Integer id) {
        Student student=new Student();
        student.setId(id);
        return studentDao.delete(student);
    }

    public Boolean updateStudentById(Student student) {
        return studentDao.update(student);
    }

    public List<Student> findAllStudent(Student student) {
        return studentDao.select(student);
    }
}
