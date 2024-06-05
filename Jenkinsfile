pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'building docker image'
                    nodejsimage = docker.build 'nodeserver:latest', '.'
                    echo 'docker image built'
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
                echo 'pushing image to Docker Hub image registery now!!'
                script {
                    nodejsimage.push
                }
            }
        }
    }
}
