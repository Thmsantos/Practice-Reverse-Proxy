# Nginx Gateway Use Case
Este repositório demonstra um caso de uso prático do Nginx como gateway e proxy reverso em uma arquitetura com múltiplas aplicações.
O projeto é composto por duas aplicações independentes (`app_um` e `app_dois`), cada uma com frontend e backend próprios, orquestradas via Docker e expostas através de um único ponto de entrada utilizando Nginx.

## O que o Nginx faz neste projeto
* Atua como proxy reverso, encaminhando requisições para serviços internos
* Funciona como gateway, centralizando o acesso
* Realiza roteamento por subdomínio ou path
* Direciona requisições para diferentes containers e portas internas

## Estrutura do Projeto
```
├── app_um/              # Primeira aplicação (frontend + backend)
├── app_dois/            # Segunda aplicação (frontend + backend)
├── nginx/               # Configuração do Nginx (gateway)
├── docker-compose.yml   # Orquestração dos serviços
```

## Tecnologias Utilizadas
* Docker
* Docker Compose
* Nginx
* Node.js
* React com Vite

## Como rodar o projeto
### Pré-requisitos
Certifique-se de ter instalado:
* Docker
* Docker Compose

### Passos
1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd ngnix_use_case
```

2. Suba os containers:
```bash
docker-compose up --build
```

3. Acesse no navegador:
* http://app1.localhost:70
* http://app2.localhost:70

## Objetivo
Este projeto tem como objetivo demonstrar:
* Como expor múltiplos serviços através de uma única porta
* Como configurar o Nginx para roteamento
* Como estruturar uma arquitetura semelhante a ambientes reais

## Possíveis Evoluções
* Balanceamento de carga
* Autenticação centralizada
* Logs e monitoramento
* Rate limiting

## Observação
Este projeto é voltado para fins educacionais e serve como base para evoluções em arquiteturas de microserviços.
