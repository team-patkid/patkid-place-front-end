FROM node:20

ARG ENV
ARG APP
ARG PORT

ENV PORT=$PORT

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# 8️⃣ 실행 환경 설정
CMD ["npm", "run", "dev"]

