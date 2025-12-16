#!/bin/bash

# Скрипт для скачивания изображений с adapty.io
# Использование: ./download-images.sh

BASE_URL="https://adapty.io/assets/uploads/2025/02"
IMAGES_DIR="public/images"

# Создаем директорию если её нет
mkdir -p "$IMAGES_DIR"

# Список изображений для скачивания
images=(
  "adapty-overview@1.5x.webp:adapty-overview.webp"
  "adapty-overview@2x.webp:adapty-overview-2x.webp"
  "adapty-paywall-demo-preview@2x.webp:adapty-paywall-demo-preview.webp"
  "AppNation.webp:appnation.webp"
)

echo "Скачивание изображений с adapty.io..."

for image_pair in "${images[@]}"; do
  IFS=':' read -r source dest <<< "$image_pair"
  url="$BASE_URL/$source"
  dest_path="$IMAGES_DIR/$dest"
  
  if [ ! -f "$dest_path" ]; then
    echo "Скачивание: $source -> $dest"
    curl -L "$url" -o "$dest_path" --silent --show-error
    if [ $? -eq 0 ]; then
      echo "✓ Успешно скачано: $dest"
    else
      echo "✗ Ошибка при скачивании: $source"
    fi
  else
    echo "⊘ Уже существует: $dest"
  fi
done

echo "Готово!"

