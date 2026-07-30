#!/bin/bash

echo "Checking for duplicate images in all blog articles..."
echo "====================================================="

total_duplicates=0
total_articles=0
articles_with_duplicates=0

# Lista de imagini folosite global
declare -A global_image_count

for file in content/blog/*.mdx; do
  echo -n "Checking $(basename "$file"): "
  
  # Extrage toate URL-urile de imagini
  urls=$(grep -o 'https://[^)]*' "$file" | grep -i "unsplash\|imgur")
  
  if [ -z "$urls" ]; then
    echo "No images found"
    continue
  fi
  
  total_articles=$((total_articles + 1))
  
  # Verifică duplicate în articol
  declare -A local_count
  duplicates_in_article=0
  
  while IFS= read -r url; do
    # Simplifică URL-ul (ignoră parametrii de dimensiune)
    base_url=$(echo "$url" | cut -d'?' -f1)
    
    # Contează local
    local_count["$base_url"]=$((local_count["$base_url"] + 1))
    
    # Contează global
    global_image_count["$base_url"]=$((global_image_count["$base_url"] + 1))
  done <<< "$urls"
  
  # Verifică duplicate locale
  for base_url in "${!local_count[@]}"; do
    count=${local_count["$base_url"]}
    if [ "$count" -gt 1 ]; then
      duplicates_in_article=$((duplicates_in_article + count - 1))
    fi
  done
  
  if [ "$duplicates_in_article" -gt 0 ]; then
    articles_with_duplicates=$((articles_with_duplicates + 1))
    total_duplicates=$((total_duplicates + duplicates_in_article))
    echo "❌ $duplicates_in_article duplicate(s)"
    
    # Afișează duplicatele
    for base_url in "${!local_count[@]}"; do
      count=${local_count["$base_url"]}
      if [ "$count" -gt 1 ]; then
        echo "   - $base_url (appears $count times)"
      fi
    done
  else
    echo "✅ OK"
  fi
done

echo ""
echo "====================================================="
echo "SUMMARY:"
echo "Total articles checked: $total_articles"
echo "Articles with duplicate images: $articles_with_duplicates"
echo "Total duplicate images found: $total_duplicates"
echo ""

# Analiză globală
echo "GLOBAL IMAGE USAGE:"
echo "-------------------"

# Sortează imaginile după cât de des sunt folosite
echo "Top 10 most reused images:"
for base_url in "${!global_image_count[@]}"; do
  echo "${global_image_count["$base_url"]} $base_url"
done | sort -rn | head -10

# Calculează statistici
total_images=0
for count in "${global_image_count[@]}"; do
  total_images=$((total_images + count))
done

unique_images=${#global_image_count[@]}
if [ "$unique_images" -gt 0 ]; then
  reuse_ratio=$(echo "scale=2; $total_images / $unique_images" | bc)
  diversity=$(echo "scale=1; $unique_images * 100 / $total_images" | bc)
  
  echo ""
  echo "STATISTICS:"
  echo "Total image instances: $total_images"
  echo "Unique images: $unique_images"
  echo "Average reuse: ${reuse_ratio}x"
  echo "Image diversity: ${diversity}%"
fi