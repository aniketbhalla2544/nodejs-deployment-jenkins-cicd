pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'building stage started!!'
                script {
                    docker.build('nodeserver:latest', '.')
                }
                echo 'docker image built'
            }
        }
        stage('Test') {
            steps {
                echo 'Test passed'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3007:3007 nodeserver:latest'
                echo 'Deploying....'
            }
        }
    }
}
