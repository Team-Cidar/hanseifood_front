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
                sh "sudo cp /home/joey/hanseifood_front/.env /var/lib/jenkins/workspace/hanseifood_ws"
            }
        }
        stage('Wipe') {
            steps {
                sh "docker-compose stop"
                sh "docker system prune -f"
            }
        }
        stage('Build') {
            steps {
                sh "docker-compose build"
                // sh 'yes "y" | ./init-letsencrypt.sh'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Finish') {
            steps{
                sh 'docker stop react-builder'
                sh 'docker images -qf dangling=true | xargs -I{} docker rmi {}'
            }
        }
    }
}