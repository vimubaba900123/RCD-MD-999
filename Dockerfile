FROM node:16
RUN git clone https://github.com/RCD-MD-MAIN/RCD-MD /root/RCD-MD-MAIN
WORKDIR /root/RCD-MD-MAIN
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#FULL BOT 
