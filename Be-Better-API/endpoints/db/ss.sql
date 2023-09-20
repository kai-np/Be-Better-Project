-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: bebetter
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activity_log`
--

DROP TABLE IF EXISTS `activity_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity_log` (
  `basicID` int NOT NULL AUTO_INCREMENT,
  `activityID` varchar(250) DEFAULT NULL,
  `userID` varchar(250) NOT NULL,
  `dateAdded` varchar(250) DEFAULT NULL,
  `excerciseType` varchar(250) DEFAULT NULL,
  `excerciseTitle` varchar(250) DEFAULT NULL,
  `timeSpent` varchar(250) DEFAULT NULL,
  `metric` varchar(250) DEFAULT NULL,
  `excerciseDescription` varchar(250) DEFAULT NULL,
  `location` varchar(250) DEFAULT NULL,
  `imageAssetURL` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`basicID`,`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_log`
--

LOCK TABLES `activity_log` WRITE;
/*!40000 ALTER TABLE `activity_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `activity_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_tokens`
--

DROP TABLE IF EXISTS `auth_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_tokens` (
  `basicID` int NOT NULL AUTO_INCREMENT,
  `userID` varchar(45) NOT NULL,
  `authToken` varchar(145) NOT NULL,
  `createdDate` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`basicID`,`userID`,`authToken`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_tokens`
--

LOCK TABLES `auth_tokens` WRITE;
/*!40000 ALTER TABLE `auth_tokens` DISABLE KEYS */;
INSERT INTO `auth_tokens` VALUES (1,'w0RPJ5CErVlQ4ry5CbWV2mf37','md85b6xw4IYtHQFSmm7iS5WwY2oLg7EXjM2pxdki','1691949840000','active'),(2,'icSpV4P6wqmxmvShFsyPXUCxl','n7lG6ysqhxf28sCVUOdtl1tXoYiLceLnJLdCy2LA','1692036763971','active');
/*!40000 ALTER TABLE `auth_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bmi_metrics`
--

DROP TABLE IF EXISTS `bmi_metrics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bmi_metrics` (
  `basicID` int NOT NULL AUTO_INCREMENT,
  `userID` varchar(250) NOT NULL,
  `weight` varchar(250) DEFAULT NULL,
  `height` varchar(250) DEFAULT NULL,
  `bmi` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`basicID`,`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bmi_metrics`
--

LOCK TABLES `bmi_metrics` WRITE;
/*!40000 ALTER TABLE `bmi_metrics` DISABLE KEYS */;
/*!40000 ALTER TABLE `bmi_metrics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenge_templates`
--

DROP TABLE IF EXISTS `challenge_templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `challenge_templates` (
  `basicID` int NOT NULL AUTO_INCREMENT,
  `challengeName` varchar(250) DEFAULT NULL,
  `challengeType` varchar(250) DEFAULT NULL,
  `challengeTemplateID` varchar(250) NOT NULL,
  `challengeRules` longtext,
  `challengeStatus` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`basicID`,`challengeTemplateID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge_templates`
--

LOCK TABLES `challenge_templates` WRITE;
/*!40000 ALTER TABLE `challenge_templates` DISABLE KEYS */;
INSERT INTO `challenge_templates` VALUES (1,'Test','societal','DADSA525234234234','[]','active');
/*!40000 ALTER TABLE `challenge_templates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gratitude_journals`
--

DROP TABLE IF EXISTS `gratitude_journals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gratitude_journals` (
  `basicID` int NOT NULL AUTO_INCREMENT,
  `userID` varchar(250) NOT NULL,
  `gratitudeEntryID` varchar(250) NOT NULL,
  `dateAdded` varchar(250) DEFAULT NULL,
  `textEntries` longtext,
  `emotion` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`basicID`,`userID`,`gratitudeEntryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gratitude_journals`
--

LOCK TABLES `gratitude_journals` WRITE;
/*!40000 ALTER TABLE `gratitude_journals` DISABLE KEYS */;
/*!40000 ALTER TABLE `gratitude_journals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `journals`
--

DROP TABLE IF EXISTS `journals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `journals` (
  `basicID` int NOT NULL AUTO_INCREMENT,
  `userID` varchar(250) NOT NULL,
  `journalEntryID` varchar(250) NOT NULL,
  `dateAdded` varchar(250) DEFAULT NULL,
  `journalType` varchar(250) DEFAULT NULL,
  `journalTitle` varchar(250) DEFAULT NULL,
  `journalBody` longtext,
  `journalColour` varchar(250) DEFAULT NULL,
  `journalPublicShareKey` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`basicID`,`userID`,`journalEntryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `journals`
--

LOCK TABLES `journals` WRITE;
/*!40000 ALTER TABLE `journals` DISABLE KEYS */;
/*!40000 ALTER TABLE `journals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_challenges`
--

DROP TABLE IF EXISTS `user_challenges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_challenges` (
  `basicID` int NOT NULL AUTO_INCREMENT,
  `userID` varchar(250) NOT NULL,
  `challengeTemplateID` varchar(250) DEFAULT NULL,
  `challengeID` varchar(250) NOT NULL,
  `challengeInstanceID` varchar(250) DEFAULT NULL,
  `challengeFrequency` varchar(250) DEFAULT NULL,
  `startDate` varchar(250) DEFAULT NULL,
  `challengeStatus` varchar(250) DEFAULT NULL,
  `completedCount` varchar(250) DEFAULT NULL,
  `failedCount` varchar(250) DEFAULT NULL,
  `sharedChallenge` varchar(250) DEFAULT NULL,
  `challengeOwnerUserID` varchar(250) DEFAULT NULL,
  `challengeType` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`basicID`,`userID`,`challengeID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_challenges`
--

LOCK TABLES `user_challenges` WRITE;
/*!40000 ALTER TABLE `user_challenges` DISABLE KEYS */;
INSERT INTO `user_challenges` VALUES (1,'icSpV4P6wqmxmvShFsyPXUCxl','DADSA525234234234','R6LEKwCoAOjH','7OjhwpRSjoQm4sf','daily','1692404160756','active','0','0','true','icSpV4P6wqmxmvShFsyPXUCxl','environmental');
/*!40000 ALTER TABLE `user_challenges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_goals`
--

DROP TABLE IF EXISTS `user_goals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_goals` (
  `basicID` int NOT NULL AUTO_INCREMENT,
  `userID` varchar(45) NOT NULL,
  `goalTitle` varchar(45) DEFAULT NULL,
  `goalFrequency` varchar(45) DEFAULT NULL,
  `goalType` varchar(45) DEFAULT NULL,
  `goalDescription` varchar(250) DEFAULT NULL,
  `goalStatus` varchar(250) DEFAULT NULL,
  `dateAdded` varchar(250) DEFAULT NULL,
  `statCompletedCount` varchar(250) DEFAULT NULL,
  `statFailedCount` varchar(250) DEFAULT NULL,
  `goalID` varchar(250) NOT NULL,
  PRIMARY KEY (`basicID`,`userID`,`goalID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_goals`
--

LOCK TABLES `user_goals` WRITE;
/*!40000 ALTER TABLE `user_goals` DISABLE KEYS */;
INSERT INTO `user_goals` VALUES (1,'icSpV4P6wqmxmvShFsyPXUCxl',NULL,NULL,NULL,NULL,'in-progress','1692406254594','0','0','t7o4WOgeAdfj5gQ8rFvd'),(2,'icSpV4P6wqmxmvShFsyPXUCxl','X xxx xl','daily','societal','lamao...','in-progress','1692406435366','0','0','drKjabOyO9WTuxtP3eCv');
/*!40000 ALTER TABLE `user_goals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userfriends`
--

DROP TABLE IF EXISTS `userfriends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userfriends` (
  `basicID` int NOT NULL AUTO_INCREMENT,
  `userID` varchar(250) NOT NULL,
  `friendID` varchar(250) NOT NULL,
  `friendStatus` varchar(250) DEFAULT NULL,
  `dateAdded` varchar(250) DEFAULT NULL,
  `friendToken` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`basicID`,`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userfriends`
--

LOCK TABLES `userfriends` WRITE;
/*!40000 ALTER TABLE `userfriends` DISABLE KEYS */;
INSERT INTO `userfriends` VALUES (1,'w0RPJ5CErVlQ4ry5CbWV2mf37','w0RPJ5CErVlQ4ry5CbWV2mf37','active','tues','dad'),(2,'icSpV4P6wqmxmvShFsyPXUCxl','MiHSDzHayxGO2LY2t8PVcVZ2R','removed','1692379057169','z9PfW292TdGy94Yn7sWu');
/*!40000 ALTER TABLE `userfriends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userinfo`
--

DROP TABLE IF EXISTS `userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userinfo` (
  `basicID` int NOT NULL AUTO_INCREMENT,
  `userID` varchar(250) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `emailVerified` varchar(250) DEFAULT NULL,
  `publicAssetID` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `profilePhotoURL` varchar(250) DEFAULT NULL,
  `publicQuote` varchar(250) DEFAULT NULL,
  `authToken` varchar(250) DEFAULT NULL,
  `completeChallengeStats` varchar(250) DEFAULT NULL,
  `publicLinkKey` varchar(250) DEFAULT NULL,
  `friendToken` varchar(250) DEFAULT NULL,
  `friendCode` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`basicID`,`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES (1,'KALMLoAFeOvj2Bce53obf3bIy','test','test','test','test','test','test','test','test','test','test','test','test'),(2,'8DJ1fZXAJrj3on3Px7Beaz0q1','test','test','test','test','test','test','test','test','test','test','test','test'),(3,'W7C15v9rKddlaxPTQNxJJudC7','test','test','test','test','test','test','test','test','test','test','test','test'),(4,'booa7XIWUhe448QyceKjjDXhJ',NULL,NULL,'true','ACOWmgh9Z1qoVFOgmlteBzISp',NULL,'','','kq1aicdrAGLRVuqG8a0R1MPEkSwagw','','wz1AsWsStOImr4w','A6CTdOxDAxx8yfiBymFI','4qMNxy'),(5,'MiHSDzHayxGO2LY2t8PVcVZ2R','BigMan','test@test.com','true','Vfo6muZVdETkPxtls6MVwAQ4f','$2b$12$Q9FKMCD1MOBmFQykIxxNxeRWsonBPIT0pkNtH3WnPXQofaTdOUlZ6','','','rvVMBrUuAx4DYxvLDN7TNekJxIZ9t5','','uL9hLUsSVdcUBjr','z9PfW292TdGy94Yn7sWu','jbqm0l'),(6,'w0RPJ5CErVlQ4ry5CbWV2mf37','BigMan','testa@test.com','true','xYy9WqLcXxHZvxQ06hLoOjezm','$2b$12$dsW42zJrCyparNtIYNHlVu0/2L5HRQWNpCl6wug749eEMMYaP3WTy','','','J8MfcvGEGWY6tUuzHJUReaeRcXRmbl','','4IS8jQIGQvSVEr3','c424EyZXEranefZSbV2v','aa3qTQ'),(7,'icSpV4P6wqmxmvShFsyPXUCxl','dylan','tesaf@2.com','true','yMp2VhzU0gPzr3ughwtCnOG19','$2b$12$Do6kWVf.QEQTWzsmrmlevOcFqiIFfSedG/qBBtfri7V6sWFCABHIq','','','8WJUqtTvtPsVn7ktth5tcIHaCv8law','','XAKPfN61R1UT1N0','3nbgpB7pZLqkLOT9wpej','yLBlWP');
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-13 12:08:32
