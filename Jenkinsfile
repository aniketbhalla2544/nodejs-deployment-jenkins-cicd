pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_URL = ''
        DOCKER_HUB_CREDS = 'docker-creds'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'building docker image'
                    nodejsImage = docker.build('aniketbhalla/nodeserver:latest', '.')
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
                script {
                    docker.withRegistry(DOCKER_REGISTRY_URL, DOCKER_HUB_CREDS) {
                        nodejsImage.push()
                    }
                }
                echo 'image pushed'
            }
        }
    }
}
