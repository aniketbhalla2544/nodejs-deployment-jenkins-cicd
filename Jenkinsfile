pipeline {
    agent any

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Build') {
            steps {
                echo 'building stage started!!'
                // sh 'docker build -t nodeserver .'
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
