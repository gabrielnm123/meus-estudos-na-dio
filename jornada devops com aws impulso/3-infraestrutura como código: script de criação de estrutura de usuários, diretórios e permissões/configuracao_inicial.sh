#!/bin/bash

sudo mkdir /publico /adm /vem /sec
sudo groupadd GRP_ADM
sudo groupadd GRP_VEM
sudo groupadd GRP_SEC
sudo useradd carlos 
sudo useradd maria 
sudo useradd joao 
sudo useradd debora 
sudo useradd sebastiana 
sudo useradd roberto 
sudo useradd josefina 
sudo useradd amanda 
sudo useradd rogerio
sudo usermod -G GRP_ADM carlos 
sudo usermod -G GRP_ADM maria 
sudo usermod -G GRP_ADM joao
sudo usermod -G GRP_VEM debora 
sudo usermod -G GRP_VEM sebastiana 
sudo usermod -G GRP_VEM roberto
sudo usermod -G GRP_SEC josefina 
sudo usermod -G GRP_SEC amanda 
sudo usermod -G GRP_SEC rogerio
sudo chown root:root /publico
sudo chown root:GRP_ADM /adm
sudo chown root:GRP_VEM /vem
sudo chown root:GRP_SEC /sec
sudo chmod 777 /publico
sudo chmod 070 /adm /vem /sec 