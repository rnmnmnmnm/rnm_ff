cd "Github repo"/2022.picacg2022.top
now=$(date "+%Y-%m-%d")
git add .
git commit -m "$now"
git pull
git push
# exec /bin/zsh