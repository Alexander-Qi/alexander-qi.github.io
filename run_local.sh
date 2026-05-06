#!/bin/bash

# 检查 Docker 是否运行
if ! docker info > /dev/null 2>&1; then
  echo "Error: Docker is not running. Please start Docker and try again."
  exit 1
fi

echo "🚀 Starting al-folio locally using Docker..."
echo "📍 The site will be available at: http://localhost:8080"

# 启动服务
# --build 确保如果 Dockerfile 有更新会重新构建
# -d 可以让它在后台运行，但通常本地调试建议直接看日志
docker compose up --build
