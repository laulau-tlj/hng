FROM debian:9

RUN apt-get update -yq \
  && apt-get install curl gnupg -yq \
  && curl -sL https://deb.nodesource.com/setup_15.x | bash \
  && apt-get install nodejs -yq \
  && apt-get clean -y

COPY . /app
ADD . /app/
WORKDIR /app
RUN npm install expo-cli@latest

EXPOSE 3000

CMD ["npm", "start"]