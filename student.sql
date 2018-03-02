# Host: localhost  (Version 5.7.18)
# Date: 2018-03-02 16:04:01
# Generator: MySQL-Front 5.4  (Build 4.153) - http://www.mysqlfront.de/

/*!40101 SET NAMES utf8 */;

#
# Structure for table "t_student"
#

CREATE TABLE `t_student` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(12) DEFAULT NULL COMMENT '姓名',
  `sex` bit(1) NOT NULL DEFAULT b'1' COMMENT '0：女   1：男  （默认男）',
  `address` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "t_student"
#

INSERT INTO `t_student` VALUES (1,'小明同学',b'1','中国台湾','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519961861685&di=6a3f63209b56caad91f236b7c2cc6dd2&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201411%2F08%2F20141108195140_Ltnin.jpeg'),(2,'王同学',b'0','中国钓鱼岛','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519961835967&di=47d6279fbe81236684c3e3a19ac65b23&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201505%2F09%2F20150509231341_iKmn5.thumb.700_0.jpeg');
