
USE xzone;


CREATE TABLE IF NOT EXISTS `shoppingmall` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `Name` varchar(255) UNIQUE,
  `Email` varchar(255),
  `Owner`  int,
  `createdAt` datetime DEFAULT (now()),
  `UpdatedAt` datetime DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `Name` text,
  `Email` varchar(255) UNIQUE,
  `Password` text,
  `createdAt` datetime DEFAULT (now()),
  `UpdatedAt` datetime DEFAULT (now()),
  `Profile_Picture` VARCHAR(150) DEFAULT 'abc.png',
  `isAdmin` boolean DEFAULT false,
  `JWT`           VARCHAR(300) NOT NULL,
  `Handle`          VARCHAR(300) NOT NULL
);

CREATE TABLE IF NOT EXISTS `shops` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `mall_id` int,
  `shopName` text,
  `owner` int,
  `purpose` text,
  `demand` int,
  `floor` text,
  `Area` text,
  `status` text,
  `createdAt` datetime DEFAULT (now()),
  `UpdatedAt` datetime DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS `advertisements` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `mall_id` int,
  `advertisedBy` int,
  `category` text,
  `instructions` text,
  `link` text,
  `createdAt` datetime DEFAULT (now()),
  `UpdatedAt` datetime DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS `staff` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `mall_id` int,
  `fullName` text,
  `Email` varchar(255) UNIQUE,
  `gender` text,
  `age` int,
  `salary` text,
  `designation` text,
  `createdAt` datetime DEFAULT (now()),
  `UpdatedAt` datetime DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS `parking` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `mall_id` int,
  `carNumber` varchar(255) UNIQUE,
  `fees` text,
  `status` text,
  `ArrivedAt` datetime DEFAULT (now()),
  `Depart` datetime DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS `duty` (
  `id` int,
  `mall_id` int,
  `startTime` datetime,
  `EndTime` datetime,
  `instructions` text,
  `location` text
);

CREATE TABLE IF NOT EXISTS `FoodCourt` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `mall_id` int,
  `Name` text,
  `Email` varchar(255) UNIQUE,
  `Category` varchar(255),
  `Description` varchar(255),
  `createdAt` datetime DEFAULT (now()),
  `UpdatedAt` datetime DEFAULT (now()),
  `Website` text
);

CREATE TABLE IF NOT EXISTS `Cinema` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `mall_id` int,
  `Name` text,
  `Email` varchar(255) UNIQUE,
  `Description` varchar(255),
  `createdAt` datetime DEFAULT (now()),
  `UpdatedAt` datetime DEFAULT (now()),
  `Website` text
);

ALTER TABLE `shops` ADD FOREIGN KEY (`owner`) REFERENCES `Users` (`id`);

ALTER TABLE `advertisements` ADD FOREIGN KEY (`advertisedBy`) REFERENCES `shops` (`id`);

ALTER TABLE `duty` ADD FOREIGN KEY (`id`) REFERENCES `staff` (`id`);

ALTER TABLE `shoppingmall` ADD FOREIGN KEY (`owner`) REFERENCES `Users` (`id`);

ALTER TABLE `shops` ADD FOREIGN KEY (`mall_id`) REFERENCES `shoppingmall` (`id`);

ALTER TABLE `advertisements` ADD FOREIGN KEY (`mall_id`) REFERENCES `shoppingmall` (`id`);

ALTER TABLE `staff` ADD FOREIGN KEY (`mall_id`) REFERENCES `shoppingmall` (`id`);

ALTER TABLE `parking` ADD FOREIGN KEY (`mall_id`) REFERENCES `shoppingmall` (`id`);

ALTER TABLE `duty` ADD FOREIGN KEY (`mall_id`) REFERENCES `shoppingmall` (`id`);

ALTER TABLE `FoodCourt` ADD FOREIGN KEY (`mall_id`) REFERENCES `shoppingmall` (`id`);

ALTER TABLE `Cinema` ADD FOREIGN KEY (`mall_id`) REFERENCES `shoppingmall` (`id`);
