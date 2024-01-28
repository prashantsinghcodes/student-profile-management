package com.psgroup.studentmanagementsystem.entity;

public class Student {
    private String studentName;

    private String phone;

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "Student{" +
                "studentName='" + studentName + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}
