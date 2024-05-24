pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "building docker images."
                // sh "docker build -t nodejs-server:latest ."
            }
        }
        stage('Test') {
            steps {
                echo 'Testing now..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}