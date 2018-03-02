package com.songci.mytest_one.model;

/**
 * Created by songl on 2017/8/8.
 */
public class Student {
     private Integer id;
    /**
     * 姓名
     */
     private String name;
    /**
     * 性别
     */
     private Boolean sex;
    /**
     * 地址
     */
     private String address;
    /**
     * 相片
     */
    private String photo;

    public Integer getId(){return id;}
    public String getName(){return  name;}
    public Boolean getSex(){return sex;}
    public String getAddress(){return address;}
    public String getPhoto() {return photo;}
    public void setId(Integer id){this.id = id;}
    public void setName(String name){this.name = name;}
    public void setSex(Boolean sex){this.sex = sex;}
    public void setAddress(String address){this.address = address;}
    public void setPhoto(String photo) {this.photo = photo;}

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sex=" + sex +
                ", address='" + address + '\'' +
                ", photo='" + photo + '\'' +
                '}';
    }
}
