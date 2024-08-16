FROM node:16
RUN git clone https://github.com/RCD-MD/RCD-MD-V1 /root/RCD-MD-V1
WORKDIR /root/RCD-MD-V1
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#FULL BOT 
