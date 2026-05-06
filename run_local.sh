#!/bin/bash

# 检查 Docker 是否运行
if ! docker info > /dev/null 2>&1; then
  echo "Error: Docker is not running. Please start Docker and try again."
  exit 1
fi

echo "🚀 Starting al-folio locally using Docker..."
echo "📍 The site will be available at: http://localhost:8080"

# 启动服务 (后台运行)
# --build 确保如果 Dockerfile 有更新会重新构建
# -d 在后台运行容器
docker compose up --build -d

echo "✅ Server is running in the background."
echo "💡 Use 'docker compose logs -f' to see logs, or 'docker compose down' to stop the server."
