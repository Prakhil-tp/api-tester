#! /bin/bash
echo "Automation script starts"
end=$((SECONDS+3600));
counter=1
while [ $SECONDS -lt $end ];
do
  npm start
  mkdir -p output/
  cp ./results.csv "./output/results_${counter}.csv" 
  counter=$((counter+=1))
done
cp ./avg.csv ./output/avg.csv
echo "script ends."