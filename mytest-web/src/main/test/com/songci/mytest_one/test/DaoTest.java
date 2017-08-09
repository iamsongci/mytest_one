//package com.songci.mytest_one.test;
//
//import com.songci.mytest_one.dao.StudentDao;
//import com.songci.mytest_one.model.Student;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//
//import javax.annotation.Resource;
//import java.util.List;
//
///**
// * Created by songl on 2017/8/8.
// */
//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(locations = "classpath*:config/applicationContext.xml")
//public class DaoTest {
//    @Resource
//    private StudentDao studentDao;
//    @Test
//    public void addTest() throws Exception {
//        Student student=new Student();
////        student.setId(new Integer("1"));
//        student.setName("王同学");
//        student.setSex(false);
//        student.setAddress("中国钓鱼岛");
//        System.out.println(studentDao.insert(student));
//    }
//    @Test
//    public void deleteTest()throws Exception{
//        Student student=new Student();
//        student.setId(new Integer("1"));
//        System.out.println(studentDao.delete(student));
//
//    }
//    @Test
//    public void updateTest()throws Exception{
//        Student student=new Student();
//        student.setId(new Integer("1"));
//        student.setAddress("中国台湾");
//        System.out.println(studentDao.update(student));
//    }
//    @Test
//    public void select()throws Exception{
////        Student student=new Student();
////        student.setId(new Integer("1"));
//        List<Student> list=studentDao.select(null);
//        for (Student s:list){
//            System.out.println(s.toString());
//        }
//
//    }
//}
