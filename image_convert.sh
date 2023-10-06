# Go into Image directory for simpler paths
cd public/projects

# Loop through all projects
for dir in *; do
  cd $dir
  # Loop through all images in project
  for file in *; do
    # Only process files with image extensions
    if [[ "$file" =~ \.(jpg|jpeg|png)$ ]]; then

      echo "Converting file: ${file}"

      basename=$(echo $file | cut -d'.' -f 1) # something.jpg -> something

      # Create the following directories if they don't exist
      [ ! -d "webp/" ] && mkdir webp
      [ ! -d "jp2/" ] && mkdir jp2

      # Conversion to Next Gen formats, using solely imageMagick defaults
      # 100 is used as the default generally lessens the quality of the image
      convert $file -quality 100 ./webp/$basename.webp
      convert $file ./jp2/$basename.jp2

    fi
  done
  cd ..
done

# Go back down
cd ../..