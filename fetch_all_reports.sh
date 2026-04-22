urls=(
"https://dreamconsultancy.org/sunflower-production-and-homestead-vegetable-farming/"
"https://dreamconsultancy.org/consultancy-for-innovative/"
"https://dreamconsultancy.org/increasing-marginalized-household/"
"https://dreamconsultancy.org/climate-resilience-sustainable-livelihood/"
"https://dreamconsultancy.org/promoting-disaster-ready/"
)

echo "[" > reports_data.json
for url in "${urls[@]}"; do
  echo "Fetching $url"
  html=$(curl -s "$url")
  
  # Basic extraction
  title=$(echo "$html" | grep -o '<title>[^<]*' | sed -e 's/<title>//' -e 's/ - Dream Consultancy Limited//')
  image=$(echo "$html" | grep -Eo 'https://dreamconsultancy.org/wp-content/uploads/[0-9]{4}/[0-9]{2}/[^"]*(png|jpg|jpeg)' | grep -v 'logo' | grep -v 'cropped-logo' | head -1)
  
  # Extract text content by stripping HTML tags
  text_content=$(echo "$html" | sed -e 's/<[^>]*>//g' | tr '\n' ' ' | sed -e 's/  */ /g')
  
  # Extract "Study Type & Name"
  study_type_name=$(echo "$text_content" | grep -Eo 'Study Type & Name[^A-Z]*[A-Z][^.]*\.' | head -1 | sed 's/Study Type & Name //')
  
  # Extract "Organization" -- trying to find it after "Organization" keyword
  organization=$(echo "$text_content" | grep -Eo 'Organization[^T]*Time period' | head -1 | sed -e 's/Organization //' -e 's/ Time period//')
  
  # Extract "Time period"
  time_period=$(echo "$text_content" | grep -Eo 'Time period[^A-Z]*[0-9]{4}[^-]*-[^A-Z]*[A-Za-z]+' | head -1 | sed 's/Time period //')
  
  slug=$(echo "$url" | awk -F/ '{print $(NF-1)}')
  
  echo "{" >> reports_data.json
  echo "  \"slug\": \"$slug\"," >> reports_data.json
  echo "  \"title\": \"$title\"," >> reports_data.json
  echo "  \"date\": \"October 31, 2024\"," >> reports_data.json
  echo "  \"category\": \"Reports\"," >> reports_data.json
  echo "  \"description\": \"Study Type & Name $study_type_name Organization $organization Time $time_period\"," >> reports_data.json
  echo "  \"image\": \"$image\"," >> reports_data.json
  echo "  \"details\": [" >> reports_data.json
  echo "    { \"label\": \"Study Type & Name\", \"value\": \"$study_type_name\" }," >> reports_data.json
  echo "    { \"label\": \"Organization\", \"value\": \"$organization\" }," >> reports_data.json
  echo "    { \"label\": \"Time period\", \"value\": \"$time_period\" }" >> reports_data.json
  echo "  ]" >> reports_data.json
  echo "}," >> reports_data.json
done
echo "]" >> reports_data.json
cat reports_data.json
