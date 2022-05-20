👍🏽✔🟢concluído
<!--👉🏽🛠⚠ em construção
✋🏽❌⛔parado
👍🏽✔🟢concluído-->
# PROJETO CRIANDO README

Neste Projeto criei um Readme explicando tudo oque aprendi nesta semana na Labenu , as aulas foram sobre terminal, git, github e markdown. 

## 🚀 Começando

### TERMINAL E INTERFACE GRÁFICA

O Terminal é a tela preta onde inserimos comandos/instruções para executar tarefas no computador sem utilizar a interface gráfica.

A interface grafica ou GUI(Graphical User Interface (*Interface Gráfica* do Usuário)) é um conceito da forma de interação entre o usuário do computador e um programa por meio de uma tela ou representação gráfica, visual, com desenhos, imagens, etc.

#### GITBASH

o Bash vem de "Bourne Again Shell"

**Shells:** são aplicativos terminais usados como interface em sistemas operacionais por meio de comandos gravados.

**Git:** é composto por utilitários de linha de comando inicialmente para rodar em sistemas **Unix**, como Linux e Mac. O **Windows**, por sua vez, por não ser um sistema baseado em Unix, possui um padrão diferente de comandos no terminal, o que tornaria a compatibilidade com o **Git** mais limitada.

**Git Bash:** é uma aplicação Windows que emula um terminal Unix, oferecendo o mesmo conjunto de comandos, de forma a tornar a integração com o **Git** mais completa.

**Unix:** primeiro sistema a introduzir conceitos muito importantes para SOs como suporte a multiusuários, multitarefas e portabilidade.

##### Comandos

gret /| ==para pesquisar mais de um termo verificar oque é e ou ou

**code .** abre o visual studio code

**cd** acessa uma pasta que quer

**mkdir** cria um diretorio

**touch** cria um arquivo

**ls** mostra oque tem na pasta (-l exibe em lista -la exibe até os itens ocultos)

**../** volta uma pasta 

**gret** pesquisa termo em um arquivo

**gret * ou gret -r** pesquisa termo em um diretório

**gret | ou gret/** pesquisa algo contendo condições como e/ou

**rm remove arquivo**

**rmdir remove diretório (porem ele tem que estar vazio)**

**cat abrir o arquivo**

**pwd escreve o caminho do diretorio atual**

**history lista os comandos já executados**

**clear limpa a tela do terminal**

**date** mostara a data atual

**time** mostra a hora atual 

⬆️ trás o ultimo comando que enviou ao terminal

**cp c**opiar arquivo

**mv** mover arquivo

**cal** tras um calendário

**uptime** exibe a quanto tempo você não desliga o computador

para pedir ajuda sobre algum comando escreva o comando e digite **-h** ou **—help**

### GIT/GITHUB

#### GIT

É uma ferramenta de versionamento de código ,ele facilita a colaboração e a identificação das versões do código , assim como faz o controle de alterações (quem alterou quando alterou).

Outras ferramentas similares ao Git é o TFS(Team Fundation Server)

**Branch:** são ramificações , nós temos as principal e outras paralelas que se fundem a principal, são criadas branchs paralelas para ajustar o código , atualizar , complementar ou fazer qualquer tipo de modificação.

**git flow** É uma estratégia para melhorar a organização das branchs dentro de um projeto, portanto neste cenário temos as seguintes branchs:

*main:* principal

*release:* é a ramificação que vai pegar um conjunto de atualizações em develop e subir para main.

*Develop:* ramificação de integração para recursos(features).

*Feature:* é uma ramificação filha de develop ,ou seja ,ela deve fazer o merge com a develop antes de subir para main.

*HotFix:* é uma ramificação de manutenção, para corrigir um software que esta em produção.

Para iniciar o git flow basta colocar o git flow init no repo do terminal ele ira criar 2 branchs a main e a develop para criar as demais branchs temos que usar comandos específicos .

**git Trunk-based:** É o desenvolvimento baseado em tronco, pequenas alterações feitas no tronco(na branch principal), não é utilizada a organização como o git flow mas é muito utilizada em DevOps e/ou em equipes ageis pelo conceito de CI/CD(Integração Continua/Entrega Continua) .

#### GITHUB

Serviço cloud que permite armazenar os projetos usando a ferramenta GIT.

Outras ferramentas similares ao Github são o Bitbucket e Gitlab.

**PR(Pull Request):** permitem que você informe outras pessoas sobre as alterações das quais você fez push para um branch em um repositório no **GitHub.**
**CR(Code Review)**: revisão de código no Github

**commits semânticos:** forma de padronização de commits dentro do projeto utilizando regras simples. Com essa padronização, é possível reduzir tempo gasto para entender algo no código( quando, onde e porque foi feito).

mensagens de commit semanticas : 

- [**feat]** são quaisquer adições ao código. Enquanto elas podem alterar parte do código já existente, o foco dela é a implementação de features novas ao ecossistema.
- [**fix]** refere-se às correções de bugs. Caso seu time trabalhe com issues ou com Jira, é possível com smart commits associar seu commit a uma issue e alterar seu estado com keywords como resolve, fix, solves. Em geral, essas marcações devem vir na descrição ou no footer.
- [**refactor]** refere-se a quaisquer mudanças que atinjam o código, porém não alterem sua funcionalidade. Alterou o formato de como é processamento em determinada parte da sua tela, mas manteve a mesma funcionalidade? Declare como refactor.
- [**Style]** Alterações referentes a formatações de código, semicolons, trailing spaces e lint.
- [**Bump]**  incrementar o número da versão do programa para um valor novo e exclusivo
- [**Feature]** são funcionalidades ou recursos desenvolvidos por um time de pessoas, geralmente de produtos e plataformas digitais que tem como propósito adicionar uma nova entrega de valor e experiência para seus usuários.
- [**Configure]** adicionando uma nova configuração

# COMANDOS GIT

**git init** para iniciar um repositório localmente

**git clone *URL*** para clonar um repositório remoto

**git add *pasta/arquivo*** para adicionar as alterações no git as alterações realizadas (git add . = para trazer todas as alterações, o ponto quer dizer que a a pasta local)

**git commit -m *“nome do commit”*** para comitar 

**git push origin main** para subir no github as alterações realisadas 

**git status** indica o status da minha aplicação oque foi alterado oque precisa ser comitado

**git remote add origin *URL*** para conectar o repositório local com o repositório remoto.

**git branch -M main** para trocar o nome da branch master para main (mudando de mestre para principal)

**git branch *nomeBranch*** cria uma nova branch

**git branch -m *“novo-nome”***aqui eu estou trocando o nome de uma branch

**git checkout -b nome-da-branck** para criar uma nova branch e ir para ela 

**git checkout nome-da-branch** para ir para outra branch

**:q!** ou **shift +Z+Z** ou **ctrl+C** se der erro para dar um quit, ou parar de executar 

**git log** parar visualizar meus commits , quem fez e a data

**git pull origin nome-da-branch** serve para puxar as atualizações da brach

**git log —graph** para mostrar as branchs e quais as linhas(branchs) estão sendo criadas 

**git config —global “nomeUsuario”** para definir um nome de usuario

**git config —global xxx@example.com** para definir um email de usuario

**git remote -v** Liste todos os repositórios remotos atualmente configurados:

**git branch -d <branchname>** Exclui a ramificação do recurso.

**git push origin nomeBranch** Envie todas as ramificações para seu repositório remoto

**git push —all origin** Exclua uma ramificação em seu repositório remoto.

**git push origin: nomeBranch** Exclua todas as ramificações para seu repositório remoto

**git diff** Veja todos os conflitos de mesclagem:

**git diff —base<filename>**Veja os conflitos em relação ao arquivo base:

**git diff <sourcebranch>**Visualizar alterações antes de mesclar

**git reset --hard HEAD~** o ponteiro HEAD será movido para o commit anterior e as áreas de stage e working serão revertidas para o mesmo estado do commit apontado pelo HEAD.

o ponteiro HEAD será movido para o commit anterior ao atual, a área de stage terá o mesmo conteúdo do commit apontado pelo HEAD e o diretório de working não será modificado.

**git reset HEAD~/ git reset --mixed HEAD~** o ponteiro HEAD será movido para o commit anterior ao atual, a área de stage terá o mesmo conteúdo do commit apontado pelo HEAD e o diretório de working não será modificado.

**git reset --hard HEAD~** o ponteiro HEAD será movido para o commit anterior e as áreas de stage e working serão revertidas para o mesmo estado do commit apontado pelo HEAD.

**git cherry-pick** permite ao usuário selecionar commits específicos para trazer ao branch desejado.




## 📸 Imagens/Videos do Projeto

Criei as pastas module-1 e todas as pastas e arquivos que nela estão usando o terminal e as subi e fiz o controle de versionamento usando o git e o github, também criei este readme usando markdown.
<img src="https://user-images.githubusercontent.com/90638175/169558407-282bdcb6-8f63-433c-a7e3-374f1c45dd25.gif"/>

## 🖇️ Colaborando

Sinta-se a vontade em colaborar com meu projeto.

## 📌 Versão

Versão 1.0;

## 🎁 Expressões de gratidão

* Obrigada @Labenu e instrutores @Lbngui e @Annasammi 📢🤓.

---
🤝🏽inspirado no readme do @lohhans