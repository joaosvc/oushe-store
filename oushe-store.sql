-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15-Dez-2022 às 01:39
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `oushe-store`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `token` varchar(100) NOT NULL,
  `secure` bigint(20) NOT NULL,
  `creation` datetime NOT NULL,
  `profile` varchar(20) NOT NULL DEFAULT 'default'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `email`, `password`, `token`, `secure`, `creation`, `profile`) VALUES
(2, 'João Pedro', 'D\' Monkey', 'joaosvc.dev@gmail.com', '$2y$10$1sLZrCwDjSPVMfgfc8A.a.cQsWi/q8m1Qg2s8HmbzkW30Jcd1mTKW', '88d8348748e311ff471b9145072ace48fcc12d6b', 10150582063, '2022-10-25 14:13:23', 'user-2.png'),
(3, 'Celio', 'San', 'celioshuts@gmail.com', '$2y$10$N5jsvzgvx/m9fuDLAcl6eOkheL0UJoqDq8x6N8sTAJKj7OD4YVEbW', 'df12ce55fa3215303f7419eb080436375f7f8b04', 82021556584, '2022-10-31 14:10:47', 'user-3.jpeg'),
(4, 'LUIZ ELOI', 'PAULO', 'LOVEROCHA@GMAIL.COM', '$2y$10$gWt/xzkYx27hG66oeoiuJ.bdEUqc0WcV19TB7YTJxlXFK.vCs14g.', '603980d968145d2adf0a3a5f8d23c31e9be11f5c', 52775674663, '2022-12-01 14:11:24', 'user-4.jpeg'),
(5, 'beatriz', 'sousa', 'beatriz@gmail.com', '$2y$10$wmqBmrXx51gmD4nzvq70v.wZdiuIZraX4YkcnGRqyK4jMUMZ0/dOi', '53250baf950e0aeedc479584530086a53cba94f9', 95070945242, '2022-12-01 14:14:30', 'default'),
(6, 'SPINDA', 'DE SOUSA', 'SPINDA.SOUSA@ALUNO.ESCOLAJAIMEALENCAR.COM.BR', '$2y$10$DantLO.5Tlq6NYmhOSB/HuUhxQpkahfuzrLO5EzxnCo3B3NoAcqAW', '19173f02a872dcaf98bfd3a86dfa1e07e1582f86', 59199093775, '2022-12-01 14:16:27', 'user-6.jpeg'),
(7, 'Vinimiro', 'D\" Monkey', 'vinimiro@gmail.com', '$2y$10$TUyqrKiUf1kenzVmIOEo7OaqcZ3Z1YVJceouNbkqfcIVgLaR0DFAy', '76cf2bc03c316b726b18a0145fa8d493c5ede994', 87809667864, '2022-12-09 03:32:06', 'user-7.png');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
