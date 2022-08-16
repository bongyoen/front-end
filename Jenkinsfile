pipeline {
  agent any
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
        dir(path: './') {
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
          script {
            try {
              sh "ssh -o StrictHostKeyChecking=no ${SSH_CONNECTION} 'docker stop ${IMAGE_NAME}'"
              sh "ssh -o StrictHostKeyChecking=no ${SSH_CONNECTION} 'docker rm -f ${IMAGE_NAME}'"
            } catch (e) {
              sh 'echo "fail to stop and remove container"'
            }
          }
          sh "ssh -o StrictHostKeyChecking=no ${SSH_CONNECTION} 'ls'"

          sh "ssh -o StrictHostKeyChecking=no ${SSH_CONNECTION} 'docker run -d --name ${IMAGE_NAME} -v $(pwd):/app -p 80:80 ${IMAGE_STORAGE}/${IMAGE_NAME}:latest'"
          sh "ssh -o StrictHostKeyChecking=no ${SSH_CONNECTION} 'echo y | docker system prune --volumes'"
        }

      }
    }

  }
  tools {
    nodejs 'nodeJs-16.16.0'
  }
}