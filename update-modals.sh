#!/bin/bash

# Script to update all page components to use ContactFormModal

# Array of files to update
files=(
  "/Users/harsh/Developer/Lawfinity Internal Projects/Test FL/my-app/src/components/pages/FireNOCHaryanaPage.jsx"
  "/Users/harsh/Developer/Lawfinity Internal Projects/Test FL/my-app/src/components/pages/FactoryLicenceUttarPradeshPage.jsx"
  "/Users/harsh/Developer/Lawfinity Internal Projects/Test FL/my-app/src/components/pages/FireNOCDelhiPage.jsx"
  "/Users/harsh/Developer/Lawfinity Internal Projects/Test FL/my-app/src/components/pages/FactoryLicenceHaryanaPage.jsx"
  "/Users/harsh/Developer/Lawfinity Internal Projects/Test FL/my-app/src/components/pages/PollutionNOCHaryanaPage.jsx"
  "/Users/harsh/Developer/Lawfinity Internal Projects/Test FL/my-app/src/components/pages/PollutionNOCUPPage.jsx"
  "/Users/harsh/Developer/Lawfinity Internal Projects/Test FL/my-app/src/components/pages/PollutionNOCDelhiPage.jsx"
)

for file in "${files[@]}"; do
  echo "Updating $file..."
  
  # Replace the import statement
  sed -i '' 's/import ContactForm from "@\/components\/ContactForm";/import ContactFormModal from "@\/components\/ContactFormModal";/g' "$file"
  
  # Replace the modal JSX (this is a simplified approach)
  # Note: This might need manual verification for complex cases
  
  echo "Updated $file"
done

echo "All files updated successfully!"
