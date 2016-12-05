cd /home/vincentminde/development/typescript/new-iroad2-apps
git pull origin master
ng build --prod
cp -R dist/* /opt/iroad2/apps/sumatra
cp src/app/apps/sumatra/manifest.webapp /opt/iroad2/apps/sumatra
cp -R dist/* /opt/iroad2/apps/vehicle-capture
cp src/app/apps/vehicle-capture/manifest.webapp /opt/iroad2/apps/vehicle-capture
cp -R dist/* /opt/iroad2/apps/driver-capture
cp src/app/apps/driver-capture/manifest.webapp /opt/iroad2/apps/driver-capture
cp -R dist/* /opt/iroad2/apps/insurance-capture
cp src/app/apps/insurance-capture/manifest.webapp /opt/iroad2/apps/insuranc$
chmod -R 777 /opt/iroad2/apps
