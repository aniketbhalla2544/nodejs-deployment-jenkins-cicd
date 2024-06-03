pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'building stage started!!'
                sh 'docker build -t nodeserver:latest .'
                echo 'docker image built'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing now..'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d --name hello-world hello-world'
                echo 'Deploying....'
            }
        }
    }
}
