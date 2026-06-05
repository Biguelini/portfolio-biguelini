#!/bin/bash

set -e

echo "🚀 Iniciando setup da Biguelini Dev..."
echo ""

if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"
echo "✅ npm $(npm -v) detectado"
echo ""

echo "📦 Instalando dependências..."
npm install

echo ""
echo "✅ Setup concluído!"
echo ""
echo "📝 Próximos passos:"
echo "   npm run dev      - Iniciar servidor de desenvolvimento"
echo "   npm run build    - Build para produção"
echo "   npm run start    - Iniciar servidor de produção"
echo "   npm run lint     - Executar linter"
echo ""
echo "🌐 Servidor de desenvolvimento: http://localhost:3000"
