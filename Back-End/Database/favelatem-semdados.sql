-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 08-Jan-2021 às 06:19
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `favelatem`
--
CREATE DATABASE IF NOT EXISTS `favelatem` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `favelatem`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastrobasico`
--

DROP TABLE IF EXISTS `cadastrobasico`;
CREATE TABLE IF NOT EXISTS `cadastrobasico` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `data_nascimento` date NOT NULL,
  `senha` char(32) NOT NULL,
  `criacao_cadastro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastrolojaprestador`
--

DROP TABLE IF EXISTS `cadastrolojaprestador`;
CREATE TABLE IF NOT EXISTS `cadastrolojaprestador` (
  `idcadastrolojaprestador` int(11) NOT NULL AUTO_INCREMENT,
  `fk_cadastro` int(11) NOT NULL,
  `nome_fantasia` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `cep` varchar(10) NOT NULL,
  `logradouro` varchar(150) NOT NULL,
  `numero` varchar(5) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `estado` char(2) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `pontuacao` int(11) NOT NULL,
  `atividades` int(3) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `descricao_loja` text,
  PRIMARY KEY (`idcadastrolojaprestador`),
  UNIQUE KEY `fk_cadastro_UNIQUE` (`fk_cadastro`),
  KEY `fk_cadastro_prestador_idx` (`fk_cadastro`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias_servico`
--

DROP TABLE IF EXISTS `categorias_servico`;
CREATE TABLE IF NOT EXISTS `categorias_servico` (
  `idcategorias_servico` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) NOT NULL,
  PRIMARY KEY (`idcategorias_servico`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE IF NOT EXISTS `comentarios` (
  `idcomentario` int(11) NOT NULL AUTO_INCREMENT,
  `comentario` varchar(255) NOT NULL,
  `fk_user` int(11) NOT NULL,
  `fk_loja` int(11) NOT NULL,
  `criacao_comment` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcomentario`),
  KEY `fk_comment_loja_idx` (`fk_loja`),
  KEY `fk_comment_user_idx` (`fk_user`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cursos`
--

DROP TABLE IF EXISTS `cursos`;
CREATE TABLE IF NOT EXISTS `cursos` (
  `idcursos` int(11) NOT NULL AUTO_INCREMENT,
  `nome_curso` varchar(100) NOT NULL,
  `pontuacao` int(11) NOT NULL,
  PRIMARY KEY (`idcursos`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cursos`
--

INSERT INTO `cursos` (`idcursos`, `nome_curso`, `pontuacao`) VALUES
(1, 'Curso A', 1000),
(2, 'Curso B', 10000);

-- --------------------------------------------------------

--
-- Estrutura da tabela `perguntas`
--

DROP TABLE IF EXISTS `perguntas`;
CREATE TABLE IF NOT EXISTS `perguntas` (
  `idperguntas` int(11) NOT NULL AUTO_INCREMENT,
  `fk_curso` int(11) NOT NULL,
  `conteudo` varchar(2000) NOT NULL,
  `pegunta` varchar(500) NOT NULL,
  `valor_pontos` int(11) NOT NULL,
  PRIMARY KEY (`idperguntas`),
  KEY `fk_pergunta_curso_idx` (`fk_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `portfolio`
--

DROP TABLE IF EXISTS `portfolio`;
CREATE TABLE IF NOT EXISTS `portfolio` (
  `idportfolio` int(11) NOT NULL AUTO_INCREMENT,
  `imagem` varchar(255) NOT NULL,
  `descricao` varchar(500) DEFAULT NULL,
  `fk_lojaprestador` int(11) NOT NULL,
  PRIMARY KEY (`idportfolio`),
  KEY `fk_portfolio_prestador_idx` (`fk_lojaprestador`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `respostas_padrao`
--

DROP TABLE IF EXISTS `respostas_padrao`;
CREATE TABLE IF NOT EXISTS `respostas_padrao` (
  `idrespostas_padrao` int(11) NOT NULL AUTO_INCREMENT,
  `fk_pergunta` int(11) NOT NULL,
  `veracidade` tinyint(4) NOT NULL,
  `resposta` varchar(500) NOT NULL,
  PRIMARY KEY (`idrespostas_padrao`),
  KEY `fk_pergunta_respostapadrao_idx` (`fk_pergunta`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `respostas_usuarios`
--

DROP TABLE IF EXISTS `respostas_usuarios`;
CREATE TABLE IF NOT EXISTS `respostas_usuarios` (
  `idrespostas` int(11) NOT NULL AUTO_INCREMENT,
  `fk_usuario` int(11) NOT NULL,
  `resposta_usuario` int(11) NOT NULL,
  `fk_pergunta` int(11) NOT NULL,
  PRIMARY KEY (`fk_usuario`,`fk_pergunta`),
  UNIQUE KEY `idrespostas_UNIQUE` (`idrespostas`),
  KEY `fk_prestador_resposta_idx` (`fk_usuario`),
  KEY `fk_resposta_usuario_idx` (`resposta_usuario`),
  KEY `fk_pergunta_resposta_idx` (`fk_pergunta`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `servicos`
--

DROP TABLE IF EXISTS `servicos`;
CREATE TABLE IF NOT EXISTS `servicos` (
  `idservicos` int(11) NOT NULL AUTO_INCREMENT,
  `fk_lojaprestador` int(11) NOT NULL,
  `fk_subcategoria` int(11) NOT NULL,
  `descricao_servico` varchar(500) NOT NULL,
  `atendimento_domicilio` tinyint(4) NOT NULL,
  `atendimento_local` tinyint(4) NOT NULL,
  `pagamento_dinheiro` tinyint(4) NOT NULL,
  `pagamento_cartao` tinyint(4) NOT NULL,
  `inicio_atendimento` time NOT NULL,
  `fim_atendimento` time NOT NULL,
  `imagem_servico` varchar(255) NOT NULL,
  PRIMARY KEY (`idservicos`),
  KEY `fk_servico_prestador_idx` (`fk_lojaprestador`),
  KEY `fk_servico_subcategoria_idx` (`fk_subcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `subcategorias`
--

DROP TABLE IF EXISTS `subcategorias`;
CREATE TABLE IF NOT EXISTS `subcategorias` (
  `idsubcategorias` int(11) NOT NULL AUTO_INCREMENT,
  `nome_subcategoria` varchar(100) NOT NULL,
  `fk_categoria` int(11) NOT NULL,
  PRIMARY KEY (`idsubcategorias`),
  KEY `fk_categoria_idx` (`fk_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `cadastrolojaprestador`
--
ALTER TABLE `cadastrolojaprestador`
  ADD CONSTRAINT `fk_cadastro_prestador` FOREIGN KEY (`fk_cadastro`) REFERENCES `cadastrobasico` (`iduser`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `fk_comment_loja` FOREIGN KEY (`fk_loja`) REFERENCES `cadastrolojaprestador` (`idcadastrolojaprestador`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_comment_user` FOREIGN KEY (`fk_user`) REFERENCES `cadastrobasico` (`iduser`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `perguntas`
--
ALTER TABLE `perguntas`
  ADD CONSTRAINT `fk_pergunta_curso` FOREIGN KEY (`fk_curso`) REFERENCES `cursos` (`idcursos`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `portfolio`
--
ALTER TABLE `portfolio`
  ADD CONSTRAINT `fk_portfolio_prestador` FOREIGN KEY (`fk_lojaprestador`) REFERENCES `cadastrolojaprestador` (`idcadastrolojaprestador`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `respostas_padrao`
--
ALTER TABLE `respostas_padrao`
  ADD CONSTRAINT `fk_pergunta_respostapadrao` FOREIGN KEY (`fk_pergunta`) REFERENCES `perguntas` (`idperguntas`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `respostas_usuarios`
--
ALTER TABLE `respostas_usuarios`
  ADD CONSTRAINT `fk_pergunta_resposta` FOREIGN KEY (`fk_pergunta`) REFERENCES `perguntas` (`idperguntas`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_resposta_prestador` FOREIGN KEY (`fk_usuario`) REFERENCES `cadastrolojaprestador` (`idcadastrolojaprestador`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_resposta_resppadrao` FOREIGN KEY (`resposta_usuario`) REFERENCES `respostas_padrao` (`idrespostas_padrao`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `servicos`
--
ALTER TABLE `servicos`
  ADD CONSTRAINT `fk_servico_prestador` FOREIGN KEY (`fk_lojaprestador`) REFERENCES `cadastrolojaprestador` (`idcadastrolojaprestador`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_servico_subcategoria` FOREIGN KEY (`fk_subcategoria`) REFERENCES `subcategorias` (`idsubcategorias`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `subcategorias`
--
ALTER TABLE `subcategorias`
  ADD CONSTRAINT `fk_categoria` FOREIGN KEY (`fk_categoria`) REFERENCES `categorias_servico` (`idcategorias_servico`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
