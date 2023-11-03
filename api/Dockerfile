# Use a imagem oficial do Node.js 18 LTS como base
FROM node:18

# Diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos necessários para o diretório de trabalho
COPY package*.json ./
COPY . .

# Instala as dependências
RUN npm install

# Expõe a porta onde a aplicação será executada
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "app.js"]