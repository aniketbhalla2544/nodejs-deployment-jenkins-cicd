pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "docker build -t nodejs-server:latest ."
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