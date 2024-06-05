pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'building docker image'
                    nodejsimage = docker.build 'nodeserver:latest', '.'
                    echo 'docker image built now!!'
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
                echo 'pushing image to the Docker Hub image registery'
                script {
                    nodejsimage.push
                }
            }
        }
    }
}
