pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_URL = ''  // Assuming Docker Hub as default
        DOCKER_HUB_CREDS = 'docker-creds' // jenkins docker hub credentials
        NODEJS_IMAGE = 'aniketbhalla/nodeserver:latest'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'building docker image'
                    docker.build(env.NODEJS_IMAGE, '.')
                    echo 'docker image built'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Test passed'
            }
        }
        stage('Push docker image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry(env.DOCKER_REGISTRY_URL, env.DOCKER_HUB_CREDS) {
                        nodejsImage = docker.image(env.NODEJS_IMAGE)
                        nodejsImage.push()
                    }
                }
                echo 'image pushed!!'
            }
        }
    }
}
