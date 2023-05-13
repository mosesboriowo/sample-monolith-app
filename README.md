# sample-monolith-app
A Sample project to Package a monolith Application


STEPS
1. Clone git 
        git clone https://github.com/mosesboriowo/sample-monolith-app.git
2. cd the folder
        cd sample-monolith-app
3. initialise npm
        npm init -y
4. install the express image
        npm install express 
5. create a JSON file
        touch app.js
6. Build a node for it
        node app.js
7. build a docker image into dockerhub
        ocker build -t mosesboriowo/sample-monolith-app . 
8. Push the image
        docker push mosesboriowo/sample-monolith-app   
9. run the image
        docker run -p 2525:2525 mosesboriowo/sample-monolith-app  