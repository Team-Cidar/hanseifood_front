pipeline {
    agent any

    environment {
        GIT_URL = "https://github.com/Team-Cidar/hanseifood_front.git"
    }
    stages {
        stage('Pull') {
            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                git url: "${GIT_URL}", branch: "master", poll: true, changelog: true
                sh "sudo cp /home/joeykim/ws_data/.env /var/lib/jenkins/workspace/hanseifood_ws"
                // sh "sudo cp -r /home/joeykim/ws_data/certbot /var/lib/jenkins/workspace/hanseifood_ws"
            }
        }
        stage('Wipe') {
            steps {
                sh "docker-compose down --rmi all"
            }
        }
        stage('Build') {
            steps {
                sh "sudo docker-compose build"
            }
        }
        stage('Deploy') {
            steps {
                sh 'sudo docker-compose up -d'
            }
        }

        stage('Finish') {
            steps{
                sh 'sudo docker stop react-builder'
                sh 'sudo docker rm react-builder'
                sh 'sudo docker images -qf dangling=true | xargs -I{} docker rmi {}'
            }
        }
    }
}