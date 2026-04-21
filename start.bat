@echo off
echo Starting Fruit Shop Application...
echo.

echo Starting JSON Server on port 5000...
start "JSON Server" cmd /c "cd /d %~dp0 && npx json-server --watch db.json --port 5000"

timeout /t 2 /nobreak > nul

echo Starting Angular Dev Server on port 4203...
start "Angular Dev Server" cmd /c "cd /d %~dp0 && npx ng serve --port 4203"

echo.
echo Application started!
echo - Frontend: http://localhost:4203
echo - Backend API: http://localhost:5000
echo.
echo Press any key to stop servers...
pause > nul

echo Stopping servers...
taskkill /f /im node.exe > nul 2>&1
echo Servers stopped.