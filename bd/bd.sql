-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 21-11-2016 a las 23:43:47
-- Versión del servidor: 5.5.53-0ubuntu0.14.04.1
-- Versión de PHP: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `test_api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE IF NOT EXISTS `publicaciones` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `cod` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `mrc` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `modelo` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `anio` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `motor` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `combustible` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `km` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `color` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `volante` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `trans` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `strans` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `cap` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `tdmotor` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `precio` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `condicion` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `airea` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `lunase` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `equipor` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `sonroof` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `asiento` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `baire` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `foto1` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `foto2` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `foto3` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `foto4` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `freg` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `obs` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
