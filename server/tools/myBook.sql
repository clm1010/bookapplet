/*
 Navicat MySQL Data Transfer

 Source Server         : clm
 Source Server Type    : MySQL
 Source Server Version : 50722
 Source Host           : localhost:3306
 Source Schema         : mybook

 Target Server Type    : MySQL
 Target Server Version : 50722
 File Encoding         : 65001

 Date: 22/07/2018 21:41:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for csessioninfo
-- ----------------------------
DROP TABLE IF EXISTS `csessioninfo`;
CREATE TABLE `csessioninfo`  (
  `open_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `skey` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_visit_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `session_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_info` varchar(2048) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`open_id`) USING BTREE,
  INDEX `openid`(`open_id`) USING BTREE,
  INDEX `skey`(`skey`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '会话管理用户信息' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
