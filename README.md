# Fliperama Retrô

Página local para jogar clássicos no navegador: catálogo com **29.369 jogos** de **18 plataformas** (Arcade, MS-DOS, Mega Drive, Super Nintendo, Atari 2600/5200/7800, TurboGrafx-16, ColecoVision, WonderSwan e mais), player do Internet Archive, aba de **Nintendo DS** com arquivo próprio e **sala online com código** para jogar junto.

Não é preciso instalar nada. Basta abrir no navegador (Chrome, Edge ou Firefox atualizados) e ter internet para o acervo.

## Recursos

- **Acervo**: 29.369 jogos emulados na hora pelo Internet Archive, com capa, busca, filtro por plataforma, ordenação e favoritos.
- **Super Nintendo**: 211 títulos jogáveis direto na página.
- **Nintendo DS**: você escolhe o seu arquivo `.nds`; o jogo roda no navegador com EmulatorJS e fica guardado apenas nele (IndexedDB).
- **Sala online**: o anfitrião abre o jogo do próprio arquivo, recebe um **código de 6 caracteres** e transmite a tela para até 3 amigos, que controlam pelo teclado (estilo "Remote Play", conexão ponto a ponto).

## Como abrir

1. **Windows**: dê dois cliques em `Abrir Fliperama.cmd`.
2. Ou abra o arquivo `index.html` no navegador.
3. Opcional — servidor local (facilita testes e evita bloqueios de `file://`):
   ```
   npx serve .
   ```
   ou
   ```
   python -m http.server 8000
   ```
   e acesse `http://localhost:8000`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (pode ser público).
2. Envie o projeto (veja os comandos abaixo ou use o GitHub Desktop / "Add file → Upload files").
3. No repositório, abra **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**, branch **main** e pasta **/(root)**. Salve.
5. Em alguns instantes o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

Comandos para enviar pela primeira vez:

```bash
git init -b main
git add .
git commit -m "Site Fliperama Retrô"
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

Observações:

- O `index.html` precisa continuar na raiz do repositório (é o arquivo que o Pages abre).
- O `jogos-data.js` tem cerca de 2 MB — dentro do limite do GitHub.
- O acervo continua dependendo de internet: os jogos são transmitidos pelo Internet Archive.

## Sala online

1. Abra a aba **Sala online**.
2. **Anfitrião**: "Escolher jogo e criar sala" → selecione o arquivo do jogo → espere abrir → copie o código de 6 caracteres.
3. **Convidado**: informe o código e clique em **Entrar**; depois clique na tela para o teclado valer.
4. Para 2 jogadores ao mesmo tempo, mapeie o **jogador 2** no menu de controles do emulador (engrenagem) para teclas que o convidado vai usar.

Detalhes:

- A imagem e o som saem do PC do anfitrião direto para os convidados (WebRTC). Nada é gravado nem enviado a servidores de jogo; o código é só o endereço da sala (PeerJS).
- O convidado **não precisa** do arquivo do jogo; apenas o anfitrião.
- Jogos do acervo (Internet Archive) **não** entram em sala — eles rodam dentro do site do Archive.
- Em redes muito restritas a conexão direta pode falhar; nesse caso use Radmin VPN ou ZeroTier entre os participantes.

## Controles

- **Arcade**: setas, `Ctrl`/`Alt` para os botões e `Espaço` para inserir ficha.
- **Consoles**: setas + `Z`/`X` (e `A`/`S` para os outros botões); `Enter` costuma ser Start.
- **MS-DOS**: mouse e teclado (clique na tela para capturar o mouse).
- **Nintendo DS**: mouse/toque na tela de baixo; setas, `Z`/`X`, `A`/`S`, `Enter` (Start), `Shift` (Select).

## Estrutura

```
index.html          # o site (interface, busca, abas, player e sala online)
jogos-data.js       # catálogo gerado a partir de metadados do Internet Archive
Abrir Fliperama.cmd # atalho do Windows para abrir o site
```

## Aviso legal

Este projeto **não hospeda nem distribui jogos**. O acervo apenas incorpora o player público do Internet Archive, que é quem emula e transmite os títulos. As abas **Nintendo DS** e **Sala online** executam somente arquivos fornecidos pelo próprio usuário, localmente no navegador — nada é enviado ou armazenado em servidor. Não inclua arquivos de jogos (ROMs) neste repositório.

O código está disponível para uso pessoal; não há licença definida. Se quiser abrir o projeto, adicione uma licença (por exemplo, MIT).
