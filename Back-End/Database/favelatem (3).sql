-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18-Jan-2021 às 02:45
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

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

CREATE TABLE `cadastrobasico` (
  `iduser` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` char(32) NOT NULL,
  `criacao_cadastro` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastrolojaprestador`
--

CREATE TABLE `cadastrolojaprestador` (
  `idcadastrolojaprestador` int(11) NOT NULL,
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
  `criacao_cadastro` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cadastrolojaprestador`
--

INSERT INTO `cadastrolojaprestador` (`idcadastrolojaprestador`, `nome_fantasia`, `nome`, `sobrenome`, `cpf_cnpj`, `telefone`, `email`, `cep`, `data_nascimento`, `logradouro`, `numero`, `bairro`, `estado`, `cidade`, `senha`, `pontuacao`, `atividades`, `imagem`, `descricao_loja`, `criacao_cadastro`) VALUES
(1, 'FavelaTem', 'Enzo', 'Soares', '11111111111', '11911111111', 'enzo@mail.com', '01001011', '2001-01-01', 'Rua Teste', '12', 'Bairro X', 'SP', 'São Paulo', '123456', 0, 0, '', '', '2020-12-30 05:45:09'),
(2, 'FavelaTem', 'Enzo', 'Soares', '11111112222', '11911111111', 'enzo@gmail.com', '01001011', '2001-01-01', 'Rua Teste', '12', 'Bairro X', 'SP', 'São Paulo', '123456', 0, 0, '', '', '2020-12-30 05:45:09'),
(3, 'FavelaTem', 'Enzo', 'Soares', '11111111113', '11911111111', 'enzo@ymail.com', '01020226', '2000-04-02', 'efggwgwe', '42', 'regsweg', 'SP', 'SãoPaulo', '123456', 0, 0, NULL, NULL, '2020-12-30 05:46:27');

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias_servico`
--

CREATE TABLE `categorias_servico` (
  `idcategorias_servico` int(11) NOT NULL,
  `categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `categorias_servico`
--

INSERT INTO `categorias_servico` (`idcategorias_servico`, `categoria`) VALUES
(1, 'Arte'),
(2, 'Assistência Tecnica'),
(3, 'Beleza'),
(4, 'Consultoria'),
(5, 'Alimentação'),
(6, 'Moda'),
(7, 'Reformas e Reparos '),
(8, 'Saúde e Bem estar'),
(9, 'Serviços Automotivos'),
(10, 'Serviços Gerais'),
(11, 'Outros');

-- --------------------------------------------------------

--
-- Estrutura da tabela `contato`
--

CREATE TABLE `contato` (
  `id_comentario` int(11) NOT NULL,
  `email_contato` varchar(29) CHARACTER SET utf8mb4 DEFAULT NULL,
  `nome` varchar(100) CHARACTER SET utf8mb4 DEFAULT NULL,
  `msg` varchar(300) CHARACTER SET utf8mb4 DEFAULT NULL,
  `data` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

CREATE TABLE `cursos` (
  `idcursos` int(11) NOT NULL,
  `nome_curso` varchar(100) NOT NULL,
  `pontuacao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `perguntas`
--

CREATE TABLE `perguntas` (
  `idperguntas` int(11) NOT NULL,
  `fk_curso` int(11) NOT NULL,
  `conteudo` varchar(2000) NOT NULL,
  `pegunta` varchar(500) NOT NULL,
  `valor_pontos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `portfolio`
--

CREATE TABLE `portfolio` (
  `idportfolio` int(11) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `descricao` varchar(500) DEFAULT NULL,
  `fk_lojaprestador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `respostas_padrao`
--

CREATE TABLE `respostas_padrao` (
  `idrespostas_padrao` int(11) NOT NULL,
  `fk_pergunta` int(11) NOT NULL,
  `veracidade` tinyint(4) NOT NULL,
  `resposta` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `respostas_usuarios`
--

CREATE TABLE `respostas_usuarios` (
  `idrespostas` int(11) NOT NULL,
  `fk_usuario` int(11) NOT NULL,
  `resposta_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `servicos`
--

CREATE TABLE `servicos` (
  `idservicos` int(11) NOT NULL,
  `fk_lojaprestador` int(11) NOT NULL,
  `fk_servico` int(11) NOT NULL,
  `descricao_servico` varchar(500) NOT NULL,
  `atendimento_domicilio` tinyint(4) NOT NULL,
  `atendimento_local` tinyint(4) NOT NULL,
  `pagamento_dinheiro` tinyint(4) NOT NULL,
  `pagamento_cartao` tinyint(4) NOT NULL,
  `inicio_atendimento` tinyint(4) NOT NULL,
  `fim_atendimento` tinyint(4) NOT NULL,
  `imagem_servico` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `servicos`
--

INSERT INTO `servicos` (`idservicos`, `fk_lojaprestador`, `fk_servico`, `descricao_servico`, `atendimento_domicilio`, `atendimento_local`, `pagamento_dinheiro`, `pagamento_cartao`, `inicio_atendimento`, `fim_atendimento`, `imagem_servico`) VALUES
(4, 1, 1, 'dog hot', 1, 1, 0, 1, 127, 127, 'update.jpg'),
(5, 1, 1, 'hot dog', 1, 1, 1, 0, 127, 127, '123.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `subcategorias`
--

CREATE TABLE `subcategorias` (
  `idsubcategorias` int(11) NOT NULL,
  `nome_subcategoria` varchar(100) NOT NULL,
  `fk_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `subcategorias`
--

INSERT INTO `subcategorias` (`idsubcategorias`, `nome_subcategoria`, `fk_categoria`) VALUES
(1, 'Artesanato', 1),
(2, 'Fotografia', 1),
(3, 'Música', 1),
(4, 'Pintura', 1),
(5, 'Eletrodomésticos', 2),
(6, 'Eletrônicos', 2),
(7, 'Informática', 2),
(8, 'Telefonia', 2),
(9, 'Alisamento', 3),
(10, 'Barbeiro', 3),
(11, 'Cabeleireira', 3),
(12, 'Depilação', 3),
(13, 'Limpeza de Pele', 3),
(14, 'Maquiagem', 3),
(15, 'Manicure', 3),
(16, 'Pedicure', 3),
(17, 'Sobrancelha', 3),
(18, 'Tintura', 3),
(19, 'Tranças', 3),
(20, 'Advocacia', 4),
(21, 'Contabilidade', 4),
(22, 'Corretor de Imóves', 4),
(23, 'Despachante', 4),
(24, 'Bolos', 5),
(25, 'Doces', 5),
(26, 'Horta Orgânica', 5),
(27, 'Panificação', 5),
(28, 'Salgados', 5),
(29, 'Corte e Costura', 6),
(30, 'Moda Feminina', 6),
(31, 'Moda Infantil', 6),
(32, 'Moda Masculina', 6),
(33, 'Moda Plus Size', 6),
(34, 'Sapateiro', 6),
(35, 'Dedetização', 7),
(36, 'Desentupidor', 7),
(37, 'Eletricista', 7),
(38, 'Encanador', 7),
(39, 'Marceneiro', 7),
(40, 'Pedreiro', 7),
(41, 'Pintor', 7),
(42, 'Serralheiro', 7),
(43, 'Tapeceiro', 7),
(44, 'Vidraceiro', 7),
(45, 'Personal Trainer', 8),
(46, 'Podólogo', 8),
(47, 'Fisioterapeuta', 8),
(48, 'Massoterapeuta', 8),
(49, 'Auto Elétrica', 9),
(50, 'Borracharia', 9),
(51, 'Funilaria', 9),
(52, 'Lava Rapido', 9),
(53, 'Mêcanica', 9),
(54, 'Pintura Automotiva', 9),
(55, 'Chaveiro', 10),
(56, 'Carretos e Mudanças', 10),
(57, 'Cuidador de Crianças', 10),
(58, 'Cuidador de Idosos', 10),
(59, 'Diarista', 10),
(60, 'Gráfica', 10),
(61, 'Marido de Aluguel', 10),
(62, 'Montador de Móveis', 10),
(63, 'Outros', 11);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cadastrobasico`
--
ALTER TABLE `cadastrobasico`
  ADD PRIMARY KEY (`iduser`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Índices para tabela `cadastrolojaprestador`
--
ALTER TABLE `cadastrolojaprestador`
  ADD PRIMARY KEY (`idcadastrolojaprestador`),
  ADD UNIQUE KEY `cpf_cnpj_UNIQUE` (`cpf_cnpj`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Índices para tabela `categorias_servico`
--
ALTER TABLE `categorias_servico`
  ADD PRIMARY KEY (`idcategorias_servico`);

--
-- Índices para tabela `contato`
--
ALTER TABLE `contato`
  ADD PRIMARY KEY (`id_comentario`);

--
-- Índices para tabela `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`idcursos`);

--
-- Índices para tabela `perguntas`
--
ALTER TABLE `perguntas`
  ADD PRIMARY KEY (`idperguntas`),
  ADD KEY `fk_pergunta_curso_idx` (`fk_curso`);

--
-- Índices para tabela `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`idportfolio`),
  ADD KEY `fk_portfolio_prestador_idx` (`fk_lojaprestador`);

--
-- Índices para tabela `respostas_padrao`
--
ALTER TABLE `respostas_padrao`
  ADD PRIMARY KEY (`idrespostas_padrao`),
  ADD KEY `fk_pergunta_respostapadrao_idx` (`fk_pergunta`);

--
-- Índices para tabela `respostas_usuarios`
--
ALTER TABLE `respostas_usuarios`
  ADD PRIMARY KEY (`idrespostas`),
  ADD KEY `fk_prestador_resposta_idx` (`fk_usuario`),
  ADD KEY `fk_resposta_respostapadrao_idx` (`resposta_usuario`);

--
-- Índices para tabela `servicos`
--
ALTER TABLE `servicos`
  ADD PRIMARY KEY (`idservicos`),
  ADD KEY `fk_servico_prestador_idx` (`fk_lojaprestador`),
  ADD KEY `fk_subcategoria` (`fk_servico`);

--
-- Índices para tabela `subcategorias`
--
ALTER TABLE `subcategorias`
  ADD PRIMARY KEY (`idsubcategorias`),
  ADD KEY `fk_categoria` (`fk_categoria`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cadastrobasico`
--
ALTER TABLE `cadastrobasico`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `cadastrolojaprestador`
--
ALTER TABLE `cadastrolojaprestador`
  MODIFY `idcadastrolojaprestador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `categorias_servico`
--
ALTER TABLE `categorias_servico`
  MODIFY `idcategorias_servico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `contato`
--
ALTER TABLE `contato`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `cursos`
--
ALTER TABLE `cursos`
  MODIFY `idcursos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `perguntas`
--
ALTER TABLE `perguntas`
  MODIFY `idperguntas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `idportfolio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `respostas_usuarios`
--
ALTER TABLE `respostas_usuarios`
  MODIFY `idrespostas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `servicos`
--
ALTER TABLE `servicos`
  MODIFY `idservicos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `subcategorias`
--
ALTER TABLE `subcategorias`
  MODIFY `idsubcategorias` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- Restrições para despejos de tabelas
--

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
  ADD CONSTRAINT `fk_servico_prestador` FOREIGN KEY (`fk_lojaprestador`) REFERENCES `cadastrolojaprestador` (`idcadastrolojaprestador`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_subcategoria` FOREIGN KEY (`fk_servico`) REFERENCES `subcategorias` (`idsubcategorias`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `subcategorias`
--
ALTER TABLE `subcategorias`
  ADD CONSTRAINT `fk_categoria` FOREIGN KEY (`fk_categoria`) REFERENCES `categorias_servico` (`idcategorias_servico`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
