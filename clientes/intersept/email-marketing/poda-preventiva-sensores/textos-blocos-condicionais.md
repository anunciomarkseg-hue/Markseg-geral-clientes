# Textos para os blocos condicionais (editor arrastar e soltar)

Use este arquivo se optar por montar a campanha no **editor arrastar e soltar** da Brevo, com o arquivo `email-poda-preventiva-SEM-CONDICIONAIS.html` como base.

Nesse caminho, as variações não ficam no código. Cada uma vira um bloco de texto próprio, com **exibição condicional** configurada na Brevo (bloco **Conteúdo dinâmico**, ou a opção de condição de exibição no painel do bloco).

---

## Grupo 1 · Contexto por praça
**Onde entra:** logo depois do parágrafo "Com a aproximação da temporada de chuvas...".
**Condição:** atributo `CIDADE` igual a

### CIDADE = CURITIBA
Em Curitiba e região, as pancadas de fim de tarde vêm quase sempre acompanhadas de vento, e é nesse momento que a vegetação próxima ao muro se movimenta mais.

### CIDADE = FOZ DO IGUACU
Em Foz do Iguaçu, as rajadas que acompanham as chuvas de verão costumam ser fortes o bastante para movimentar árvores inteiras próximas ao muro.

### CIDADE = JOINVILLE
Em Joinville, a combinação de chuva constante e vegetação de crescimento rápido faz a poda perder efeito em poucas semanas.

### CIDADE = PORTO ALEGRE
Em Porto Alegre, os ventos que chegam com as frentes frias movimentam a vegetação com força suficiente para acionar os sensores externos.

> Sem bloco padrão. Contato sem cidade preenchida simplesmente não vê nenhum destes parágrafos, e o e-mail continua coerente.

---

## Grupo 2 · Orientação por tipo de imóvel
**Onde entra:** no lugar do parágrafo que começa com "Para evitar que o nosso Atendimento Tático seja acionado sem necessidade...".
**Condição:** atributo `TIPO_IMOVEL` igual a

### TIPO_IMOVEL = CONDOMINIO
Para evitar que o nosso Atendimento Tático seja acionado sem necessidade e que a central registre alertas incorretos, vale incluir a poda preventiva na rotina de manutenção do condomínio. Combine com o zelador ou com a empresa de jardinagem uma revisão das plantas que estão no raio de alcance dos sensores, com atenção às divisas e aos fundos do terreno.

### TIPO_IMOVEL = EMPRESA
Para evitar que o nosso Atendimento Tático seja acionado sem necessidade e que a central registre alertas incorretos, inclua a poda preventiva no plano de manutenção predial. Vale orientar a equipe responsável a revisar a vegetação ao longo de todo o perímetro, com atenção ao fundo do terreno, às laterais e às áreas de carga, onde a vegetação costuma passar despercebida.

### TIPO_IMOVEL = RESIDENCIA
Para evitar que o nosso Atendimento Tático seja acionado sem necessidade e que a central registre alertas incorretos, orientamos uma poda preventiva das plantas que estão no raio de alcance dos sensores. É uma manutenção rápida, que costuma se resolver em uma tarde e vale para toda a temporada.

### Bloco padrão (campo vazio ou outro valor)
Para evitar que o nosso Atendimento Tático seja acionado sem necessidade e que a central registre alertas incorretos, orientamos que você realize regularmente a poda preventiva das plantas que estão no raio de alcance dos sensores.

> Este grupo **precisa** do bloco padrão, senão o contato sem `TIPO_IMOVEL` preenchido fica sem a orientação principal do e-mail. Configure o bloco padrão para aparecer quando o campo estiver vazio.

---

## Grupo 3 · Atendimento Tático
**Onde entra:** logo abaixo do checklist.
**Condição:** atributo `ATENDIMENTO_TATICO` verdadeiro (ou igual a `SIM`, se você criou o campo como texto).

### ATENDIMENTO_TATICO = verdadeiro
Como o seu contrato inclui Atendimento Tático, cada disparo gera o deslocamento de uma equipe até o local. Reduzir os alertas falsos mantém a nossa equipe disponível para o que realmente exige presença.

> Sem bloco padrão. Quem não tem o serviço em contrato não deve ver este parágrafo.

---

## Depois de montar

Teste em **Pré-visualizar e testar → Pré-visualizar como um contato**, com pelo menos cinco perfis: condomínio em Curitiba, empresa em Foz, residência em Joinville, um cliente com Atendimento Tático e um contato com todos os campos vazios. Cada perfil deve ver um parágrafo de cidade e um de orientação, nunca dois nem nenhum.
