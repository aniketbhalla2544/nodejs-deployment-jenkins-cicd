pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "building"
                script {
                    def image = docker.build('nodejsserverec2:latest', '.')
                }
                echo "docker image built"
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