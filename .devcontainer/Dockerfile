# This will be rewrited by docker-compose during build.
ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# Enable unattended installations.
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update

ARG USER=node
USER ${USER}

# Set default pnpm storage to home directory.
RUN npm config set store-dir /home/${USER}/.pnpm-store
# Install global dependencies.
RUN npm install -g @antfu/ni pnpm taze
