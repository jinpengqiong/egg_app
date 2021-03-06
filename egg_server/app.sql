create database egg_house;

use egg_house;

create table `user`(
  `id` int not null auto_increment,
  `username` varchar(20) default null comment '用户名',
  `password` varchar(64) default null comment '密码',
  `avatar` text comment '头像',
  `phone` varchar(20) default null comment '电话',
  `sign` varchar(300) default null comment '用户签名',
  `createTime` timestamp default null comment '创建时间',
  `updateTime` timestamp default null comment '更新时间',
  primary key(`id`)
)engine=innoDB auto_increment=1 default charset=utf8 comment='用户表';

// * 民宿表
create table `house`(
  `id` int not null auto_increment,
  `name` varchar(20) default null comment '房屋名称',
  `info` varchar(150) default null comment '房屋简介',
  `address` varchar(200) default null comment '房屋地址',
  `price` int not null comment '房屋价格',
  `publishTime` timestamp default null comment '发布时间',
  `cityCode` varchar(10) default null comment '城市编码',
  `showCount` int(5) default 0 comment '展示次数',
  `startTime` timestamp default null comment '开始出租时间',
  `endTime` timestamp default null comment '出租结束时间',
  primary key(`id`)
)engine=innoDB auto_increment=1 default charset=utf8 comment='房屋表';

// * 图片表
create table `imgs`(
  `id` int not null auto_increment,
  `url` varchar(500) default null comment '图片地址',
  `houseId` int not null comment '房屋ID',
  `createTime` timestamp default null comment '创建时间',
  primary key(`id`)
)engine=innoDB auto_increment=1 default charset=utf8 comment='图片表';

// * 评论表
create table `comments`(
  `id` int not null auto_increment,
  `userId` int not null comment '用户表id',
  `houseId` int not null comment '房屋表id',
  `msg` varchar(500) default null comment '评论内容',
  `createTime` timestamp default null comment '创建时间',
  primary key(`id`)
)engine=innoDB auto_increment=1 default charset=utf8 comment='评论表';