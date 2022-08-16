pipeline {
    agent any

    tools {
        nodejs "nodeJs-16.16.0"
    }

    stages {
        stage('Set Variable') {
              steps {
                script {
                  IMAGE_NAME = "front-end"
                  IMAGE_STORAGE = "ec2-user"
                  IMAGE_STORAGE_CREDENTIAL = "ContainerRegistry"
                  SSH_CONNECTION = "ec2-user@13.56.107.91"
                  SSH_CONNECTION_CREDENTIAL = "Deploy-Server-SSH-Crednetial"
                }

              }
        }

        stage('build') {
            steps {
                dir ('./') {
                    sh 'rm -rf build'
                    sh 'npm install --save --legacy-peer-deps'
                    sh 'npm run build'
                    script {
                      image = docker.build("${IMAGE_STORAGE}/${IMAGE_NAME}")
                    }
                }
            }
        }

        stage('Server Run') {
          steps {
            sshagent(credentials: [SSH_CONNECTION_CREDENTIAL]) {
              sh "ssh -o StrictHostKeyChecking=no ${SSH_CONNECTION} 'docker rm -f ${IMAGE_NAME}'"
              sh "ssh -o StrictHostKeyChecking=no ${SSH_CONNECTION} 'docker rmi -f ${IMAGE_STORAGE}/${IMAGE_NAME}:latest'"
              sh "ssh -o StrictHostKeyChecking=no ${SSH_CONNECTION} 'docker pull ${IMAGE_STORAGE}/${IMAGE_NAME}:latest'"
              sh "ssh -o StrictHostKeyChecking=no ${SSH_CONNECTION} 'docker images'"
              sh "ssh -o StrictHostKeyChecking=no ${SSH_CONNECTION} 'docker run -d --name ${IMAGE_NAME} -p 80:80 ${IMAGE_STORAGE}/${IMAGE_NAME}:latest'"
              sh "ssh -o StrictHostKeyChecking=no ${SSH_CONNECTION} 'docker ps'"
            }
          }
        }
    }
}