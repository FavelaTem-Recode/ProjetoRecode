-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 19-Jan-2021 às 03:22
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
  `senha` char(32) NOT NULL,
  `criacao_cadastro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cadastrobasico`
--

INSERT INTO `cadastrobasico` (`iduser`, `nome`, `sobrenome`, `email`, `senha`, `criacao_cadastro`) VALUES
(2, 'enzo', 'choque', 'enzo@superchoque.com', '25f9e794323b453885f5181f1b624d0b', '2021-01-18 21:04:29'),
(3, 'Bola', 'de Fogo', 'enzo@boladefogo.com', '25f9e794323b453885f5181f1b624d0b', '2021-01-18 22:08:52');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cadastrolojaprestador`
--

INSERT INTO `cadastrolojaprestador` (`idcadastrolojaprestador`, `fk_cadastro`, `nome_fantasia`, `telefone`, `cep`, `logradouro`, `numero`, `bairro`, `estado`, `cidade`, `pontuacao`, `atividades`, `imagem`, `descricao_loja`) VALUES
(2, 2, 'Super Choque, O Eletricista', '11955443323', '0607556', 'Rua do Raio', '125', 'Paraisópolis', 'SP', 'SP', 0, 0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwcpv4qkRw3LMWn4tKb6IC4kxsh2uzOvO9Q&usqp=CAU', 'Faço instalações elétricas residenciais, prediais e industriais, seguindo a NBR 5410 e utilizando os melhores materiais disponíveis.'),
(3, 3, 'Bola de Fogo, O Bombeiro', '11955221144', '01234550', 'Rua do Posto', '1002', 'Paraisópolis', 'SP', 'SP', 0, 0, 'https://upload.wikimedia.org/wikipedia/en/1/15/Hotstreak.jpg', 'Estou de prontidão para apagar qualquer incêndio.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias_servico`
--

DROP TABLE IF EXISTS `categorias_servico`;
CREATE TABLE IF NOT EXISTS `categorias_servico` (
  `idcategorias_servico` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) NOT NULL,
  PRIMARY KEY (`idcategorias_servico`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `categorias_servico`
--

INSERT INTO `categorias_servico` (`idcategorias_servico`, `categoria`) VALUES
(4, 'Arte, Papelaria e Armarinho'),
(5, 'Assistência Técnica'),
(6, 'Beleza'),
(7, 'Serviços gerais'),
(8, 'Alimentação'),
(9, 'Moda'),
(10, 'Saúde e Bem-estar'),
(11, 'Outros');

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `contato`
--

DROP TABLE IF EXISTS `contato`;
CREATE TABLE IF NOT EXISTS `contato` (
  `id_comentario` int(11) NOT NULL AUTO_INCREMENT,
  `email_contato` varchar(29) CHARACTER SET utf8mb4 DEFAULT NULL,
  `nome` varchar(100) CHARACTER SET utf8mb4 DEFAULT NULL,
  `msg` varchar(300) CHARACTER SET utf8mb4 DEFAULT NULL,
  `data` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_comentario`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `contato`
--

INSERT INTO `contato` (`id_comentario`, `email_contato`, `nome`, `msg`, `data`) VALUES
(1, 'danielacapassi83@gmail.com', 'Daniela', 'Teste da página de contato', '2021-01-17 10:44:41'),
(2, 'daniela@daniela.com', 'Daniela', 'Testando página de contatos', '2021-01-17 13:07:42'),
(3, 'daniela@daniela.com', 'Daniela', 'Testando página de contatos', '2021-01-17 13:14:38'),
(4, 'maisum@dani.com', 'Daniela', 'Testando página de contatos', '2021-01-17 13:14:59'),
(5, 'maisum@dani.com', 'Daniela', 'Testando página de contatos', '2021-01-17 13:29:39'),
(6, 'emailteste@dani.com', 'Daniiiiiiiiiiiiiiii', 'Testando página de contatos de novooooo', '2021-01-17 22:03:33'),
(7, 'outroemail@dani.com', 'Daniiiiiiiiiiiiiiii', 'Testando página de contatos de novooooo', '2021-01-17 22:13:11'),
(8, 'mail@dani.com', 'Daniiiiiiiiiiiiiiii', 'Testando página de contatos de novooooo', '2021-01-17 22:29:04'),
(9, 'danielacapassi83@gmail.com', 'Daniela Capassi Moreira', 'vvvvvmmmmmmmmmmmmmmmmmmmmmmm', '2021-01-17 22:40:27');

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
  `conteudo` text NOT NULL,
  `pegunta` varchar(255) NOT NULL,
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
  `descricao` varchar(255) DEFAULT NULL,
  `fk_lojaprestador` int(11) NOT NULL,
  PRIMARY KEY (`idportfolio`),
  KEY `fk_portfolio_prestador_idx` (`fk_lojaprestador`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `respostas_padrao`
--

DROP TABLE IF EXISTS `respostas_padrao`;
CREATE TABLE IF NOT EXISTS `respostas_padrao` (
  `idrespostas_padrao` int(11) NOT NULL AUTO_INCREMENT,
  `fk_pergunta` int(11) NOT NULL,
  `veracidade` tinyint(1) NOT NULL,
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
  `fk_pergunta` int(11) NOT NULL,
  PRIMARY KEY (`fk_usuario`,`fk_pergunta`),
  UNIQUE KEY `idrespostas_UNIQUE` (`idrespostas`),
  KEY `fk_prestador_resposta_idx` (`fk_usuario`),
  KEY `fk_resposta_usuario_idx` (`resposta_usuario`),
  KEY `fk_pergunta_resposta_idx` (`fk_pergunta`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `servicos`
--

DROP TABLE IF EXISTS `servicos`;
CREATE TABLE IF NOT EXISTS `servicos` (
  `idservicos` int(11) NOT NULL AUTO_INCREMENT,
  `fk_lojaprestador` int(11) NOT NULL,
  `fk_subcategoria` int(11) NOT NULL,
  `descricao_servico` varchar(255) NOT NULL,
  `atendimento_domicilio` tinyint(1) NOT NULL,
  `atendimento_local` tinyint(1) NOT NULL,
  `pagamento_dinheiro` tinyint(1) NOT NULL,
  `pagamento_cartao` tinyint(1) NOT NULL,
  `inicio_atendimento` time NOT NULL,
  `fim_atendimento` time NOT NULL,
  `imagem_servico` varchar(255) NOT NULL,
  PRIMARY KEY (`idservicos`),
  KEY `fk_servico_prestador_idx` (`fk_lojaprestador`),
  KEY `fk_servico_subcategoria_idx` (`fk_subcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `servicos`
--

INSERT INTO `servicos` (`idservicos`, `fk_lojaprestador`, `fk_subcategoria`, `descricao_servico`, `atendimento_domicilio`, `atendimento_local`, `pagamento_dinheiro`, `pagamento_cartao`, `inicio_atendimento`, `fim_atendimento`, `imagem_servico`) VALUES
(1, 2, 24, 'Instalação de DR para evitar choques', 1, 0, 1, 1, '07:00:00', '22:00:00', 'https://www.sabereletrica.com.br/wp-content/uploads/2015/08/Disjuntor-DR.jpg?ssl=1'),
(2, 3, 41, 'Apago qualquer tipo de incêndio', 1, 0, 1, 1, '00:00:00', '00:00:00', 'https://i1.wp.com/gestaodesegurancaprivada.com.br/wp-content/uploads/CORPO-DE-BOMBEIRO-MILITAR.jpg?fit=650%2C350&ssl=1');

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
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `subcategorias`
--

INSERT INTO `subcategorias` (`idsubcategorias`, `nome_subcategoria`, `fk_categoria`) VALUES
(8, 'Artesanato', 4),
(9, 'Fotografia', 4),
(10, 'Música', 4),
(11, 'Eletrodomésticos', 5),
(12, 'Eletrônicos', 5),
(13, 'Informática', 5),
(14, 'Barbeiro', 6),
(15, 'Cabeleireira', 6),
(16, 'Depilação', 6),
(17, 'Limpeza de Pele', 6),
(18, 'Maquiagem', 6),
(19, 'Manicure', 6),
(20, 'Pedicure', 6),
(21, 'Sobrancelha', 6),
(22, 'Tranças', 6),
(23, 'Consultoria', 7),
(24, 'Reformas e Reparos', 7),
(25, 'Serviços Automotivos', 7),
(26, 'Serviços de Limpeza', 7),
(27, 'Entrega/Carreto', 7),
(28, 'Cuidador', 7),
(29, 'Doces', 8),
(30, 'Salgados', 8),
(31, 'Refeições', 8),
(32, 'Corte e Costura', 9),
(33, 'Moda Feminina', 9),
(34, 'Moda Masculina', 9),
(35, 'Moda Plus Size', 9),
(36, 'Sapateiro', 9),
(37, 'Personal Trainer', 10),
(38, 'Podólogo', 10),
(39, 'Fisioterapeuta', 10),
(40, 'Massoterapeuta', 10),
(41, 'Outros', 11);

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
