# Coding challange pizza order 
## Server

```bash
pip install -r requirements.txt
cd client
python manage.py makemigrations boards 
python manage.py migrate boards  
python manage.py runserver 
```
This will run the server on port 8000. The API is in http://127.0.0.1:8000/api/orders/. That is the only endpoint of the server.


## Client
Needs node.js (npm)
https://nodejs.org/en/download/

```bash
cd client
npm install -g yarn
yarn install
yarn start
```

This will start the frontend on port 3000. Which should be running in parallel with the server port 8000.
The start is http://localhost:3000/ and the orders you can get from http://localhost:3000/orders.
