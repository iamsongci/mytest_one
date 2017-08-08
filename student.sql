# Host: 127.0.0.1  (Version 5.7.18)
# Date: 2017-08-08 23:59:14
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "t_student"
#

CREATE TABLE `t_student` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(12) DEFAULT NULL COMMENT '姓名',
  `sex` bit(1) NOT NULL DEFAULT b'1' COMMENT '0：女   1：男  （默认男）',
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "t_student"
#

INSERT INTO `t_student` VALUES (1,'小明同学',b'1','中国台湾'),(2,'王同学',b'0','中国钓鱼岛');
