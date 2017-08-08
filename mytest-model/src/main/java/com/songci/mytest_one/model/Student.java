package com.songci.mytest_one.model;

/**
 * Created by songl on 2017/8/8.
 */
public class Student {
     private Integer id;
     private String name;//姓名
     private Boolean sex;//性别
     private String address;//地址

    public Integer getId(){return id;}
    public String getName(){return  name;}
    public Boolean getSex(){return sex;}
    public String getAddress(){return address;}
    public void setId(Integer id){this.id = id;}
    public void setName(String name){this.name = name;}
    public void setSex(Boolean sex){this.sex = sex;}
    public void setAddress(String address){this.address = address;}

    @Override
    public String toString() {
        return "Student : id:"+this.id+" name:"+this.name+" sex:"+this.sex+" address:"+this.address;
    }
}
