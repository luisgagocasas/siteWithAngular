-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:3306
-- Tiempo de generación: 22-11-2016 a las 22:28:22
-- Versión del servidor: 5.6.34
-- Versión de PHP: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `adiahost_mundicar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_principal`
--

CREATE TABLE IF NOT EXISTS `categorias_principal` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET latin1 NOT NULL,
  `descripcion` text CHARACTER SET latin1 NOT NULL,
  `activo` int(1) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `categorias_principal`
--

INSERT INTO `categorias_principal` (`cid`, `nombre`, `descripcion`, `activo`) VALUES
(1, 'Accesorios de Automóviles', '', 1),
(2, 'Autopartes', '', 1),
(3, 'Clasicos', '', 1),
(4, 'Camionetas', '', 1),
(5, 'Maquinarias', '', 1),
(6, 'Automóviles', '', 1),
(7, 'Productos Médicos', '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_secundaria`
--

CREATE TABLE IF NOT EXISTS `categorias_secundaria` (
  `csid` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `nombre` varchar(100) CHARACTER SET latin1 NOT NULL,
  `descripcion` text CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`csid`),
  KEY `csid` (`csid`),
  KEY `csid_2` (`csid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `categorias_secundaria`
--

INSERT INTO `categorias_secundaria` (`csid`, `cid`, `nombre`, `descripcion`) VALUES
(1, 1, 'Auto y Camioneta', ''),
(2, 1, 'Aros y Llantas', ''),
(3, 1, 'Audio para Autos', ''),
(4, 1, 'GPS', '');

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
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`pid`, `cod`, `mrc`, `modelo`, `anio`, `motor`, `combustible`, `km`, `color`, `volante`, `trans`, `strans`, `cap`, `tdmotor`, `precio`, `condicion`, `airea`, `lunase`, `equipor`, `sonroof`, `asiento`, `baire`, `foto1`, `foto2`, `foto3`, `foto4`, `freg`, `obs`) VALUES
(1, '1234', 'Toyota', '123123', '2016', 'ultimo', 'petrolero', '0', 'Verde', 'redondo', 'automatica', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(2, '4084', 'audio', 'Z', '1990', 'ALDFJA', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(3, '5456465', 'AUDI', 'Corolla', '2012', '1.6', 'DFALS', '5000', 'Negro', 'volante lala', '', '', '', 'asdlf', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(4, 'das', 'sda', 'dsasd', 'dsa', 'dssad', 'dsa', 'dsa', 'dsa', 'dsadsa', 'dsads', '', 'dsa', 'dsasad', 'sdasd', 'dsa', 'sdasda', 'dsa', 'dsadsdsa', 'asdadsa', 'dsasad', 'dsa', 'sdadas', 'dsasda', 'sdadsa', 'sadsda', 'sdasdasda', 'dsasda');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
