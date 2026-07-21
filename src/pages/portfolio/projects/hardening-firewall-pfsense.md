---
layout:  /src/layouts/ProjectLayout.astro
title: 'Hardening de Firewall y Segmentación de Red'
pubDate: 2026-01-20
description: 'Endurecimiento de un firewall pfSense con controles CIS, segmentación de red en 4 zonas, CrowdSec como IPS y monitoreo con Zabbix + Grafana.'
team: 'Blue Team'
category: 'Hardening y Segmentación'
languages: ["linux", "windows", "docker", "grafana"]
image:
  url: "/images/projects/hardening-pfsense-cover.webp"
  alt: "Dashboard de CrowdSec mostrando el mapa de origen de los ataques detectados."
--- 

**Hardening de Firewall y Segmentación de Red** es un proyecto integral que simula una red corporativa segmentada, aplicando controles de endurecimiento del marco **CIS Controls** sobre un firewall **pfSense** y monitoreo activo de toda la infraestructura.

## 🧩 Arquitectura implementada

Topología con **pfSense** como gateway central y 4 interfaces de red, cada una conectada a un segmento aislado:

| Segmento | Red | Rol |
|---|---|---|
| WAN | 192.168.8.0/24 | Salida a internet |
| LAN – TI | 192.168.90.0/24 | Equipo de TI |
| RRHH | 192.168.100.0/24 | Recursos Humanos |
| WebServer | 192.168.200.0/24 | Servicios web internos |

Todo el tráfico entre segmentos pasa obligatoriamente por pfSense, aplicando reglas de **permiso explícito** seguidas de una regla final de **denegación total (Deny All)**.

## 🔐 Controles de hardening aplicados

Se aplicaron **11 controles del CIS Benchmark** sobre pfSense 2.8.1, incluyendo activación de logging por regla, banners de advertencia legal, y políticas de segmentación granular por departamento (por ejemplo: TI accede a Grafana y Zabbix, RRHH solo accede al portal web).

## 🛡️ CrowdSec como sistema de prevención de intrusos

- Despliegue de **CrowdSec** con colecciones y parsers activos para detección de amenazas
- Conexión entre pfSense y el servidor Ubuntu registrados como máquinas protegidas
- Simulación de ataque real contra la infraestructura y generación de alertas automáticas
- Visualización del origen geográfico de los ataques y aplicación de decisiones de bloqueo automático

![Mapa de origen de ataques detectados y bloqueados por CrowdSec](/images/projects/hardening-pfsense-1.webp)

## 📊 Monitoreo unificado

Se implementó **Zabbix 7.4** junto con **Grafana** para monitorear todas las máquinas virtuales del entorno (TI, RRHH y WebServer), con agentes instalados en cada host y dashboards centralizados para visibilidad en tiempo real.

![Dashboard de monitoreo mostrando el estado de los hosts supervisados](/images/projects/hardening-pfsense-2.webp)

## 🐳 Portal web en contenedor

El portal web de RRHH se desplegó en un contenedor **Docker** con **Nginx**, verificando el cumplimiento de las políticas de segmentación mediante pruebas de `ping`, `traceroute` y bloqueos simulados.

## 💡 Tecnologías utilizadas

- pfSense 2.8.1
- CIS Controls / NIST Framework
- CrowdSec (IPS)
- Zabbix 7.4 + Grafana
- Docker + Nginx
- VMware Workstation

## 🎯 Objetivo

Implementar y endurecer un firewall pfSense aplicando buenas prácticas del marco CIS Controls y NIST, configurando políticas de segmentación y control de acceso granular entre distintas áreas de una organización simulada.

🚀 *Desarrollado por Eduardo Vásquez (Líder Técnico) junto a Yareth Cabuyales (Administradora de TI) — Materia: Técnicas de Seguridad Informática.*
