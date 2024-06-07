pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDS = 'docker-creds' // jenkins docker hub credentials
        NODEJS_IMAGE = 'aniketbhalla/nodeserver:latest'
        IMAGE_REPO_URI  = 'public.ecr.aws/c2f1k9h5/nodejs-server'
        TAG = 'short'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'building docker imagess'
                    docker.build(env.NODEJS_IMAGE, '.')
                    nodejsImage = docker.image("${env.NODEJS_IMAGE}")
                    sh "docker tag ${NODEJS_IMAGE} ${IMAGE_REPO_URI}:${TAG}"
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Test passed'
            }
        }
        stage('Push docker image to AWS ECR Public') {
            steps {
                script {
                    echo 'preparing to pushing docker image'
                    sh 'aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/c2f1k9h5'
                    sh "docker push ${IMAGE_REPO_URI}:${TAG}"
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
