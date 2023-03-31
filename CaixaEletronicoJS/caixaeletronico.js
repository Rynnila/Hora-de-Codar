const nome = prompt("Insira seu nome: ");
alert(`Olá ${nome} é um prazer ter você por aqui!`);
var saldo = 100.5; //Float
var senha = parseInt(3589);
		function inicio() {
			var escolha = parseInt(prompt('Selecione uma opção\n1. Saldo\n2. Extrato\n3. Saque\n4. Depósito\n5. Transferência\n6. Sair'));
            switch (escolha){
                case 1:
                    ver_saldo();
                    break;
                case 2:
                    ver_extrato();
                    break;
                case 3:
                    fazer_saque();
                    break;
                case 4:
                    fazer_deposito();
                    break;
				case 5:
					fazer_transferencia();
					break;
				case 6:
					sair();
					break;
                default:
                    erro();
                    break;
            }
		}		
		
		function validar_senha(){
			var validar_senha= prompt("Insira sua senha: ");
			while(validar_senha != senha){
				var validar_senha= prompt("Senha incorreta, insira sua senha novamente: ");
			}
		}
		function ver_saldo() {
			validar_senha();
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}

		function ver_extrato() {
			validar_senha();
			const timeElapsed = Date.now();
			const today = new Date(timeElapsed);
			//extrato com compras e depósitos fictícios, mas que pega a hora e data atuais do sistema
			alert(`------ DEMONSTRATIVO DE OPERAÇÃO ------ \nBANCO ALINNY ------ ${today.toLocaleDateString()} - ${today.getHours()}:${today.getMinutes()}\n\n\nExtrato N.${Math.floor(Math.random() * 65536)}\n\nEXTRATO DA CONTA CORRENTE - ${Math.floor(Math.random()*10000)}\nNOME: ${nome.toUpperCase()}\n\nDATA    DESCRIÇÃO                         VALOR(R$)\n----------------------------------------------------\n06/03   PGT. FORNECEDOR ${Math.floor(Math.random()*1000000)}    250,00-\n10/03   SQ. EXTERNO ${Math.floor(Math.random()*1000000)}              100,00-\n15/03   TAR. BANCÁRIA ${Math.floor(Math.random()*1000000)}            50,00-\n28/03   TED. CLIENTE ${Math.floor(Math.random()*1000000)}              500,00+\n28/03   PGT. FORNECEDOR ${Math.floor(Math.random()*1000000)}     350,00-\n\nSALDO ATUAL                                    R$${saldo}`);
			inicio();
		}
		
		function fazer_transferencia(){
			validar_senha();
			var transfere = parseFloat(prompt('Qual o valor para transferir?'));
			if (isNaN(transfere) || transfere === '') {
				alert('Por favor, informe um número:');
				fazer_transferencia();
			} else if(transfere==0 || transfere<0){
                alert("Operação não autorizada.");
                fazer_transferencia();
            }else if (transfere>saldo){
                alert("Operação não autorizada.");
                fazer_transferencia();
            } else{	
				saldo -= transfere;
				ver_saldo();
			}
		}

		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			// Not a Number
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número:');
				fazer_deposito();
			} else if(deposito<=0){
				alert("Operação não autorizada.");
				fazer_deposito();
			} else {
				saldo += deposito;
				ver_saldo();
			}
		}

		function fazer_saque() {
			validar_senha();
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número:');
				fazer_saque();
			} else if(saque<=0){
                alert("Operação não autorizada.");
                fazer_saque();
            }else if (saque>saldo){
                alert("Operação não autorizada.");
                fazer_saque();
            } else{	
				saldo -= saque;
				ver_saldo();
			}
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 6');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(`${nome}, foi um prazer ter você por aqui!`);
				window.close();
			} else {
				inicio();
			}
		}

		
		
		inicio();