-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 01-Jan-2021 às 20:40
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
-- Estrutura da tabela `cadastrolojaprestador`
--

DROP TABLE IF EXISTS `cadastrolojaprestador`;
CREATE TABLE IF NOT EXISTS `cadastrolojaprestador` (
  `idcadastrolojaprestador` int(11) NOT NULL AUTO_INCREMENT,
  `nome_fantasia` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `cpf_cnpj` varchar(18) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `cep` varchar(10) NOT NULL,
  `data_nascimento` date NOT NULL,
  `logradouro` varchar(150) NOT NULL,
  `numero` varchar(5) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `estado` char(2) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `senha` char(32) NOT NULL,
  `pontuacao` int(11) NOT NULL,
  `atividades` int(3) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `descricao_loja` varchar(500) DEFAULT NULL,
  `criacao_cadastro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcadastrolojaprestador`),
  UNIQUE KEY `cpf_cnpj_UNIQUE` (`cpf_cnpj`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cadastrolojaprestador`
--

INSERT INTO `cadastrolojaprestador` (`idcadastrolojaprestador`, `nome_fantasia`, `nome`, `sobrenome`, `cpf_cnpj`, `telefone`, `email`, `cep`, `data_nascimento`, `logradouro`, `numero`, `bairro`, `estado`, `cidade`, `senha`, `pontuacao`, `atividades`, `imagem`, `descricao_loja`, `criacao_cadastro`) VALUES
(1, 'FavelaTem', 'Enzo', 'Soares', '11111111111', '11911111111', 'enzo@mail.com', '01001011', '2001-01-01', 'Rua Teste', '12', 'Bairro X', 'SP', 'São Paulo', '123456', 0, 0, '', '', '2020-12-30 05:45:09'),
(3, 'FavelaTem', 'Enzo', 'Soares', '11111111113', '11911111111', 'enzo@ymail.com', '01020226', '2000-04-02', 'efggwgwe', '42', 'regsweg', 'SP', 'SãoPaulo', '123456', 0, 0, NULL, NULL, '2020-12-30 05:46:27'),
(21, 'FavelaTem', 'Enzo', 'Soares', '111111122', '11911111111', 'enzo@65al.com', '01001011', '2001-01-01', 'Rua Teste', '12', 'Bairro X', 'SP', 'São Paulo', '123456', 0, 0, '', '', '2020-12-31 16:22:18'),
(27, 'FavelaTem', 'Enzo', 'Soares', '1111111258', '11911111111', 'enzo@65a,l.com', '01001011', '2001-01-01', 'Rua Teste', '12', 'Bairro X', 'SP', 'São Paulo', '123456', 0, 0, '', '', '2020-12-31 16:24:51'),
(32, 'FavelaTem', 'Enzo', 'Soares', '1111111259', '11911111111', 'enzo@6a,l.com', '01001011', '2001-01-01', 'Rua Teste', '12', 'Bairro X', 'SP', 'São Paulo', '123456', 0, 0, NULL, '', '2020-12-31 16:26:37'),
(39, 'FavelaTem', 'Enzo', 'Soares', '111111125', '11911111111', 'enzo@6al.com', '01001011', '2001-01-01', 'Rua Teste', '12', 'Bairro X', 'SP', 'São Paulo', '123456', 0, 0, '', '', '2020-12-31 16:27:39'),
(43, 'FavelaTem', 'Enzo', 'Soares', '11111112', '11911111111', 'enzo@6al.co', '01001011', '2001-01-01', 'Rua Teste', '12', 'Bairro X', 'SP', 'São Paulo', '123456', 0, 0, '', '', '2020-12-31 16:28:04');

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias_servico`
--

DROP TABLE IF EXISTS `categorias_servico`;
CREATE TABLE IF NOT EXISTS `categorias_servico` (
  `idcategorias_servico` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) NOT NULL,
  `fk_servico` int(11) NOT NULL,
  PRIMARY KEY (`idcategorias_servico`),
  KEY `fk_servico_categoria_idx` (`fk_servico`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

--
-- Extraindo dados da tabela `portfolio`
--

INSERT INTO `portfolio` (`idportfolio`, `imagem`, `descricao`, `fk_lojaprestador`) VALUES
(1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png', 'teste1', 1),
(2, 'https://ipecon.com.br/web/wp-content/uploads/2016/05/3.jpg', 'teste3', 3),
(3, 'https://img.freepik.com/fotos-gratis/numero-21_2227-900.jpg?size=626&ext=jpg', 'teste21', 21),
(4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgw9JpZktnim9SvSbZ-Uc7oU_Ubncf_Ds9aw&usqp=CAU', 'Teste21', 21);

-- --------------------------------------------------------

--
-- Estrutura da tabela `respostas_padrao`
--

DROP TABLE IF EXISTS `respostas_padrao`;
CREATE TABLE IF NOT EXISTS `respostas_padrao` (
  `idrespostas_padrao` int(11) NOT NULL,
  `fk_pergunta` int(11) NOT NULL,
  `veracidade` tinyint(4) NOT NULL,
  `resposta` varchar(500) NOT NULL,
  PRIMARY KEY (`idrespostas_padrao`),
  KEY `fk_pergunta_respostapadrao_idx` (`fk_pergunta`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `respostas_usuarios`
--

DROP TABLE IF EXISTS `respostas_usuarios`;
CREATE TABLE IF NOT EXISTS `respostas_usuarios` (
  `idrespostas` int(11) NOT NULL AUTO_INCREMENT,
  `fk_usuario` int(11) NOT NULL,
  `resposta_usuario` int(11) NOT NULL,
  PRIMARY KEY (`idrespostas`),
  KEY `fk_prestador_resposta_idx` (`fk_usuario`),
  KEY `fk_resposta_respostapadrao_idx` (`resposta_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `servicos`
--

DROP TABLE IF EXISTS `servicos`;
CREATE TABLE IF NOT EXISTS `servicos` (
  `idservicos` int(11) NOT NULL AUTO_INCREMENT,
  `fk_lojaprestador` int(11) NOT NULL,
  `nome_servico` varchar(45) NOT NULL,
  `descricao_servico` varchar(500) NOT NULL,
  `atendimento_domicilio` tinyint(4) NOT NULL,
  `atendimento_local` tinyint(4) NOT NULL,
  `pagamento_dinheiro` tinyint(4) NOT NULL,
  `pagamento_cartao` tinyint(4) NOT NULL,
  `inicio_atendimento` tinyint(4) NOT NULL,
  `fim_atendimento` tinyint(4) NOT NULL,
  `imagem_servico` varchar(255) NOT NULL,
  PRIMARY KEY (`idservicos`),
  KEY `fk_servico_prestador_idx` (`fk_lojaprestador`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `categorias_servico`
--
ALTER TABLE `categorias_servico`
  ADD CONSTRAINT `fk_servico_categoria` FOREIGN KEY (`fk_servico`) REFERENCES `servicos` (`idservicos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `perguntas`
--
ALTER TABLE `perguntas`
  ADD CONSTRAINT `fk_pergunta_curso` FOREIGN KEY (`fk_curso`) REFERENCES `cursos` (`idcursos`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `portfolio`
--
ALTER TABLE `portfolio`
  ADD CONSTRAINT `fk_portfolio_prestador` FOREIGN KEY (`fk_lojaprestador`) REFERENCES `cadastrolojaprestador` (`idcadastrolojaprestador`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `respostas_padrao`
--
ALTER TABLE `respostas_padrao`
  ADD CONSTRAINT `fk_pergunta_respostapadrao` FOREIGN KEY (`fk_pergunta`) REFERENCES `perguntas` (`idperguntas`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `respostas_usuarios`
--
ALTER TABLE `respostas_usuarios`
  ADD CONSTRAINT `fk_prestador_resposta` FOREIGN KEY (`fk_usuario`) REFERENCES `cadastrolojaprestador` (`idcadastrolojaprestador`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_resposta_respostapadrao` FOREIGN KEY (`resposta_usuario`) REFERENCES `respostas_padrao` (`idrespostas_padrao`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `servicos`
--
ALTER TABLE `servicos`
  ADD CONSTRAINT `fk_servico_prestador` FOREIGN KEY (`fk_lojaprestador`) REFERENCES `cadastrolojaprestador` (`idcadastrolojaprestador`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
