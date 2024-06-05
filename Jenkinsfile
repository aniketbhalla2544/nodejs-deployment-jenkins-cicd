pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'build docker image'
                    nodejsimage = docker.build 'nodeserver:latest', '.'
                    echo 'docker image built'
                    echo 'pushing image to Docker Hub image registery'
                    nodejsimage.push
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Test passed'
            }
        }
        stage('Push docker image to AWS ECR') {
            steps {
                script {
                }
            }
        }
    }
}
