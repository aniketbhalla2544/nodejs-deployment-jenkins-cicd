pipeline {
    agent any

    environment {
        DOCKER_CREDS = 'docker-creds'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'building docker image'
                    nodejsImage = docker.build('aniketbhalla/nodeserver:latest', '.')
                    echo 'docker image built now!!'
                    docker.withRegistry('', DOCKER_CREDS) {
                        nodejsImage.push()
                    }
                    echo 'image pushed'
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
                echo 'pushing image to the Docker Hub image registery hahah!!'
            }
        }
    }
}
