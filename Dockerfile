FROM node:20

ARG ENV
ARG APP
ARG PORT=8574

ENV PORT=$PORT
ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# 프로덕션 빌드
RUN npm run build

# 8574 포트 노출
EXPOSE 8574

# 프로덕션 환경으로 실행
CMD ["npm", "start"]

