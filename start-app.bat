REM start-backend.bat
cd backend
start cmd /k node server.js
cd ..

REM start-streamlit.bat
start cmd /k streamlit run pre.py

REM start-frontend.bat
cd frontend
start cmd /k npm start
cd ..
