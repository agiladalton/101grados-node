CREATE DATABASE  IF NOT EXISTS `101gradosdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `101gradosdb`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 159.89.190.172    Database: 101gradosdb
-- ------------------------------------------------------
-- Server version	5.5.65-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mb_actor`
--

DROP TABLE IF EXISTS `mb_actor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mb_actor` (
  `id_actor` int(11) NOT NULL AUTO_INCREMENT,
  `edad` int(11) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_actor`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mb_actor`
--

LOCK TABLES `mb_actor` WRITE;
/*!40000 ALTER TABLE `mb_actor` DISABLE KEYS */;
INSERT INTO `mb_actor` VALUES (1,28,'https://ams3.digitaloceanspaces.com/gazelook/3daac3c6-f010-4fe6-b931-1e35e6f6bc90.jpeg','DALTON'),(2,24,'https://ams3.digitaloceanspaces.com/gazelook/aecd735d-6569-497a-afb9-5f2b3167f700.jpeg','PEDRO'),(3,24,'https://ams3.digitaloceanspaces.com/gazelook/0d9c1e52-c59b-4bfd-af9b-893b362e9637.jpeg','ROBERTO'),(4,25,'https://ams3.digitaloceanspaces.com/gazelook/bcf48ce5-ebe9-4e01-bb5d-6eeb7aeea241.jpeg','EFESTO'),(5,12,'https://ams3.digitaloceanspaces.com/gazelook/d1e1c838-0013-4f28-9472-4d05f0d495cd.jpeg','MONIC'),(6,24,'https://ams3.digitaloceanspaces.com/gazelook/bf7b7ba4-08ec-420f-92ce-f01757c5f7d8.jpeg','ANGEL'),(7,25,'https://ams3.digitaloceanspaces.com/gazelook/e1a617e0-b5c6-42a7-8e9c-0cd2607245a9.png','LUIS 1'),(8,22,'https://ams3.digitaloceanspaces.com/gazelook/7c62f302-fbcd-4af8-8ce6-1f6373c02bbf.jpeg','NUEVO');
/*!40000 ALTER TABLE `mb_actor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mb_pelicula`
--

DROP TABLE IF EXISTS `mb_pelicula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mb_pelicula` (
  `id_pelicula` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `genero` varchar(45) NOT NULL,
  `sinopsis` varchar(500) NOT NULL,
  `duracion` int(11) NOT NULL,
  `lista_actor` varchar(255) NOT NULL,
  PRIMARY KEY (`id_pelicula`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mb_pelicula`
--

LOCK TABLES `mb_pelicula` WRITE;
/*!40000 ALTER TABLE `mb_pelicula` DISABLE KEYS */;
INSERT INTO `mb_pelicula` VALUES (1,'EL UNICO','4','ES UNA PELICULA MUY BUENA, EN LO PERSONAL ME GUSTO',65,'[8,7,4]'),(2,'RAMBO 1','3','ES UNA OBRA DE ARTE, MUY BUENA. PARA TODO PUBLICO.',16,'[8,7,4]');
/*!40000 ALTER TABLE `mb_pelicula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database '101gradosdb'
--

--
-- Dumping routines for database '101gradosdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-30  9:54:36
