pipeline {
    agent any

    environment {
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
                    echo 'preparing to pushing docker image'
                    docker.withRegistry('', env.DOCKER_HUB_CREDS) {
                        nodejsImage = docker.image("${env.NODEJS_IMAGE}")
                        nodejsImage.push()
                    }
                }
                echo 'image pushed!!'
            }
        }
    }
    post {
        always {
            echo 'clean up completed'
        }
        failure {
            echo 'Pipeline failed'
        }
        success {
            echo 'Pipeline succeeded!'
        }
    }
}
